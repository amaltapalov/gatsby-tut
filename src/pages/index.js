import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

import avatar from "../images/3--beOU3yjg.png"

const Container = styled.div`
  border: 2px solid red;
  border-radius: 10px;
  padding: 10px;
`
const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 1.5rem;
`

const Avatarimg = styled.img`
  max-width: 100px;
`

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Container>
        <Avatarimg src={avatar} alt="" />
        <Heading>Amazing_pandas</Heading>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title} -{" "}
                <span style={{ color: `#bbb` }}>{node.frontmatter.date}</span> -{" "}
                <span style={{ fontSize: `0.8rem`, paddingTop: 10 }}>
                  {node.timeToRead} min
                </span>
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
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
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
