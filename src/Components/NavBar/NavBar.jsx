import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
  <div className="container">
    <Link className="navbar-brand " to="home">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto gap-2 mb-2 mb-lg-0">
        <li className="nav-item ">
          <NavLink className="nav-link " aria-current="page" to="about">ABOUT</NavLink>
        </li>
      
        <li className="nav-item ">
          <NavLink className="nav-link " to="porto">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="contact">CONTACT</NavLink>
        </li>
    
      
      
      </ul>
    
    </div>
  </div>
</nav>

    
    
    </>
  )
}
