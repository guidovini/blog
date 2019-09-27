import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Project from "../components/project"
import ComingSoon from "../components/coming-soon"

const projects = [
  {
    title: "Syder Ideas",
    description: "Store your ideas in an intuitive way.",
    tech: ["js", "react", "node", "express"],
    category: "dev",
    imageUrl: "../static/projects/dev/syder-ideas-main.png",
  },
  {
    title: "Expofranquicias",
    description: "Find LatinAmerican franchises here.",
    tech: ["react", "gatsby", "graphql"],
    category: "dev",
    imageUrl: "../static/projects/dev/expofranquicias-main.png",
  },
  {
    title: "Robot controlled by Human Motion",
    description: "It uses KINECT to capture your movement.",
    tech: ["arduino", "processing"],
    category: "mechatronics",
    imageUrl: "../static/projects/mechatronics/robot-main.png",
  },
  {
    title: "Image Detection of Drivers",
    description: "Kaggle",
    tech: ["pytorch", "python"],
    category: "AI",
    imageUrl: "../static/projects/others/deep-learning-main.png",
  },
]

const renderProjects = true

const ProjectsPage = () => {
  return (
    <Layout>
      <Head title="My Portfolio" />

      <h1>Projects</h1>

      {renderProjects ? (
        projects.map(({ title, description, tech, category }) => (
          <Project
            key={title}
            title={title}
            description={description}
            tech={tech}
            category={category}
          />
        ))
      ) : (
        <ComingSoon />
      )}
    </Layout>
  )
}

export default ProjectsPage
