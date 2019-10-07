import React from "react"
import containerStyles from "./container.module.css"

export default ({ children }) => (
  <>
    <div className={containerStyles.container}>{children}</div>
    <div>
      <img
        className={containerStyles.myImage}
        src="https://source.unsplash.com/random/400x200"
        alt=""
      />
    </div>
  </>
)
