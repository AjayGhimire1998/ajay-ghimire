import React from 'react'
import "./project.css"
import Projects from '../../components/projects/Projects'

function Project({ hover, play}) {
  return (
    <section className='projects'>
      <Projects hover={hover} play={play}/>
    </section>
  )
}

export default Project