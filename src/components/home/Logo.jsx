import logo from "../../images/logo.png";
import "./logo.css";
import { useEffect, useState } from "react";
function Logo() {
  const shadows = [
    "#cc6600",
    "#00ccff",
    "#99ff33",
    "#00cc00",
    "#ffff00",
    "#ff00ff",
    "#ff9900",
  ];

  const [shadow, setShadow] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const shadowInterval = setInterval(() => {
      setShadow(shadows[index]);
      setIndex(index + 1);
    }, 1000);
    if (index === 6) {
      setIndex(0);
      return () => clearInterval(shadowInterval);
    }
  }, [index]);

  return (
    <div>
      <img
        src={logo}
        alt="logo"
        className="logo"
        style={{ filter: `drop-shadow(5px 5px 5px ${shadow})` }}
      />
    </div>
  );
}

export default Logo;
