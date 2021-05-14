import '../styles/App.scss'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return <div className="bg-white">
    <div className="mx-auto bg-gradient" style={{maxWidth: '25rem', minHeight: '100vh'}}>
      <Component {...pageProps} />
    </div>
  </div>
}

export default MyApp
