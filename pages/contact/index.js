import React from 'react';
import Head from 'next/head'
import Navbar from '../../components/Shared/Navbar'

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
                  <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="email" className="form-control bg-transparent border border-secondary"  placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="email" className="form-control bg-transparent border border-secondary" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Subject</label>
                    <input type="text" className="form-control bg-transparent border border-secondary" placeholder="Subject" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Message</label>
                    <textarea className="form-control bg-transparent border border-secondary" placeholder="Message" />
                  </div>
                  <div className="row align-items-center">
                    <div className="col-7">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" />
                      <label className="form-check-label" for="gridCheck">
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
    
      <footer className="bg-primary py-5 text-white mt-3">
        <div className="container">
          <div className="d-flex align-items-center mt-3 mb-5" style={{justifyContent: 'space-evenly'}}>
            <div>
            <h3 className="text-white">Leave us your mail to subscribe<br /> to our weekly blogposts</h3>
            </div>
            <div>
              <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                  <input type="email" className="form-control" id="inputPassword2" placeholder="Email" />
                </div>
                <button type="submit" className="btn btn-light text-primary mb-2">Subscribe</button>
              </form>
            </div>
          </div>
          <h3 className="text-white text-center">We are available for new projects on all major hiring platforms</h3>
          <div className="social-icons py-5 text-center">
            <a className="pr-5"  href="https://www.upwork.com/agencies/~01b0561df3bf4ea42c" rel="noopener noreferrer" target="_blank">
              <img width="10%" src="./Upwork.png" alt="upwork logo"></img>
            </a>
            <a className="pr-5" href="https://www.linkedin.com/company/pengyilabs/" rel="noopener noreferrer" target="_blank">
              <img width="10%" src="./linkedin.svg" alt="linkedin logo"></img>
            </a>
            <a className="pr-5" href="https://dribbble.com/pengyilabs" rel="noopener noreferrer" target="_blank">
              <img width="10%" src="./dribbble.svg" alt="dribbble logo"></img>
            </a>
            <a className="pr-5" href="https://clutch.co/profile/pengyi-labs" rel="noopener noreferrer" target="_blank">
              <img width="10%" src="./clutch.png" alt="clutch logo"></img>
            </a>
          </div>
          <p className="my-2 text-center">
            At PengYi we are excited to take on new challenges, if you rather contact us directly please write an email to <u><a href="mailto:hello@pengyilabs.io" className="text-white">hello@pengyilabs.io</a></u>
          </p>
        </div>
      </footer>
    </div>
    </div>
  )
}
