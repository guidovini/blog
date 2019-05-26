import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Project from "../components/project"
import ComingSoon from "../components/coming-soon"

const projects = [
  {
    title: "This is project 1",
    info: "This is info 1",
    tech: "This is the tech 1",
  },
  {
    title: "This is project 2",
    info: "This is info 2",
    tech: "This is tech 2",
  },
  {
    title: "This is project 3",
    info: "This is info 3",
    tech: "This is tech 3",
  },
]

const renderProjects = false

const ProjectsPage = () => {
  return (
    <Layout>
      <Head title="My Portfolio" />

      <h1>Projects</h1>

      {renderProjects ? (
        projects.map(project => (
          <Project
            title={project.title}
            info={project.info}
            tech={project.tech}
          />
        ))
      ) : (
        <ComingSoon />
      )}
    </Layout>
  )
}

export default ProjectsPage
