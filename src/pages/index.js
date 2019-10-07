import React from "react"
import Layout from "../components/layout"

// Page query
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>Personal website of {data.site.siteMetadata.title}</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </Layout>
)

export const data = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
