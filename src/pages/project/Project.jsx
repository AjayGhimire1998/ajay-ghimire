import React from 'react'
import "./project.css"
import Projects from '../../components/projects/Projects'

function Project({shadow , hover, play}) {
  return (
    <div className='projects'>
      <Projects shadow={shadow} hover={hover} play={play}/>
    </div>
  )
}

export default Project