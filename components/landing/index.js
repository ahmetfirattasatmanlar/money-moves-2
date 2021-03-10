import React, {useState, useEffect} from 'react';
import Chip from 'components/_common/Chip'
import ServiceItem from 'components/_common/ServiceItem'
import apiClient from 'services/apiClient';
import PortfolioItem from 'components/_common/Portfolio/PortfolioItem';
import SiteWrapper from 'components/_common/site-wrapper'
// import AOS from 'aos'


export default function Landing() {
  // useEffect(() => {	AOS.init()})
	// useEffect(() => {AOS.refresh()}, [])

  const [portfolio, setPortfolio ] = useState([])

  useEffect(() => {
    fetchPortfolio()
  }, [])

  const fetchPortfolio = async () =>{
		let params = 'marketing';
    try {
      const {data: portfolioList} = await apiClient.getPortfolioItems(params);
      setPortfolio(portfolioList.records.slice(0,21))
		} catch (e) {
			if(e.response) console.log(e.response)
		}
  }
  return (
    <SiteWrapper>
      <header className="py-5 bg-primary full-height">
        <div className="container text-center  ">
          <div className="row">
            <div className="col-sm-8 mx-auto">
              <div className="con-rounded con-shadow con-shadow-top py-5 px-2">
                <img src="./pengyi-logo.svg" alt="" className="rounded-circle mb-4" data-aos="fade-in"/>
                <h1 className="text-white text-center h3"><strong className="h1 font-weight-bold">PengYi Labs</strong><br/> We bring your <strong>digital projects</strong> to life</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container" id="aboutus">
        <div className="row">
          <div className="col-sm-8 mx-auto mt-5">
             <div className="card">
              <div className="card-body p-4">
                <p className="m-0"><strong className="text-primary">PengYi Labs</strong> is a creative digital web design team focused on creating online solutions for all sorts of clients ranging from web development to content marketing planning.</p>
              </div>
             </div>

             <h2 className="text-center" id="services">Our Skills</h2>

            <div className="text-center">
            <Chip content="HTML"/>
              <Chip content="UX"/>
              <Chip content="Invision"/>
              <Chip content="ReactJS"/>
              </div>
              <div className="row">
               <div className="col-sm-6">
               <ServiceItem
              service={`Web Design`}
              goTo={`Design`}
              description={`Our expert team of developers are dedicated to performing the most beautiful digital designs to meet your product and business needs. `}
             />
               </div>
               <div className="col-sm-6">
               <ServiceItem
              service={`UX User Experience`}
              goTo={'UX'}
              description={`We believe in creating the best UX websites that we can think out for client´s satisfaction.`}
             />
               </div>
               <div className="col-sm-6">
               <ServiceItem
              service={`App and Mobile`}
              goTo={'Mobile App'}
              description={`Creating from functional prototypes to fully functioning applications for our client's needs is a top priority for us.`}
             />
               </div>
               <div className="col-sm-6">

             <ServiceItem
              service={`Ecommerce`}
              goTo={'Ecommerce'}
              description={`We are also a passionate, eCommerce website development company.`}
             />
               </div>
               <div className="col">

               <ServiceItem
              service={`Marketing`}
              goTo={'Marketing'}
              description={`We work with you to create compelling content marketing and social media strategies that sell.`}
             />
               </div>
             </div>
          </div>
        </div>
      </div>


      <div className="container text-center" id="portfolio">
        <div className="row">
          <div className="mx-auto">
          <h2 className="font-weight-bold">Portfolio</h2>
        <h3>Check our Work</h3>
        <p className="text-muted">With a proven track record of over 45 online projects since its launch in 2018, we work with a global perspective of growth in mind.</p>

        <div>
          {(portfolio && portfolio.length > 0) ? portfolio.map(item => <PortfolioItem {...item.fields} key={item.id}/>) : undefined}
        </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-sm-8 mx-auto">
          <h2>Customer Cases</h2>

          <a href="https://www.notion.so/pengyilabs/Client-Success-Alphavoice-f71f1e1c0e5f41e681d4af80c0d12a9f">
            <div className="card">
              <img src="https://cdn.dribbble.com/users/399366/screenshots/5614435/attachments/1213522/portfolio_image_2.png" alt="" className="img-fluid rounded shadow"/>
              <div className="card-body">Alphavoice</div>
            </div>
          </a>
          </div>
        </div>


        {/* <h2>Meet our team</h2> */}
        {/* <Collaborators/> */}


      </div>
      <div>
        <h3 className="text-center my-4">SEE WHAT OUR CLIENTS THINKS ABOUT US</h3>
        <div className="d-flex justify-content-center">
          <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script> <div className="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="3" data-height="350" data-clutchcompany-id="1417563"></div>
        </div>
      </div>
      <div className="container text-center" id="blog">
        <div className="row mb-5">
          <div className="col-sm-8 mx-auto">
          <h2 className="text-primary">BLOG</h2>
          <a className="rounded-lg text-primary  shadow bg-white btn btn-light btn-block text-center" href="https://pengyilabs.medium.com/how-to-manage-productivity-without-micromanaging-7eeb21ca1c9e" target="_blank">How to Manage Productivity without Micromanaging</a>
          <a className="rounded-lg text-primary  shadow bg-white btn btn-light btn-block text-center" href="https://pengyilabs.medium.com/remote-work-tools-cbb0687b90bf" target="_blank">Remote Work: TOOLS</a>
          <a className="rounded-lg text-primary  shadow bg-white btn btn-light btn-block text-center" href="https://pengyilabs.medium.com/setting-up-a-company-in-singapore-as-a-latam-company-2021-32f56d7066cb" target="_blank">Setting up a company in Singapore</a>
          <a className="rounded-lg text-primary  shadow bg-white btn btn-light btn-block text-center" href="https://pengyilabs.medium.com/remote-work-team-a70038f58fdf" target="_blank">Remote Work: Team</a>
          <a className="rounded-lg text-primary  shadow bg-white btn btn-light btn-block text-center" href="https://www.notion.so/pengyilabs/Content-Marketing-Structure-1b6cd2ee92974aa0885a8e67fe495bf8?p=b86870a7aa984053ae269cfffb96d389" target="_blank">Why does a Content Marketing Strategy matter? </a>
          <a className="rounded-lg text-primary  shadow bg-white btn btn-light btn-block text-center" href="https://www.notion.so/pengyilabs/What-s-a-digital-strategy-c73b6b35f13c41aba8d7bd4b5cf9dda2" target="_blank">What’s a digital strategy?</a>

          </div>
        </div>
      </div>
    </SiteWrapper>
  )
}
