import React, {useState, useEffect} from 'react';
import apiClient from 'services/apiClient';
import PortfolioCard from 'components/_common/portfolio-card';
// import AOS from 'aos'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SiteWrapper from 'components/_common/site-wrapper';
import Spinner from 'components/_common/spinner'
import { Tag } from 'antd';
import RelatedByTag from 'components/_common/related-by-tag';

export default function PortfolioItemPage() {
  // useEffect(() => {	AOS.init()})
	// useEffect(() => {AOS.refresh()}, [])

  const [item, setItem ] = useState()
  const [loading, setLoading] = useState(true)

  const router = useRouter()
  // const { id } = router.query
  // let params = { id }

  useEffect(() => {
    router.query.id ? fetchPortfolio() : null
  }, [router.query.id])

  // get portfolio items BY tag

  const fetchPortfolio = async () =>{

    try {
      // const {data: portfolioList} = await apiClient.getPortfolioItem(params);
      const {data: portfolioList} = await apiClient.getPortfolioItem({id: router.query.id});
      setItem(portfolioList.records[0])
      setLoading(false)
		} catch (e) {
			if(e.response) {
        console.log(e.response)
        setLoading(false)
      }
		}
  }

  // const [related, setRelated ] = useState([])

  // useEffect(() => {
  //   return !!item ? console.log(item) : null
  // }, [item])
  // const fetchRelated = async () =>{
	// 	let params = 'marketing'
  //   console.log(item)
  //   try {
  //     const {data: portfolioList} = await apiClient.getPortfolioItems(params);
  //     setRelated(portfolioList.records.slice(0, 3))
	// 	} catch (e) {
	// 		if(e.response) console.log(e.response)
	// 	}
  // }
  return (
    <SiteWrapper>
        <div className="container my-5">
          <div className="text-center"><a href="/portfolio" ><span className="btn btn-light btn-sm py-0">BACK TO PORTFOLIO</span></a></div>
          {loading ? <Spinner/> : <>
            {item ?
              <div key={item.id}>
                <div className="row">
                  <div className="col-sm-8 mx-auto text-center">
                    <h1 className="text-primary mb-3 font-weight-bold">{item.fields.PortfolioItem}</h1>
                    {item.fields.Description ? <p>{item.fields.Description}</p> : undefined}
                    <div className="mb-3">
                    {/* <TagList tags={item.fields.DynamicTags.slice(0, item.tagCount)} /> */}
                    {item.fields && item.fields.DynamicTags ? item.fields.DynamicTags.map(tag => <Tag key={tag}><a href={`/portfolio/tags/${tag}`} className="text-primary badge badge-sm">{tag}</a></Tag>) : undefined}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">

                    {item.fields.Videos ? item.fields.Videos.map(img =>
                      <video key={img.id} autoPlay muted src={img.url} className="rounded shadow-lg img-fluid"></video>
                    ) : undefined}

                    <div className="main-grid">

                      {item.fields.Screens.length > 0 ? item.fields.Screens.map(img =>
                        <img src={img.url} key={img.id} className="shadow-lg rounded img-fluid"></img>
                      ) : undefined}
                    </div>

                    <div className="text-center my-5">
                      {item.fields.Invision ?  <a href={item.fields.Invision} target="_blank" className="btn btn-primary text-white">VISIT PROJECT</a> : undefined}
                    </div>

                  </div>
                </div>
              </div>
              : undefined}
                {/* <h1 className="text-primary mb-3">Related Projects</h1> */}
              {item.fields && item.fields.DynamicTags ? item.fields.DynamicTags.splice(0,3).map(tag => {
                return <RelatedByTag key={`related-by-${tag}`} tag={tag}/>
              }) : undefined}
                {/* {related.map(rel => <PortfolioCard {...rel.fields} key={rel.id}/>)} */}
          </>}


        </div>


    </SiteWrapper>
  )
}
