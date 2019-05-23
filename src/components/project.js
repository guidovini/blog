import React from 'react'

const Project = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.info}</p>
      <h3>Technologies: </h3>
      <p>{props.tech}</p>
    </div>
  )
}

export default Project