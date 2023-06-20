import React, { useState } from "react";
import { onContactClick} from "./contact-svg";

function EachContact({ contact, play }) {
  const [hover, setHover] = useState(false);
  return (
    <span
      className="kreep"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        play();
        onContactClick(contact.link);
      }}
    >
      {hover ? contact.colored : contact.plain}
    </span>
  );
}

export default EachContact;
