import React from "react"
import cn from "classnames"

import "./style.css"

export default function Textfield(props) {
  const { className, ...otherProps } = props

  return <input className={cn("my-textfield", className)} {...otherProps} />
}
