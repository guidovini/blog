import React from "react"

import projectStyles from "./styles/project.module.scss"

const Project = props => {
  return (
    <div className={projectStyles.container}>
      <div className={projectStyles.containerInner}>
        <div className={projectStyles.categoryBanner}>{props.category}</div>

        {props.imageUrl ? (
          <img
            src={require("../../static/projects/" + props.imageUrl)}
            className={projectStyles.image}
            alt={props.title}
          />
        ) : (
          <img
            src={require("../../static/projects/placeholder.jpg")}
            className={projectStyles.image}
            alt="placeholder"
          />
        )}

        <div className={projectStyles.info}>
          <h2 className={projectStyles.title}>{props.title}</h2>

          <div className={projectStyles.link}>
            {props.githubUrl && (
              <a
                href={props.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
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
      </div>
    </div>
  )
}

export default Project
