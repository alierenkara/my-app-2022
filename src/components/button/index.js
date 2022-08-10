import React from "react"
import cn from "classnames"

import "./style.css"

export default function Button(props) {
  const { text, className, children, ...otherProps } = props

  return (
    <button className={cn("my-button", className)} {...otherProps}>
      {children || text}
    </button>
  )
}
