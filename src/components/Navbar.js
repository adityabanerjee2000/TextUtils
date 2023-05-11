// if We Want React Function Based Components Then We Write rfc
// if We Want React Arrow Function Based Components Then We Write rafc
// if we want to use PropTypes Then We Have To Write impt
// if we want to write Proptypes.string then we write(pts)
// if we want to write Proptypes.array then we write(pta)
// When We Are Useing React Router Then all a will be replaced with Link and all href will be replaced 
// with to
// import { Link } from 'react-router-dom'
// <a className="navbar-brand" href="/">{props.title}</a>
// <Link className="navbar-brand" to="/">{props.title}</Link>

import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About TextUtils</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search or Type a URL"aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" id='modeTextToggle' htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}
// PropTypes In JavaScript
//SYNTAX: nameOfFunction.variableName = {propsName: Proptypes.dataType,
//                                     propsName: Proptypes.dataType}
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string,
                  search: PropTypes.string}

Navbar.defaultProps = {title: "Title De Vai",
                      aboutText: "Vai About a Kicchu disni",
                      search: "Default Props ami"}

