import React, {useState, useEffect} from 'react';
import apiClient from 'services/apiClient';
import TagList from 'components/_common/Tags/TagList';
import PortfolioCard from 'components/_common/portfolio-card';
// import AOS from 'aos'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SiteWrapper from 'components/_common/site-wrapper';

export default function PortfolioItemPage() {
  // useEffect(() => {	AOS.init()})
	// useEffect(() => {AOS.refresh()}, [])

  const [portfolio, setPortfolio ] = useState([])

  const router = useRouter()
  // const { id } = router.query
  // let params = { id }

  useEffect(() => {
    router.query.id ? fetchPortfolio() : null
  }, [router.query.id])

  const fetchPortfolio = async () =>{

    try {
      // const {data: portfolioList} = await apiClient.getPortfolioItem(params);
      const {data: portfolioList} = await apiClient.getPortfolioItem({id: router.query.id});
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
    <SiteWrapper>
        <div className="container my-5">
          <Link href="/portfolio" className="btn btn-link">BACK TO PORTFOLIO</Link>
          {(portfolio && portfolio.length > 0) ? portfolio.map(item =>
          <div className="text-center" key={item.id}>
              <h1 className="text-primary mb-3">{item.fields.PortfolioItem}</h1>
              {item.fields.Description ? <p>{item.fields.Description}</p> : undefined}
              <div className="mb-3">
                <TagList tags={item.fields.Tags.slice(0, item.tagCount)} />
              </div>
              {item.fields.Videos ? item.fields.Videos.map(img =>
                <video key={img.id} autoPlay muted src={img.url} className="img-fluid my-2"></video>
              ) : undefined}
              <div className="row">
                {item.fields.Screens.length > 0 ? item.fields.Screens.map(img =>
                  <div className="col-6" key={img.id}><img src={img.url} className="img-fluid my-2"></img></div>
                ) : undefined}
              </div>
              <div className="my-5">
              {item.fields.Invision ?  <a href={item.fields.Invision} target="_blank" className="btn btn-primary text-white">VISIT PROJECT</a> : undefined}
              </div>
          </div>
          ) : undefined}
        </div>

        <div className="container text-center">
            <h1 className="text-primary mb-3">Related Projects</h1>
            {related.map(rel => {
              return <PortfolioCard {...rel.fields} key={rel.id}/>
            })}
        </div>
    </SiteWrapper>
  )
}
