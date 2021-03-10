import React, {useState, useEffect} from 'react';
import apiClient from 'services/apiClient';
import PortfolioItem from 'components/_common/Portfolio/PortfolioItem';
// import AOS from 'aos'
import { useRouter } from 'next/router'
import SiteWrapper from 'components/_common/site-wrapper';


export default function Home() {
  // useEffect(() => {	AOS.init()})
	// useEffect(() => {AOS.refresh()}, [])

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
    <SiteWrapper>


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


    </SiteWrapper>
  )
}
