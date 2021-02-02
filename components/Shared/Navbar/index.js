import React from 'react'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light mx-5 py-0">
        <a class="navbar-brand" href="#"><img src="./pengyi-logo-navbar.svg" alt="upwork logo"></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto ml-auto">
            <li class="nav-item active mx-3">
              <a class="nav-link text-primary font-weight-bold" href="#"><u>Home</u> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link font-weight-bold text-dark" href="#">About Us</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link font-weight-bold text-dark" href="#">Services</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link font-weight-bold text-dark" href="#">Portfolio</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link font-weight-bold text-dark" href="#">Blog</a>
            </li>
          </ul>
          <button type="button" class="btn btn-primary px-4 rounded-lg">Contact</button>
        </div>
      </nav>
    )
}