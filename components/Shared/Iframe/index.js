import React, {Component, Fragment} from 'react';
import State from '../State'


class Iframe extends Component  {
  constructor(props){
    super(props)
    this.state={
      loading: true
    }
  }
  hideSpinner = () =>{
    this.setState({loading: false})
  };
  renderURL(){
    if(this.props.logTime){return 'shrEdtF3yQmdkx6dt'}
    else if(this.props.logTransaction){return 'shrcGhFP7odzEKyUG'}
    else if(this.props.newProject){ return 'shrN3PHLmKpHprbUC'}
    else return false
  }
  render(){
    return (
      <Fragment>
        {this.state.loading ?
          <State loading/> : null
        }
        <iframe 
          className="airtable-embed" 
          title="Log Transaction" 
          src={`https://airtable.com/embed/${this.renderURL()}?backgroundColor=cyan`} 
          frameBorder="0" 
          onLoad={this.hideSpinner}
          width="100%" 
        ></iframe>
      </Fragment>
    )
  }
}

export default Iframe;