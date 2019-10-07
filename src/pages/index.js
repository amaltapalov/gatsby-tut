import React from "react"
import MyNav from "../components/mynav"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <MyNav />
    <Header headerText="Hello Gatsby!" />
    <p>What a world</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
