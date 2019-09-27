import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Project from "../components/project"
import ComingSoon from "../components/coming-soon"

import projects from "../data/projects"

const renderProjects = true

const ProjectsPage = () => {
  return (
    <Layout>
      <Head title="My Portfolio" />

      <h1>Projects</h1>

      {renderProjects ? (
        projects.map(
          ({ title, description, tech, category, githubUrl, liveUrl }) => (
            <Project
              key={title}
              title={title}
              description={description}
              tech={tech}
              category={category}
              githubUrl={githubUrl}
              liveUrl={liveUrl}
            />
          )
        )
      ) : (
        <ComingSoon />
      )}
    </Layout>
  )
}

export default ProjectsPage
