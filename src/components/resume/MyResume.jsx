import React from "react";
// import myResume from "../../images/ajayghimire_resume.pdf";
import "./my-resume.css";

function MyResume({ play, hover }) {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [tries, setTries] = React.useState(3);
  const [messageColor, setMessageColor] = React.useState("green");

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const calcHours = (sec) => {
    const remainingSec = sec % 60;
    const minutes = Math.floor(sec / 60); // Calculate total minutes
    const hours = Math.floor(minutes / 60); // Calculate total hours
    const remainingMinutes = minutes % 60;

    return `${hours} hours ${remainingMinutes} minutes ${remainingSec} seconds.`;
  };
  const handleRequest = async () => {
    try {
      const res = await fetch("http://127.0.0.1:3000/ajay/request_resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
      const data = await res.json();
      if (data?.unlocks_in) {
        setMessage(
          data.message +
            ". " +
            "Send another request in " +
            calcHours(data.unlocks_in)
        );
        setMessageColor("#ff0033")
        setTries(0);
      } else {
        setMessage(data.message);
        setMessageColor("#39ff14");
      setTries(data.data.request_count)
      }

      console.log(data);
    } catch (err) {
      console.log(err.message);
      setMessage(err.message);
    }
  };

  React.useEffect(() => {
    
  }, [tries]);

  return (
    <div className="resume-container">
      <div className="page-head">
        <h3>
          <span>Resume</span>
        </h3>
      </div>
      <div className="my-resume-container">
        {/* <iframe
          src={myResume + "#toolbar=0"}
          title="Ajay_Ghimire_Resume"
          className="my-resume"
        /> */}
        <br />
        <div>
          <small>Enter your email and I'll send you a copy of my resume.</small>
        </div>

        <div>
          <input
            type="email"
            id="email-input"
            value={email}
            onChange={handleEmailChange}
          />
          <small>{ tries === 0 ? "0 tries left" : tries === 3 ? "3 tries left" : `${3 - tries} tries left.`}</small>
        </div>
        {message ? (
          <small style={{ color: messageColor }}>{message}</small>
        ) : null}
        <div>
          <button
            className="nav-button"
            onMouseOver={hover}
            onClick={handleRequest}
          >
            Request
          </button>
        </div>
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
