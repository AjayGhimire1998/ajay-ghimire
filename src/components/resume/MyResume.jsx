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
      setEmail("");
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
        <h2>Resume</h2>
      </div>
      <br />
      <div className="my-resume-container">
        <p>Enter your email and I'll send you a copy of my resume.</p>
        <div className="email-input">
          <label htmlFor="email-input">Email:</label>
          <input
            type="email"
            id="email-input"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          {/* <span>{`${tries} tries left.`}</span> */}
        </div>
        {message ? <p style={{ color: messageColor }}>{message}</p> : null
        // <p>I am using Render's free hosting service. It sleeps while inactive, so please give it few seconds to wake back up.</p>
        }
        {tries === 0 ? null : (
          <div>
            <button
              className="nav-button request"
              onMouseOver={hover}
              onClick={handleRequest}
              disabled={isLoading}
            >
              {isLoading ? btnText : "Request"}
            </button>
          </div>
        )}
      </div>
      <br />
    </div>
  );
}

export default MyResume;
