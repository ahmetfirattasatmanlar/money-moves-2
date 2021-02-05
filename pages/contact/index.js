import React from 'react';
import Head from 'next/head'
import Navbar from '../../components/Shared/Navbar'
import Footer from '../../components/Shared/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PengYi Labs Costa Rica</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-164970324-1"></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-164970324-1');`
            }}
          />
      </Head>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WGCCSM"
      height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
      <div>
        <div>
          <Navbar />
        </div>

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
    
        <Footer />
    </div>
    </div>
  )
}
