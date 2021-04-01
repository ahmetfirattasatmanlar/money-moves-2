import '../styles/App.scss'
import React from 'react'
import {useEffect} from 'react'
import { initGA, logPageView } from 'utils/analytics'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    runGA()
    return () => {}
  }, [])

  const runGA =() =>{
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  return <Component {...pageProps} />
}

export default MyApp
