import React from 'react'
import "./navbar.css"
function navbar() {
  return (
    <div className='navbar'>
        <button className='ui button secondary red'>Home</button>
        <button className='ui button secondary red'>About</button>
        <button className='ui  button secondary red'>Projects</button>
        <button className='ui  button secondary red'>Resume</button>
    </div>
  )
}

export default navbar