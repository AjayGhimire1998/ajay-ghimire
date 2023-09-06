import React from "react";
// import myResume from "../../images/ajayghimire_resume.pdf";
import "./my-resume.css";

function MyResume({ play, hover }) {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [tries, setTries] = React.useState(3);
  const [messageColor, setMessageColor] = React.useState("green");
  const [isLoading, setIsLoading] = React.useState(false);
  const [dotCount, setDotCount] = React.useState(0);
  const [btnText, setBtnTxt] = React.useState("Loading");

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const calcHours = (sec) => {
    const remainingSec = sec % 60;
    const minutes = Math.floor(sec / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours} hours ${remainingMinutes} minutes ${remainingSec} seconds.`;
  };
  const handleRequest = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://yashitech-server.onrender.com/ajay/request_resume",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        }
      );
      const data = await res.json();
      console.log(data);
      setMessage(data.message || "");
      if (data?.unlocks_in) {
        setMessage(
          data.message +
            " for " +
            data.requester_email +
            ". " +
            "Send another request in " +
            calcHours(data.unlocks_in)
        );
        setMessageColor("#ff0033");
        setTries(0);
      } else {
        setMessage(
          data.message
            ? data.message + ". "
            : data.error + " " + data.full_errors.join(". ") + ". "
        );
        if (data.message) {
          setMessageColor("#39ff14");
          setTries(3 - data?.data.request_count);
        } else if (data.error) {
          setMessageColor("#ff0033");
        }
      }

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (isLoading) {
      const loadInterval = setInterval(() => {
        if (dotCount < 3) {
          setDotCount((prev) => prev + 1);
          setBtnTxt((prev) => prev + ".");
        } else {
          setDotCount(0);
          setBtnTxt("Loading");
        }
      }, 250);

      return () => {
        clearInterval(loadInterval);
      };
    } else {
      setDotCount(0);
      setBtnTxt("Loading");
    }
  }, [isLoading, dotCount]);

  return (
    <div className="resume-container">
      <div className="page-head">
        <h3>
          <span>Resume</span>
        </h3>
      </div>
      <div className="my-resume-container">
        <br />
        <div>
          <small>Enter your email and I'll send you a copy of my resume.</small>
        </div>

        <div>
          <input
            type="email"
            id="email-input"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <small>{`${tries} tries left.`}</small>
        </div>
        {message ? (
          <small style={{ color: messageColor }}>{message}</small>
        ) : null}
        {tries === 0 ? null : (
          <div>
            <button
              className="nav-button"
              onMouseOver={hover}
              onClick={handleRequest}
            >
              {isLoading ? btnText : "Request"}
            </button>
          </div>
        )}
      </div>
      <br />
      {/* <div className="download-button-container">
        <a
          href={myResume}
          className="nav-button download"
          onClick={play}
          onMouseOver={hover}
          download="Ajay_Ghimire_Resume-2023.pdf"
        >
          Download
        </a>
      </div> */}
    </div>
  );
}

export default MyResume;
