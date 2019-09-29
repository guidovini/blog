import React from "react"

import projectStyles from "./styles/project.module.scss"

const Project = props => {
  return (
    <div className={projectStyles.container}>
      <h2 className={projectStyles.title}>{props.title}</h2>

      <div className={projectStyles.link}>
        {props.githubUrl && (
          <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        )}

        {!props.githubUrl || (props.liveUrl && <span> | </span>)}

        {props.liveUrl && (
          <a href={props.liveUrl} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </div>

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
