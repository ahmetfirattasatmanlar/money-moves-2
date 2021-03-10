import React, { Component } from "react";
import { AutoComplete } from 'antd';
import {withRouter} from 'react-router-dom'
import apiClient from '../../../../Services/apiClient';
import AppContext from 'Services/AppContext';
import State from 'Components/Shared/State';


class SearchAllTags extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource: ['Waiting for tags...'],
    };
  }
  onSelect = (value) =>{
    this.props.history.push(`/portfolio/tags/${value}`)
  }
  async fetchData(){
    try {
      const {data: portfolioList} = await apiClient.getAllPortfolio();

      this.setState({
        dataSource: this.getTags(portfolioList.records)
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
  
	render() {
    const { dataSource} = this.state;
		return (
			<AppContext.Consumer>
        {(context)=>(
          context.user &&
          <AutoComplete
            style={{ width: 200 }}
            dataSource={dataSource}
            placeholder="Search for tags"
            onSelect={this.onSelect}
            filterOption={(inputValue, option) =>
              option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
          />
        )}
      </AppContext.Consumer>
		);
	}
}

export default withRouter(SearchAllTags);
