import React from 'react'

import Layout from "../components/layout"
import Head from '../components/head'

const SkillsPage = () => {
  return (
    <Layout>
      <Head title="Skills" />
      <h1>Skills</h1>
      <h2>Full Stack Developer / JS / Node / React / PostgreSQL</h2>
      <p>
        As a web developer, I use HTML, CSS, Javascript, and the PERN stack (PostgreSQL, Express, React, Node), a slight variation of the well know MERN stack. 
        Aside from that, I am familiar with tools like: npm, eslint, prettier, Jest, Enzyme, Redux, Socket.io, Webpack, babel, Git and Heroku for state management, live updates, building, version control and hosting.
      </p>

      <p>
        My projects include web applications with dynamic web content, live content update, REST API calls, database storage, user authentication. 
        You can check them out at <a href="/projects" target="_blank">www.guidosantillan.com/projects</a>
      </p>

      <p>
        Right now, I am actively learning <strong>GraphQL</strong>, <strong>server-side rendering</strong>, and containerization with <strong>Docker</strong>.
      </p>

      <h2>Robotics / CAD / Mechatronics Systems</h2>
      <p>
        As a mechatronics engineer, I have experience in the design and improvement of automated processes, robotics, the innovation of equipment and production systems using computer-aided design software to develop and test potential solutions. 
        Proven skills in CAD/CAM/CAE, mechatronic design, PLC, embedded systems, design of machine elements, integrated manufacturing systems.
      </p>

      <h2>AI / Blockchain</h2>
      <p>
        As a tech enthusiast, I spent my free time researching trending and innovative technologies and future applications. Currently, I am very interested in AI, deep learning and blockchain. 
      </p>
    </Layout>
  )
}

export default SkillsPage