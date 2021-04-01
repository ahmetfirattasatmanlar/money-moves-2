import React, { useState, useEffect } from 'react';
import apiClient from 'services/apiClient';
import PortfolioCard from 'components/_common/portfolio-card'
export default function RelatedByTag({tag}){

  const [portfolio, setPortfolio ] = useState([])
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPortfolio()
  }, [0])

  const fetchPortfolio = async () =>{
		let params = {pageSize: 3, fields: {'DynamicTags': tag}};
    try {
      const {data: portfolioList} = await apiClient.getPortfolioItemsBy(params);
      setPortfolio(portfolioList.records)
      // console.log(portfolioList.records)
		} catch (e) {
			if(e.response) {
        console.log(e.response)
      }
		}
  }

  // pageSize=3
  return (tag && portfolio.length > 2) ?
    <div className="text-center">
      <h3 className="mb-3 h3">Related <a href={`/portfolio/tags/${tag}`}>{tag}</a> Projects</h3>
      { portfolio.map(item => <PortfolioCard {...item.fields} key={item.id}/>)}
      {/* <Link href={`/portfolio/tags/${tag}`} className="text-primary badge badge-sm">{tag}</Link> */}
    </div>
  : null
}
