import logo from "../images/logo.png"
import "./logo.css";

function Logo() {
  return (
    <>
      <div className="logo-div">
      <img src={logo} alt="logo" className="logo"/>
      </div>
    </>
  );
}

export default Logo;
