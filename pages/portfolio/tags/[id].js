import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import apiClient from '../../../services/apiClient';
import PortfolioItem from '../../../components/Shared/Portfolio/PortfolioItem';
import Navbar from '../../../components/Shared/Navbar'
import Footer from '../../../components/Shared/Footer'
import AOS from 'aos'
import { useRouter } from 'next/router'


export default function Home() {
  useEffect(() => {	AOS.init()})
	useEffect(() => {AOS.refresh()}, [])

  const [portfolio, setPortfolio ] = useState([])

  useEffect(() => {
    fetchPortfolio()
  }, [])

  const router = useRouter()
  const fetchPortfolio = async () =>{
    const { id } = router.query
    let params = { id }
    try {
      const {data: portfolioList} = await apiClient.getPortfolioItems(params);
      setPortfolio(portfolioList.records.slice(0,10))
		} catch (e) {
			if(e.response) console.log(e.response)
		}
  }
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


      <div className="container text-center">
        <div className="row">
          <div className="col-sm-8 mx-auto">
          <h2 className="font-weight-bold mt-4">Portfolio</h2>
        <h3>Check our Work</h3>
        <p className="text-muted">With a proven track record of over 45 online projects since its launch in 2018, we work with a global perspective of growth in mind.</p>

        <div>
          {(portfolio && portfolio.length > 0) ? portfolio.map(item => <PortfolioItem {...item.fields} key={item.id}/>) : undefined}
        </div>
          </div>
        </div>
      </div>
    
      
    <Footer />
    </div>
    </div>
  )
}
