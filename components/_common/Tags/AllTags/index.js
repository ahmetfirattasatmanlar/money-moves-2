import React, { Component } from "react";
import apiClient from 'Services/apiClient';
import { Icon } from 'antd';
import TagList from 'Components/Shared/Tags/TagList' ;
import State from 'Components/Shared/State';


class AllTags extends Component {
  constructor(props){
    super(props)
    this.state = {
      tags: [],
      isMounted: false
    };
  }
  async fetchData(){
    try {
      const {data: portfolioList} = await apiClient.getAllPortfolio();
      this.setState({
        tags: this.getTags(portfolioList.records),
        isMounted: true
      })
		} catch (e) {
			if(e.response){
				return <State error/>
			}
		}
  }
  componentDidMount(){
    this.fetchData()
  }
  getTags(portfolioList){
		let AllTags = {}
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
  renderContent(){
    return(
      <div>
        {this.state.isMounted ?
          <TagList tags={this.state.tags}/>
          :
          <Icon type="loading"/>
        }
      </div>
    )
  }
	render() {
    return(
      this.renderContent()
    )
  }
}

export default AllTags;
