import React from "react"
import cn from "classnames"

import "./style.css"

export default function Label(props) {
  const { text, className, children, ...otherProps } = props

  return (
    <label className={cn("my-label", className)} {...otherProps}>
      {children || text}
    </label>
  )
}
