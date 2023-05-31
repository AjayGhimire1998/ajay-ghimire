import React, {useState} from 'react'

function EachContact({contact, play}) {
    const [hover, setHover] = useState(false);
  return (
    <span
    className="kreep"
    onClick={() => play()}
    onMouseOver={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
  >
    { hover ? contact.colored : contact.plain}
  </span>
  )
}

export default EachContact;