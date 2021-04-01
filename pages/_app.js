import '../styles/App.scss'
// import ReactGa from 'react-ga'
import React, {useEffect} from 'react'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // ReactGa.initialize('UA-164970324-1')
    // Report Page View to Google Analytics
    // console.log(window.location.hostname, window.location.pathname,window.location.search)
    // ReactGa.pageview(window.location.pathname + window.location.search)
    return () => {}
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
