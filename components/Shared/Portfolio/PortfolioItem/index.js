import React, { Component} from 'react';
import { Card } from 'antd';
// import TagList from '../../Tags/TagList';
import DownloadIcon from '../../Actions/DownloadIcon'
import { Redirect } from 'react-router-dom';
import AppContext from '../../../../services/AppContext';
import { withRouter } from 'react-router-dom';
// import { ColorExtractor } from "react-color-extractor";

const { Meta } = Card;

class PortfolioItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      colors: [],
      redirect: false,
      isPublic: true
    }
  }
 
  componentDidMount(){
    this.renderIfPublic()
  }
  renderIfPublic(){
    if(this.props['Private']){
      this.setState({isPublic:false})
    }
  }
  handleOnClick = () => {
    this.setState({redirect: true});
  }
  
  // getColors = colors =>
  // this.setState(state => ({ colors: [...state.colors, ...colors] }));

  // renderColor(){
  //   if(this.state.colors.length > 0) {
  //     return this.state.colors[0];
  //   } else return false
  // }

  render(){
    let {portfolioId, name, screens, tags, tagCount} = this.props;
    let item = {
      portfolioId: this.props['PortfolioItem'] || portfolioId,
      name: this.props['Project Name'] || name,
      screens: this.props['Screens'] || screens,
      tags: this.props['Tags'] || tags,
      tagCount: this.props.tagCount || tagCount,
    }
    let renderThumb = () => {
      if(item.screens.length > 0 ){
        return item.screens[0].thumbnails.large.url || DataTransferItemList.screens[0].thumbnils.large.url;
      } else {return }
    }
    if (this.state.redirect) {
      return <Redirect push to={`/portfolio/${item.portfolioId}`} />;
    }
    return (
      <AppContext.Consumer>
        {(context)=>(
          (this.state.isPublic || context.user) &&
          <Card
          // className="card-portfolio" style={{background: `${this.renderColor()}`}}
          className={`card-portfolio ${!this.state.isPublic && 'card-portfolio-disabled'}`}
          onClick={this.handleOnClick}
          cover={
              // <ColorExtractor getColors={this.getColors}>
                <img
                  alt="example"
                  src={renderThumb()}
                />
              // </ColorExtractor>
            }
            // actions={[
            //   <DownloadIcon files={item.screens} name={item.name}/>, 
            // ]}
          >
            <Meta
              // title={item.name}
              description={
                <div className="d-flex align-items-center">
                  <div>
                  {/* <div className="ant-card-meta-title">{item.name}</div> */}
                  <div className="ant-card-meta-title">{item.portfolioId}</div>
                    {/* <TagList tags={item.tags.slice(0, item.tagCount)} disabled/> */}
                  </div>
                  {/* <AppContext.Consumer>
                    {(context)=>(
                      context.user && 
                      <div className="ml-auto">
                        <DownloadIcon files={item.screens} name={item.name}/>
                      </div>
                    )}
                  </AppContext.Consumer> */}
                </div>
              }
            />
    
          </Card>
        )}
      </AppContext.Consumer>
    )
  }
  
}

PortfolioItem.defaultProps = {
  portfolioId: null,
  name: '',
  screens: [],
  tags: [],
  tagCount: 2,
}

export default PortfolioItem;
// export default withRouter(PortfolioItem)