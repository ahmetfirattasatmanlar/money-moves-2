import React from 'react'
// import { logEvent } from 'utils/analytics'


export default function Navbar() {
  const handleGAClick = (e) => {
    // logEvent('Button',e.target.innerText)
  }
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <a className="navbar-brand" href="/"><img src="/pengyi-logo-navbar.svg" alt="upwork logo"></img></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto ml-auto">
          <li className="nav-item active mx-3">
            <a className="nav-link font-weight-bold" href="/" onClick={handleGAClick}>Home</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link font-weight-bold text-dark" href="/#aboutus" onClick={handleGAClick}>About Us</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link font-weight-bold text-dark" href="/#services" onClick={handleGAClick}>Services</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link font-weight-bold text-dark" href="/portfolio" onClick={handleGAClick}>Portfolio</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link font-weight-bold text-dark" href="/#blog" onClick={handleGAClick}>Blog</a>
          </li>
        </ul>
        <a href="/contact">
        <button type="button" className="btn btn-primary px-4 rounded-lg" onClick={handleGAClick}>Contact</button>
        </a>
      </div>
    </nav>
  )
}
