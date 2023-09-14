import { useNavigate } from "react-router-dom";
import "./logo.css";

function Logo({ logoSrc, shadow, play }) {
  const navigate = useNavigate();
  return (
    <section className="logo-container">
      <button
        className="logo-button"
        aria-label="Go to Home Page"
        onClick={() => {
          play();
          navigate("/");
        }}
      >
        <img
          src={logoSrc}
          alt="Ajay Ghimire - Software Developer Logo"
          className="logo shadow"
          style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}
        />
      </button>
    </section>
  );
}

export default Logo;
