import React from 'react'

export default function Body(props) {
    // let a = prompt("Enter Your Name")
    // let b = prompt("Enter Your Class")
    // let c = prompt("Enter Your Roll")
  return (
    <div className="container">
        <li>Your Name is:{props.a}</li>
        <li>Your Class is:{props.b}</li>
        <li>Your Roll is:{props.c}</li>
    </div>
  )
}
