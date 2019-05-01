import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql
  `
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate (formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `
  )
  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {posts.map(post => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${post.node.slug}`}>
                <h2>{post.node.title}</h2>
                <p>{post.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
      
    </Layout>
  )
}

export default BlogPage