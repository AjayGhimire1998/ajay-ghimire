import React from 'react'
import "./project.css"
import Projects from '../../components/projects/Projects'

function Project({shadow}) {
  return (
    <div className='projects'>
      <Projects shadow={shadow}/>
    </div>
  )
}

export default Project