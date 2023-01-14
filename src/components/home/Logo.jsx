
import "./logo.css";

function Logo({logo, shadow}) {
  
  return (
    <div>
      <img
        src={logo}
        alt="logo"
        className="logo"
        style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}
      />
    </div>
  );
}

export default Logo;
