import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>Amazing pandas</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title} -{" "}
                <span style={{ color: `#bbb` }}>{node.frontmatter.date}</span> -
                <div style={{ fontSize: `0.8rem`, paddingTop: 10 }}>
                  {node.timeToRead} min
                </div>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
          timeToRead
          excerpt
        }
      }
      totalCount
    }
  }
`
