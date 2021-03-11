import React, {useState, useEffect} from 'react';
import apiClient from 'services/apiClient';
import PortfolioCard from 'components/_common/portfolio-card'
import SiteWrapper from 'components/_common/site-wrapper'
import AllTags from 'components/_common/tags/alltags'
import Spinner from 'components/_common/spinner'
// import AOS from 'aos'

export default function AllPortfolio() {
  // useEffect(() => {	AOS.init()})
	// useEffect(() => {AOS.refresh()}, [])

  const [portfolio, setPortfolio ] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => fetchPortfolio(), [0])

  const fetchPortfolio = async () =>{
		let params = {};
    try {
      const {data: portfolioList} = await apiClient.getPortfolioItems(params);
      // console.log(portfolioList)
      setPortfolio(portfolioList.records)
      setLoading(false)
		} catch (e) {
			if(e.response) {
        console.log(e.response)
        setLoading(false)
      }
		}
  }
  return (
    <SiteWrapper>
      <div className="container text-center">
        <div className="row">
          <div className="mx-auto">
            <h2 className="font-weight-bold mt-5 display-4 text-primary">Portfolio</h2>
            <h3 className="h5">Check our Work</h3>
            <p className="text-muted">With a proven track record of over 45 online projects since its launch in 2018, we work with a global perspective of growth in mind.</p>
            {loading ? <Spinner/> : <>
              {(portfolio && portfolio.length > 0) ? portfolio.map(item => <PortfolioCard {...item.fields} key={item.id}/>) : undefined}
              {/* {(portfolio && portfolio.length > 0) ? portfolio.map(item => <PortfolioItem {...item.fields} key={item.id}/>) : undefined} */}
              <AllTags/>
            </>}
          </div>
        </div>
      </div>
    </SiteWrapper>
  )
}
