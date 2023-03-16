import React from "react"

const Container = (props) => {
  return (
    <div className={`container ${props.className}`} id={props.id}>
      {props.children}
    </div>
  )
}

export default Container
