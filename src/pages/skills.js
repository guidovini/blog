import React from 'react'

import Layout from "../components/layout"
import Head from '../components/head'

const SkillsPage = () => {
  return (
    <Layout>
      <Head title="Skills" />
      <h1>Skills</h1>

      <h2 style={{ textAlign: 'center', marginBottom: 10 }}>Full Stack Developer</h2>
      <h3 style={{ textAlign: 'center' }}>JS / Node / React / PostgreSQL</h3>
      <p>
        As a web developer, I use HTML, CSS, Javascript, and the PERN stack (PostgreSQL, Express, React, Node), a slight variation of the well know MERN stack. 
        Aside from that, I am familiar with tools like: npm, eslint, prettier, Jest, Enzyme, Redux, Webpack, babel, Git for version control and Heroku/Netlify for live updates, and hosting.
      </p>
      <p>
        My projects include web applications with dynamic web content, live content update, REST API calls, database storage, user authentication. 
        You can check them out <a href="https://github.com/guidosantillan01" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <p>
        Right now, I am actively learning <strong>GraphQL</strong>, <strong>server-side rendering</strong>, and containerization with <strong>Docker</strong>.
      </p>

      <h2 style={{ textAlign: 'center', marginTop: 80, marginBottom: 10 }}>Mechatronics Engineer</h2>
      <h3 style={{ textAlign: 'center' }}>Robotics / CAD-CAM-CAE / Mechatronics Systems</h3>
      <p>
        As a mechatronics engineer, I have experience in the design and improvement of automated processes, robotics, the innovation of equipment and production systems using computer-aided design software to develop and test potential solutions. 
        Proven skills in CAD/CAM/CAE, mechatronic design, PLC, embedded systems, design of machine elements, integrated manufacturing systems.
      </p>

      <h2 style={{ textAlign: 'center', marginTop: 80 }}>My Hobbies</h2>
      <p>
        As a tech enthusiast, I spent my free time researching trending and innovative technologies and future applications. Currently, I am very interested in AI and <a href="https://github.com/guidosantillan01/pytorch-distracted-drivers" target="_blank" rel="noopener noreferrer">deep learning</a>. 
      </p>
    </Layout>
  )
}

export default SkillsPage