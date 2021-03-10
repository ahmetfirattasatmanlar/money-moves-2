import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-primary py-5 text-white mt-3">
        <div className="container">
          <div className="d-flex align-items-center mt-3 mb-5" style={{justifyContent: 'space-evenly'}}>
            <div>
            <h3 className="text-white">Leave us your mail to subscribe<br /> to our weekly blogposts</h3>
            </div>
            <div>
              <form name="subscriptions" method="POST" data-netlify="true" className="form-inline">
              <input type="hidden" name="form-name" value="subscriptions" />
                <div className="form-group mx-sm-3 mb-2">
                  <input type="email" name="email" className="form-control" id="inputPassword2" placeholder="Email" required />
                </div>
                <button type="submit" className="btn btn-light text-primary mb-2">Subscribe</button>
              </form>
            </div>
          </div>
          <h3 className="text-white text-center">We are available for new projects on all major hiring platforms</h3>
          <div className="social-icons py-5 text-center">
            <a className="pr-5"  href="https://www.upwork.com/agencies/~01b0561df3bf4ea42c" rel="noopener noreferrer" target="_blank">
              <img width="10%" src="/Upwork.png" alt="upwork logo"></img>
            </a>
            <a className="pr-5" href="https://www.linkedin.com/company/pengyilabs/" rel="noopener noreferrer" target="_blank">
              <img width="10%" src="/linkedin.svg" alt="linkedin logo"></img>
            </a>
            <a className="pr-5" href="https://dribbble.com/pengyilabs" rel="noopener noreferrer" target="_blank">
              <img width="10%" src="/dribbble.svg" alt="dribbble logo"></img>
            </a>
            <a className="pr-5" href="https://clutch.co/profile/pengyi-labs" rel="noopener noreferrer" target="_blank">
              <img width="10%" src="/clutch.png" alt="clutch logo"></img>
            </a>
          </div>
          <p className="my-2 text-center">
            At PengYi we are excited to take on new challenges, if you rather contact us directly please write an email to <u><a href="mailto:hello@pengyilabs.io" className="text-white">hello@pengyilabs.io</a></u>
          </p>
        </div>
      </footer>
    )
}