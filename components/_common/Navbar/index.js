import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <a className="navbar-brand" href="/"><img src="/pengyi-logo-navbar.svg" alt="Pengyi logo"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item active mx-3">
              <a className="nav-link font-weight-bold" href="/">Home</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link font-weight-bold text-dark" href="/#aboutus">About Us</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link font-weight-bold text-dark" href="/#services">Services</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link font-weight-bold text-dark" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link font-weight-bold text-dark" href="/#blog">Blog</a>
            </li>
          </ul>
          <a href="/contact">
          <button type="button" className="btn btn-primary px-4 rounded-lg">Contact</button>
          </a>
        </div>
      </nav>
    )
}
