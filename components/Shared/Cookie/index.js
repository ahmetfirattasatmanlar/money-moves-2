import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Button, Icon} from 'antd'

class Cookie extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }
  componentDidMount(){
    this.setState({isOpen: this.props.open})
  }
  componentWillReceiveProps(){
    this.handleToggle()
  }
  handleToggle(){
    this.setState({isOpen: !this.state.isOpen})
  }
  render(){
    return (
      <div className={`cookie 
        ${this.state.isOpen ? 'cookie-isOpen' : 'cookie-isClosed'} 
        `}>
        
        {this.props.title &&
        <div className="cookie-header">
          <h4 className="cookie-title">{this.props.title}</h4>
          {this.props.goTo && <NavLink className='ml-auto btn ' to={this.props.goTo}><Icon type='fullscreen'/></NavLink>}
          <Button onClick={()=>this.handleToggle()} type="primary"><Icon type='close'/></Button>
        </div>
        }
        <div className="cookie-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Cookie;