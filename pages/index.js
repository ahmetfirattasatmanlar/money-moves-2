import React, {useState, useEffect} from 'react';
import Head from 'next/head'
// import logo from '../public/pengyi-logo.svg';
// import upwork from '../public/Upwork.png';
// import linkedin from '../public/linkedin.svg';
// import clutch from '../public/clutch.png';
// import dribbble from '../public/dribbble.svg';
import Chip from '../components/Shared/Chip'
import ServiceItem from '../components/Shared/ServiceItem'
import apiClient from '../services/apiClient';
import PortfolioItem from '../components/Shared/Portfolio/PortfolioItem';
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
      </Head>
      <div>
      <header className="py-5 bg-primary full-height">
        <div className="container text-center  ">
          <div className="row">
            <div className="col-sm-8 mx-auto">
              <div className="con-rounded con-shadow con-shadow-top py-5 px-2">
                {/* <img src={logo} alt="" className="rounded-circle mb-4" data-aos="fade-in"/> */}
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

             {/* We are fluent in several programming languages and frameworks, always inquisitive to find new ways to develop responsive websites, mobile and apps with very efficient UX. We work from the idea to the mockups and then to the prototype along side with your team to assure  */}

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



      {/* <h3>ROBERTO — CoFounder</h3>

      <p>Rob is a digital nomad and loves to combine travel and work, which enhances his quick learning abilities. His primary skills are Front End Developing and UX/UI, and is proficient in Python and Javascript. Rob can chat with you in English, Spanish and mandarin.</p>

      <h3>CARLOS — CoFounder</h3>
      <p>Description</p>

      <h3>RODRIGO — General Manager</h3>

      <p>Rodrigo is the glue that keeps us together, always ready to help clients and continually making sure our projects move forward efficiently. He is a fan of sports, movies and great food. Besides being super organized, Rodrigo will be your project´s primary contact.</p>

      <h2>Operations</h2>

      <h3>FABIAN — Developer</h3>

      <p>Fabs is an analytic developer who is continuously looking to find the best possible solutions for every challenge. He loves many creative endeavours as anime, photography, designing and even can plan events or cook delicious meals.</p>

      <h3>ANA LAURA — Marketing Coordinator</h3>

      <p>Ana is an enthusiastic marketing specialist who believes content is the way to innovation. She has been working in the digital marketing industry for the last decade. She is a fan of female sports who as well loves to blog.</p>

      <h3>REINALDO - Graphic Design </h3>

      <p>Reinado is a creative designer always curious on creating new ways to visualize beautiful graphics for websites, marketing and products. He is a fan of everything not mainstream and a soon to be daddy.</p>

      <h3>WENDY </h3>

      <p>Wendy is our Jr. Designer, passionate for improving the user experience and making each project as beautiful as it can look.</p>

      <h3>ZAITEL</h3>

      <p>Zaitel is our Jr. Content Developer, she is in charge of creating social content so that we can keep you updated in what we are up to.</p> */}

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
      <footer className="bg-primary py-5 text-white mt-3">
        <div className="container">
          <h3 className="text-white text-center">We are available for new projects on all major hiring platforms</h3>
          <div className="social-icons py-5 text-center">
            <a className="pr-5"  href="https://www.upwork.com/agencies/~01b0561df3bf4ea42c" rel="noopener noreferrer" target="_blank">
              {/* <img width="10%" src={upwork} alt="upwork logo"></img> */}
            </a>
            <a className="pr-5" href="https://www.linkedin.com/company/pengyilabs/" rel="noopener noreferrer" target="_blank">
              {/* <img width="10%" src={linkedin} alt="linkedin logo"></img> */}
            </a>
            <a className="pr-5" href="https://dribbble.com/pengyilabs" rel="noopener noreferrer" target="_blank">
              {/* <img width="10%" src={dribbble} alt="dribbble logo"></img> */}
            </a>
            <a className="pr-5" href="https://clutch.co/profile/pengyi-labs" rel="noopener noreferrer" target="_blank">
              {/* <img width="10%" src={clutch} alt="clutch logo"></img> */}
            </a>
          </div>
          <p className="my-2 text-center">
            At PengYi we are excited to take on new challenges, if you rather contact us directly please write an email to hello@pengyilabs.io
          </p>
        </div>
      </footer>
    </div>
    </div>
  )
}
