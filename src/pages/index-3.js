import React from "react"
import Layout from "../components/layout"

// Page query
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>Personal website of {data.site.siteMetadata.title}</h1>
    <p>
      <em>
        {data.site.siteMetadata.description} - by{" "}
        {data.site.siteMetadata.author}
      </em>
    </p>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
