import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const fields = node.data.target.fields
        console.log(fields)
        if (fields) {
          const alt = fields.title["en-US"]
          const url = fields.file["en-US"].url
          return <img alt={alt} src={url} />
        }
      },
    },
  }

  const blogPost = props.data.contentfulBlogPost

  return (
    <Layout>
      <Head title={blogPost.title} />
      <h1>{blogPost.title}</h1>
      <p>{blogPost.publishedDate}</p>
      {documentToReactComponents(blogPost.body.json, options)}
    </Layout>
  )
}

export default Blog
