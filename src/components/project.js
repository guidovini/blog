import React from "react"

import projectStyles from "./styles/project.module.scss"

const Project = props => {
  return (
    <div className={projectStyles.container}>
      <h2 className={projectStyles.title}>{props.title}</h2>
      {props.githubUrl && (
        <a href={props.githubUrl} target="_blank">
          Github
        </a>
      )}

      {!props.githubUrl || (props.liveUrl && <span> | </span>)}

      {props.liveUrl && (
        <a href={props.liveUrl} target="_blank">
          Demo
        </a>
      )}

      <p className={projectStyles.description}>{props.description}</p>
      <h4 className={projectStyles.techTitle}>Technologies: </h4>
      <div className={projectStyles.tech}>
        {props.tech.map(t => {
          return (
            <p key={t} className={projectStyles.t}>
              {t}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Project
