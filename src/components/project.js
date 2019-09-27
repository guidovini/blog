import React from "react"

import projectStyles from "./styles/project.module.scss"

const Project = props => {
  return (
    <div className={projectStyles.container}>
      <h2 className={projectStyles.title}>{props.title}</h2>
      <p className={projectStyles.description}>{props.description}</p>
      <h4 className={projectStyles.techTitle}>Technologies: </h4>
      <p className={projectStyles.tech}>{props.tech}</p>
    </div>
  )
}

export default Project
