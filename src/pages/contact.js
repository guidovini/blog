import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head title="About Me" />
      <h1>Contact</h1>
      <p>
        Contact me directly, send your email to{" "}
        <a href="mailto:info@guidosantillan.com">info@guidosantillan.com</a>.
      </p>
    </Layout>
  )
}

export default Contact
