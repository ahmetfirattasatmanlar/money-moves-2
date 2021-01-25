import React, { Component, Fragment } from "react";
import State from 'Components/Shared/State'
import apiClient from 'Services/apiClient'
import getThumb from 'Services/getThumb'
import SelectAvatar from "Components/Shared/SelectAvatar";
import {Divider, Radio} from 'antd'

class PayCalculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      totalCollab: 0,
      collaborators: [],
      HKFeesUSD: 34,
      CRFeesUSD: 20,
      intTransferFeesUSD: 15,
      isError: false,
      isMounted: false,
      isMonthly: true,
      range: 'monthly'
    }
  }
  async fetchData(){
    try {
			const {data: collaborators} = await apiClient.getColaborators();
      this.setState({
				collaborators: collaborators.records, 
				isMounted: true})
		} catch (e) {
			if(e.response){
        this.setState({isError: true})
				return <State error/>
			}
		}
  }
  componentWillMount(){
    this.fetchData()
  }
  handleRangeChange=(e)=>{
    this.setState({ range: e.target.value });
  }
  handleSelectAvatar(user,rate){
    this.state[user] ? 
      this.setState({[user]:!this.state[user], totalCollab: this.state.totalCollab - rate})
      : 
      this.setState({[user]:!this.state[user],  totalCollab: this.state.totalCollab + rate})
  }
  renderTotal(){
    let {totalCollab, CRFeesUSD, intTransferFeesUSD, range} = this.state;

    if(totalCollab > 0 && range){
      switch (range) {
        case 'monthly':
            return totalCollab + CRFeesUSD + intTransferFeesUSD   
        case '15day':
            return (totalCollab/2) + CRFeesUSD + intTransferFeesUSD 
        default:
          return 0
      }
    }
      
  }
  renderCollaborators(){
    
    return this.state.collaborators.map(item => {
      if(item.fields['Agreement'] === 'Monthly'){
        let pic = () => {
          return item.fields['Pic'] ? getThumb(item.fields['Pic'][0], 'small') : null
        }
        let user = {
          name: item.fields['Name'] || '',
          rate: item.fields['Rate'] || '',
          pic: pic()
        }
        let avatarProps = {
          avatarUrl: user.pic,
          active: this.state[user.name]
        }
        return (
          <div key={item.id} onClick={()=>this.handleSelectAvatar(user.name,user.rate)} className={`list-item list-item-action ${this.state[user.name]? 'active': ''}`}>
            <SelectAvatar {...avatarProps} />

            <h4 className="list-item-title">{user.name}</h4>
            <div className="list-item-actions">
              ${user.rate}/m
            </div>
            
          </div>
        )
      } return false
    })
  }
	render() {
		return (
			<div>
        {this.state.isMounted ? 
          <Fragment>
            <Radio.Group value={this.state.range} onChange={this.handleRangeChange}>
              <Radio.Button value="15day">15 Day</Radio.Button>
              <Radio.Button value="monthly">Monthly</Radio.Button>
            </Radio.Group>
            {this.renderCollaborators()}
            <Divider>Total ${this.renderTotal()}.00</Divider>
          </Fragment>
          :
          <State loading/>
        }
			</div>
		);
	}
}

export default PayCalculator;
