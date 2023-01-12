import logo from "../../images/logo.png"
import "./logo.css"
function Logo() {
  return (
    <div className="logo-holder">
        <img src={logo} alt="logo" className="logo" />
    </div>
  )
}

export default Logo