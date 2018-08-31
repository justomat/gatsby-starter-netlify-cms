import React from "react"
import Link from "gatsby-link"

import github from "../img/github-icon.svg"
import logo from "../img/logo.svg"

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start" />
      <div className="navbar-end">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <a
          className="navbar-item"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          b
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
