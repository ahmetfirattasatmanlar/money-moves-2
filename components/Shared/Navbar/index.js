import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-5">
        <Link className="navbar-brand" href="/"><img src="./pengyi-logo-navbar.svg" alt="upwork logo"></img></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item active mx-3">
              <a className="nav-link text-primary font-weight-bold" href="#"><u>Home</u> <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link font-weight-bold text-dark" href="#">About Us</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link font-weight-bold text-dark" href="#">Services</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link font-weight-bold text-dark" href="#">Portfolio</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link font-weight-bold text-dark" href="#">Blog</a>
            </li>
          </ul>
          <Link href="/contact">
          <button type="button" className="btn btn-primary px-4 rounded-lg">Contact</button>
          </Link>
        </div>
      </nav>
    )
}