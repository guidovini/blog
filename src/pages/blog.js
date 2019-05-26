import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import ComingSoon from "../components/coming-soon"

import blogStyles from "./styles/blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  const posts = data.allContentfulBlogPost.edges

  const renderBlog = false

  return (
    <Layout>
      <Head title="Blog" />

      <h1>Blog</h1>

      {renderBlog ? (
        posts.map(post => {
          return (
            <ol className={blogStyles.posts}>
              <li className={blogStyles.post}>
                <Link to={`/blog/${post.node.slug}`}>
                  <h2>{post.node.title}</h2>
                  <p>{post.node.publishedDate}</p>
                </Link>
              </li>
            </ol>
          )
        })
      ) : (
        <ComingSoon />
      )}
    </Layout>
  )
}

export default BlogPage
