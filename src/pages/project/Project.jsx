import React from 'react'
import "./project.css"
import Projects from '../../components/projects/Projects'

function Project({ hover, play}) {
  return (
    <div className='projects'>
      <Projects hover={hover} play={play}/>
    </div>
  )
}

export default Project