import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import ProjectList from "../components/projectList"
import ComingSoon from "../components/coming-soon"

const renderProjects = true

const ProjectsPage = () => {
  return (
    <Layout>
      <Head title="My Portfolio" />

      <h1>Projects</h1>

      {renderProjects ? <ProjectList /> : <ComingSoon />}
    </Layout>
  )
}

export default ProjectsPage
