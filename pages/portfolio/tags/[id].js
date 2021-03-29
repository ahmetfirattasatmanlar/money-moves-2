import React, {useState, useEffect} from 'react';
import apiClient from 'services/apiClient';
import PortfolioCard from 'components/_common/portfolio-card';
// import AOS from 'aos'
import { useRouter } from 'next/router'
import SiteWrapper from 'components/_common/site-wrapper';
import Spinner from 'components/_common/spinner'

export default function Home() {
  // useEffect(() => {	AOS.init()})
	// useEffect(() => {AOS.refresh()}, [])

  const [portfolio, setPortfolio ] = useState([])
  const router = useRouter()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    router.query.id ? fetchPortfolio() : null
  }, [router.query.id])

  const fetchPortfolio = async () =>{
    // console.log('dude')
    // const { id } = router.query
    // let params = { id }
    try {
      const {data: portfolioList} = await apiClient.getPortfolioItems({name: router.query.id});
      setPortfolio(portfolioList.records)
      setLoading(false)
		} catch (e) {
			if(e.response) console.log(e.response)
      setLoading(false)
		}
  }
  return (
    <SiteWrapper>
      <div className="container text-center my-5">
        <div className="text-center mt-5"><a href="/portfolio" ><span className="btn btn-light btn-sm py-0">BACK TO PORTFOLIO</span></a></div>
        <div className="row">
          <div className="col-sm-8 mx-auto">
            <h2 className="font-weight-bold display-4 text-primary">{router && router.query && router.query.id ? router.query.id : undefined} Portfolio </h2>
            <h3 className="h5">Check our Work</h3>
            <p className="text-muted">With a proven track record of over 45 online projects since its launch in 2018, we work with a global perspective of growth in mind.</p>
          </div>
        </div>
        {loading ? <Spinner/> :
        <div className="row">
          <div className="col">
            {(portfolio && portfolio.length > 0) ? portfolio.map(item => <PortfolioCard {...item.fields} key={item.id}/>) : undefined}
          </div>
        </div>
        }
      </div>


    </SiteWrapper>
  )
}
