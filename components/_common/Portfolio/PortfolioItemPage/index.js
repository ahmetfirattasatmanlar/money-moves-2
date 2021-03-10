import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import DashLayout from 'Components/Shared/DashLayout'
import apiClient from 'Services/apiClient';
import State from 'Components/Shared/State';
import SearchAllTags from 'Components/Shared/Tags/SearchAllTags';
import SharePublicLink from 'Components/Shared/Actions/SharePublicLink';
import SinglePortfolio from 'Components/Shared/SinglePortfolio';

class PortfolioItemPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      project: {},
      isMounted: false,
    }
  }
  async fetchData(){
    let params = this.props.match.params;
    try {
      let {data: project} = await apiClient.getPortfolioItem(params);
      this.setState({project: project.records[0]})
    } catch (error) {
      return <State error/>
    }
  }
  componentDidMount(){
    this.fetchData();
  }

  render(){
    let dashProps = {
      pageTitle: 'Portfolio',
      // pageSubtitle: this.props.portofolioItem,
			pageOptions: <Fragment><SharePublicLink url={this.props.match.params && this.props.match.url}/><SearchAllTags/></Fragment>
    }    
    return (
      <DashLayout {...dashProps}>
        <SinglePortfolio {...this.state.project.fields}/>        
      </DashLayout>
    )
  }
}


export default withRouter(PortfolioItemPage);