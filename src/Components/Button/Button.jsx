import './Button.css'
import React from 'react'

export default function Button(props) {
  return (
      <button className={props.class} onClick={props.function}>{props.text}</button>
  )
}
