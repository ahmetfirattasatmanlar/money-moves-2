import React, {useState, useEffect} from 'react';
import apiClient from 'services/apiClient';
import TagList from 'components/_common/Tags/TagList';
import PortfolioCard from 'components/_common/portfolio-card';
// import AOS from 'aos'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SiteWrapper from 'components/_common/site-wrapper';
import Spinner from 'components/_common/spinner'

export default function PortfolioItemPage() {
  // useEffect(() => {	AOS.init()})
	// useEffect(() => {AOS.refresh()}, [])

  const [portfolio, setPortfolio ] = useState([])
  const [loading, setLoading] = useState(true)

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
      setLoading(false)
		} catch (e) {
			if(e.response) {
        console.log(e.response)
        setLoading(false)
      }
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
          <div className="text-center"><Link href="/portfolio" ><span className="btn btn-light btn-sm py-0">BACK TO PORTFOLIO</span></Link></div>
          {loading ? <Spinner/> : <>
            {(portfolio && portfolio.length > 0) ? portfolio.map(item =>
              <div key={item.id}>
                <div className="row">
                  <div className="col-sm-8 mx-auto text-center">
                    <h1 className="text-primary mb-3 font-weight-bold">{item.fields.PortfolioItem}</h1>
                    {item.fields.Description ? <p>{item.fields.Description}</p> : undefined}
                    <div className="mb-3">
                    {/* <TagList tags={item.fields.Tags.slice(0, item.tagCount)} /> */}
                    <TagList tags={item.fields.Tags} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    {item.fields.Videos ? item.fields.Videos.map(img =>
                      <video key={img.id} autoPlay muted src={img.url} className="img-fluid my-2"></video>
                    ) : undefined}
                    {item.fields.Screens.length > 0 ? item.fields.Screens.map(img =>
                      <img src={img.url} key={img.id} className="img-fluid my-2 shadow-lg rounded"></img>
                    ) : undefined}
                    <div className="my-5">
                    {item.fields.Invision ?  <a href={item.fields.Invision} target="_blank" className="btn btn-primary text-white">VISIT PROJECT</a> : undefined}
                    </div>
                  </div>
                </div>
              </div>
              ) : undefined}
              <div className="text-center">
                <h1 className="text-primary mb-3">Related Projects</h1>
                <div>
                {related.map(rel => <PortfolioCard {...rel.fields} key={rel.id}/>)}
                </div>
              </div>
          </>}


        </div>


    </SiteWrapper>
  )
}
