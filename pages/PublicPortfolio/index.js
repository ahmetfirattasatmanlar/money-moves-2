import React, { Component } from "react";
import apiClient from 'Services/apiClient';
import { Icon } from 'antd';
import SinglePortfolio from 'Components/Shared/SinglePortfolio';
import DashLayout from 'Components/Shared/DashLayout'
import State from 'Components/Shared/State';

class PublicPortfolioPage extends Component {
	constructor(props){
		super(props);
		this.state = {
      portfolioList : [],
      isMounted: false,
		}
	}
	async fetchData(){
		let params = this.props.match.params;
    try {
      const {data: portfolioList} = await apiClient.getPortfolioItems(params);
      this.setState({portfolioList: portfolioList.records, isMounted: true})
		} catch (e) {
			if(e.response) return <State error/>
		}
	}
	componentWillMount(){
		this.fetchData()
	}
	renderContent(){
		if (this.state.isMounted && this.state.portfolioList.length > 0 ){
			return this.state.portfolioList.map(project => 
				<SinglePortfolio {...project.fields} key={project.id}/>
			)
		} else {
			return <Icon type="loading" />
		}
	}
	render() {
		return (
			<DashLayout pageTitle={<span><span className="text-primary">{this.props.match.params.filter}</span> Portfolio</span>}>
				{this.renderContent()}
			</DashLayout>
		);
	}
}

export default PublicPortfolioPage;
