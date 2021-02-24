import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import apiClient from '../../services/apiClient';
import TagList from '../../components/Shared/Tags/TagList';
import Navbar from '../../components/Shared/Navbar'
import Footer from '../../components/Shared/Footer'
import PortfolioItem from '../../components/Shared/Portfolio/PortfolioItem';
import AOS from 'aos'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
      const {data: portfolioList} = await apiClient.getPortfolioItem(params);
      console.log(portfolioList)
      setPortfolio(portfolioList.records.slice(0))
		} catch (e) {
			if(e.response) console.log(e.response)
		}
  }

  const [related, setRelated ] = useState([])

  useEffect(() => {
    fetchRelated()
  }, [])
  const fetchRelated = async () =>{
		let params = 'marketing'
    try {
      const {data: portfolioList} = await apiClient.getPortfolioItems(params);
      setRelated(portfolioList.records.slice(0, 3))
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
        
        <div className="container my-5">
        <Link href="/#portfolio" className="btn btn-link">BACK TO PORTFOLIO</Link>
          {(portfolio && portfolio.length > 0) ? portfolio.map(item => 
          <div className="text-center">
              <h1 className="text-primary mb-3">{item.fields.PortfolioItem}</h1>
              <div className="mb-3">
                <TagList tags={item.fields.Tags.slice(0, item.tagCount)} />
              </div>
              {item.fields.Videos ? item.fields.Videos.map(img =>
                <video autoPlay muted src={img.url} class="img-fluid my-2"></video>
              ) : undefined}
              <div className="row">
              {item.fields.Screens.length > 0 ? item.fields.Screens.map(img =>
                <div className="col-6"><img src={img.url} class="img-fluid my-2"></img></div>
              ) : undefined}
              </div>
              <div className="my-5">
              {item.fields.Invision ?  <a href={item.fields.Invision} target="_blank" class="btn btn-primary text-white">VISIT PROJECT</a> : undefined}
              </div>
          </div>
          ) : undefined}
        </div>

        <div className="container text-center">
            <h1 className="text-primary mb-3">Related Projects</h1>
            {related.map(rel => {
              return <PortfolioItem {...rel.fields} key={rel.id}/>
            })}
        </div>
     
    <Footer />
    </div>
    </div>
  )
}
