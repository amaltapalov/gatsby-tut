import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Container = styled.div`
  border: 2px solid red;
`

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Container>
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
      </Container>
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
