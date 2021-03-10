import React from 'react';
import SiteWrapper from 'components/Shared/site-wrapper'

export default function Landing() {
  return (
    <SiteWrapper>
        <div className="container">
          <div className="my-5 row align-items-center justify-content-around">
              <div className="col-5">
                  <h1 className="text-primary">Let's talk about everything!</h1>
                  <p>Don’t like forms? Send us an <u><a href="mailto:hello@pengyilabs.io" className="text-dark">email</a></u></p>
                  <img src="./contact.svg"></img>
              </div>
              <div className="col-5">
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control bg-transparent border border-secondary" placeholder="Name" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control bg-transparent border border-secondary" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" name="subject" className="form-control bg-transparent border border-secondary" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" className="form-control bg-transparent border border-secondary" placeholder="Message" required />
                  </div>
                  <div className="row align-items-center">
                    <div className="col-7">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" name="termsConditions" required />
                      <label className="form-check-label">
                        Accept terms & conditions
                      </label>
                    </div>
                    </div>
                    <div className="col">
                      <button type="submit" className="btn btn-primary px-4 rounded-lg btn-block">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>
    </SiteWrapper>
  )
}
