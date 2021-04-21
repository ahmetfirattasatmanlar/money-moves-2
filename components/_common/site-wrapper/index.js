import React from 'react';
import Head from 'next/head'
import Navbar from 'components/_common/Navbar'
import Footer from 'components/_common/Footer'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {useState, useEffect} from 'react'


export default function SiteWrapper({children}){
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    window.location.hostname === 'pengyilabs.io' ? setShowChat(true): null

    return () => {

    }
  }, [])


  return (
    <>
      <Head>
        <title>PengYi Labs Costa Rica | Singapore</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-164970324-1"></script>
        <script dangerouslySetInnerHTML ={{__html:
          `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          '[https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);](https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);)
          })(window,document,'script','dataLayer','GTM-5WGCCSM');`
        }}/>
      </Head>
      {/* Google Tag Manager (noscript) */}
      <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WGCCSM" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}/>
      <Navbar />
      {children}
      <Footer/>
      {showChat && <MessengerCustomerChat pageId="101921091461361" appId="404665513945389"/>}
    </>
  )
}
