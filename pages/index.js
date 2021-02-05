import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Chip from '../components/Shared/Chip'
import ServiceItem from '../components/Shared/ServiceItem'
import apiClient from '../services/apiClient';
import PortfolioItem from '../components/Shared/Portfolio/PortfolioItem';
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'
import AOS from 'aos'
import MessengerCustomerChat from 'react-messenger-customer-chat';


export default function Home() {
  useEffect(() => {	AOS.init()})
	useEffect(() => {AOS.refresh()}, [])

  const [portfolio, setPortfolio ] = useState([])

  useEffect(() => {
    fetchPortfolio()
  }, [])

  const fetchPortfolio = async () =>{
		let params = 'marketing';
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

      <div className="container">
        <div className="row">
          <div className="col-sm-8 mx-auto mt-5">
             <div className="card">
              <div className="card-body p-4">
                <p className="m-0"><strong className="text-primary">PengYi Labs</strong> is a creative digital web design team focused on creating online solutions for all sorts of clients ranging from web development to content marketing planning.</p>
              </div>
             </div>

             <h2 className="text-center">Our Skills</h2>

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


      <div className="container text-center">
        <div className="row">
          <div className="col-sm-8 mx-auto">
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
        <MessengerCustomerChat
          pageId="101921091461361"
          appId="404665513945389"
        />

      </div>
      <div>
        <h3 className="text-center my-4">SEE WHAT OUR CLIENTES THINKS ABOUT US</h3>
        <div className="d-flex justify-content-center">
          <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script> <div class="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="3" data-height="350" data-clutchcompany-id="1417563"></div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row mb-5">
          <div className="col-sm-8 mx-auto">
          <h2 className="text-primary">BLOG</h2>
          <a className="rounded-lg text-primary  shadow bg-white btn btn-light btn-block text-center" href="https://www.notion.so/pengyilabs/What-is-a-Content-Marketing-0da942bbda554b7b958cdce64512dbcb">What is Content Marketing?</a>
          <a className="rounded-lg text-primary  shadow bg-white btn btn-light btn-block text-center" href="https://www.notion.so/pengyilabs/A-deep-look-into-UpWork-and-Angelist-requirements-for-top-marketing-jobs-558c0c4d9fb64f938ca84ad12169d4b3">A deep look into UpWork and Angelist requirements for top marketing jobs</a>
          <a className="rounded-lg text-primary  shadow bg-white btn btn-light btn-block text-center" href="https://www.notion.so/pengyilabs/An-insider-s-view-into-8base-s-Backend-As-Service-d7c7cc4e8ea54fd9ab2d51a7ff391878">An insider´s view into 8base’s Backend-As-Service</a>
          <a className="rounded-lg text-primary  shadow bg-white btn btn-light btn-block text-center" href="https://www.notion.so/pengyilabs/What-is-an-Empathy-Map-310bc6e10c9f43969fb47bff340c1ba6">What is an Empathy Map?</a>
          <a className="rounded-lg text-primary  shadow bg-white btn btn-light btn-block text-center" href="https://www.notion.so/pengyilabs/Content-Marketing-Structure-1b6cd2ee92974aa0885a8e67fe495bf8?p=b86870a7aa984053ae269cfffb96d389">Why does a Content Marketing Strategy matter? </a>
          <a className="rounded-lg text-primary  shadow bg-white btn btn-light btn-block text-center" href="https://www.notion.so/pengyilabs/What-s-a-digital-strategy-c73b6b35f13c41aba8d7bd4b5cf9dda2">What’s a digital strategy?</a>

          </div>
        </div>
      </div>
    <Footer />
    </div>
    </div>
  )
}
