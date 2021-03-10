import React, { Component, Fragment } from 'react';
import { Button } from 'antd'
import saveToZip from '../../../../services/saveToZip'
import { setTimeout } from 'timers';
// import apiClient from 'Services/apiClient'
import State from '../../State'

class DownloadIcon extends Component {
  constructor(props){
    super(props)
    this.state = {
      isDownloading: false
    }
  }
  getImagesZipped(){
    try {
      const URLS = []
      this.props.files.map((file) => {
        if(file.url) URLS.push(file.url)
        return false
      })
      saveToZip((this.props.name || 'project.zip'),URLS)
      this.setState({isDownloading: true})
      setTimeout(() => {
        this.setState({isDownloading: false})
      }, 5000);
    } catch (error) {
      return <State error/>
    }
  }
  renderIcon(){
    if(this.props){
      if(!this.state.isDownloading){
        return <Button type="link" onClick={()=> this.getImagesZipped()}><Icon type="download"/></Button>
      } else return <div></div>
    } else return false
  }
  render(){
    return (
      <Fragment>{this.renderIcon()}</Fragment>
    )
  }
}

export default DownloadIcon;