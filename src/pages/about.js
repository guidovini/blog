import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About Me"/>
      <h1>About me</h1>
      <p>
        I am a full-stack web developer/mechatronics engineer/tech enthusiast based in Quito, Ecuador. 
        I am passionate about technology and its use to improve and ease human life quality. 
        I use a multi-disciplined approach to solve problems. 
        A fast learner who adapts quickly to assess an organization’s needs.
      </p>

      <h2>My Goal</h2>
      <p>
        My goal is to combine these technical knowledge areas into a specialized profile which can develop innovative products and solutions using multiple points of view among various tech fields.
      </p>
      <p>
        I am actively looking forward to expanding my knowledge, improve my skills and obtain relevant experience in the IT industry in order to help develop world-changing solutions.
      </p>

      <p style={{ textAlign: 'center' }}>
        I
        <span role="img" aria-label="love"> ❤️ </span> 
        pc building,
        <span role="img" aria-label="online-gamming"> 🎮 </span>
        , 
        <span role="img" aria-label="watching movies"> 🍿 </span>
        , 
        <span role="img" aria-label="listening to music"> 🎧 </span>
        , and 
        <span role="img" aria-label="reading books"> 📖</span>
        .  
      </p>

      <strong>
      Wanna talk? <Link to='/contact'>Reach out!</Link>
      </strong>
    </Layout>
  )
}

export default AboutPage