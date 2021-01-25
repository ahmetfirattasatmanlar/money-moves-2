import React from "react";
import TagList from 'Components/Shared/Tags/TagList'
import ScreensList from 'Components/Shared/Screens/ScreensList';
import InvisionLink from 'Components/Shared/Actions/InvisionLink';
import VideoEmbed from 'Components/Shared/VideoEmbed';
import logo from 'Assets/pengyi-logo.svg';

function SinglePortfolio (props) {
  let project = {
    // name: props['Project Name'] || '',
    PortfolioId: props['PortfolioItem'],
    Screens: props['Screens'],
    Tags: props['Tags'],
    Invision: props['Invision'],
    PortfolioType: props['Portfolio Type'],
    Videos: props['Videos']
  }
  let getScreenType = (portfolioType) => {
    switch (portfolioType) {
      case 'Mobile App':
        return 'mobile'    
      default:
        return 'large'
        // break;
    }
  }
  let screensProps = {
    size: getScreenType(project.PortfolioType),
    screens: project.Screens
  }
  let getVideoUrl = (videos) => {
    if(videos.length > 0) {
      return videos[0].url
    }
  }
  let videoProps = {
    url: getVideoUrl(project.Videos)
  }
  return (
    <div className="mb-5 pb-5">
      <div className="d-flex mb-4">
        <img src={logo} alt="" className="pengyi-logo pengyi-logo-lg mr-2"/>
        <div className="d-flex flex-column">
          <h2 className="title m-0">{project.PortfolioId}</h2>
          <span>PengYi Studio</span>
        </div>
      </div>
      <VideoEmbed {...videoProps}/>
      <div className="app-cards-group">
        
        <ScreensList {...screensProps}/>

        <div className="project-thumbnail">
          <ul className="list-group list-group-flush">
            <li className="list-group-item m-0 text-primary">{project.PortfolioType}</li>
            <li className="list-group-item m-0"><InvisionLink url={project.Invision}/></li>
            <li className="list-group-item m-0"><TagList tags={project.Tags} disabled/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

SinglePortfolio.defaultProps = {
  PortfolioId: '',
  Screens: [],
  Tags: [],
  Invision: '',
  PortfolioType: '',
  Videos: []
}

export default SinglePortfolio;
