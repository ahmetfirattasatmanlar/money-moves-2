import React from 'react'
import ReactGA from 'react-ga'


export default function Navbar() {
  const sendToGA = (clickedOn) => {
    ReactGA.event({category: 'Button', action: `Clicked on ${clickedOn || ''}`})
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
              <a className="nav-link font-weight-bold" href="/" onClick={sendToGA('Home')}>Home</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link font-weight-bold text-dark" href="/#aboutus" onClick={sendToGA('About Us')}>About Us</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link font-weight-bold text-dark" href="/#services" onClick={sendToGA('Services')}>Services</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link font-weight-bold text-dark" href="/portfolio" onClick={sendToGA('Portfolio')}>Portfolio</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link font-weight-bold text-dark" href="/#blog" onClick={sendToGA('Blog')}>Blog</a>
            </li>
          </ul>
          <a href="/contact">
          <button type="button" className="btn btn-primary px-4 rounded-lg" onClick={sendToGA('Contact')}>Contact</button>
          </a>
        </div>
      </nav>
    )
}
