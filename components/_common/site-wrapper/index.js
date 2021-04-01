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
      </Head>
      {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WGCCSM"
      height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript> */}
      <Navbar />
      {children}
      <Footer/>
      {showChat && <MessengerCustomerChat pageId="101921091461361" appId="404665513945389"/>}
      {/* {window.location.hostname === 'pengyilabs.io' ?  : undefined} */}

    </>
  )
}
