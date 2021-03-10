import React, { Component, Fragment } from "react";
import PortfolioItem from './PortfolioItem';
import apiClient from 'Services/apiClient';
import SearchAllTags from 'Components/Shared/Tags/SearchAllTags';
import AllTags from 'Components/Shared/Tags/AllTags';
import DashLayout from 'Components/Shared/DashLayout'
import State from 'Components/Shared/State';
import AppContext from 'Services/AppContext';
import SharePublicLink from 'Components/Shared/Actions/SharePublicLink'
import upwork from 'Assets/Upwork.png';
import linkedin from 'Assets/linkedin.svg';
import clutch from 'Assets/clutch.png';
import dribbble from 'Assets/dribbble.svg';


class PortfolioPage extends Component {
	constructor(props){
		super(props);
		this.state = {
      portfolioList : [],
			isMounted: false,
			allTags: []
		}
	}
	async fetchData(){
		let params = this.props.match.params;
    try {
			const {data: portfolioList} = await apiClient.getPortfolioItems(params);
      this.setState({
				portfolioList: portfolioList.records,
				isMounted: true,
				allTags: this.getTags(portfolioList.records)})
		} catch (e) {
			if(e.response){
				return <State error/>
			}
		}
	}
	// componentWillMount(){
	// 	this.fetchData()
	// }
	componentDidMount(){
		this.getTags()
		this.fetchData()
	}
  componentWillUpdate(){
		this.fetchData()
	}

	renderPortfolio(){
		if(this.state.portfolioList.length > 0 ){
			return this.state.portfolioList.map(item => {
				return <PortfolioItem {...item.fields} key={item.id}/>
			})
		} else{
				return <State/>
		}

  }
  renderCurrentSearchTitle(){
    if(this.props.match.params.filter){
      return `${this.props.match.params.filter}`
    }
	}
	getTags(portfolioList){
		let AllTags = {}
		// let {filter} = this.props.match.params;
		if(portfolioList){
			portfolioList.map(project => {
				project.fields['Tags'].map(tag => {
					if(!(tag in AllTags)){
						AllTags[tag] = 1
					}
					AllTags[tag] += 1
					return false
				},)
				return false
			})
		}
		let AllTagsSorted = Object.keys(AllTags).sort(function(a,b){return AllTags[b]-AllTags[a]})
		return AllTagsSorted
	}
	render() {
		return (
			<AppContext.Consumer>
				{(context)=>(
					<DashLayout
						pageTitle='Portfolio'
						pageOptions={<Fragment>
							<SharePublicLink url={this.props.match.params.filter && this.props.match.url}/>
							<SearchAllTags/>
						</Fragment>}
						pageSubtitle={this.renderCurrentSearchTitle()}>
					{/* <Text><h1> Portfolio</h1> Create Shareable Link</Text> */}
					<div className="d-sm-flex justify-content-between align-items-center">
						<h1 className="h5 text-secondary">{this.renderCurrentSearchTitle()}</h1>
						{/* {context.user && this.renderPublicProfileOption()} */}
					</div>

					{this.state.isMounted ?
						<Fragment>
							<div className="mb-4">
								<small className="mr-4">{this.state.portfolioList.length} Results</small>
							</div>

							<div className="app-cards-group">
								{this.renderPortfolio()}
							</div>
						</Fragment>
						:
						<State loading/>
					}

						<footer className="bg-primary py-5 text-white mt-3">
							<div className="container">
								<h3 className="text-white text-center">We are available for new projects on all major hiring platforms</h3>
								<div className="social-icons py-5 text-center">
									<a className="pr-5"  href="https://www.upwork.com/agencies/~01b0561df3bf4ea42c" rel="noopener noreferrer" target="_blank">
										<img width="10%" src={upwork} alt="upwork logo"></img>
									</a>
									<a className="pr-5" href="https://www.linkedin.com/company/pengyilabs/" rel="noopener noreferrer" target="_blank">
										<img width="10%" src={linkedin} alt="linkedin logo"></img>
									</a>
									<a className="pr-5" href="https://dribbble.com/pengyilabs" rel="noopener noreferrer" target="_blank">
										<img width="10%" src={dribbble} alt="dribbble logo"></img>
									</a>
									<a className="pr-5" href="https://clutch.co/profile/pengyi-labs" rel="noopener noreferrer" target="_blank">
										<img width="10%" src={clutch} alt="clutch logo"></img>
									</a>
								</div>
								<p className="my-2 text-center">
									At PengYi we are excited to take on new challenges, if you rather contact us directly please write an email to hello@pengyilabs.io
								</p>
							</div>
						</footer>

						<div className="container">
							<div className="row">
								<div className="col mt-5">
								<AllTags/>
								</div>
							</div>
						</div>
				</DashLayout>
				)}
			</AppContext.Consumer>
		);
	}
}

export default PortfolioPage;
