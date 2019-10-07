import React from "react"
import { Link } from "gatsby"
import styles from "./mynav.module.css"

export default () => (
  <div className={styles.mynav}>
    <Link to="/">Home</Link>
    <Link to="/contact/">Contact</Link>
    <Link to="/about/">About Gatsby</Link>
    <Link to="/about-css-modules/">About CSS modules</Link>
  </div>
)
