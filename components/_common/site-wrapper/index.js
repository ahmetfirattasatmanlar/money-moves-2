import React from 'react';
import Head from 'next/head'
import Navbar from 'components/_common/navbar'
import Footer from 'components/_common/Footer'
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function SiteWrapper({children}){
  return (
    <>
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
      <Navbar />
      {children}
      <Footer/>
      <MessengerCustomerChat pageId="101921091461361" appId="404665513945389"/>
    </>
  )
}
