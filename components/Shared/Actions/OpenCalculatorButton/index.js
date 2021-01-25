import React, { Component, Fragment } from "react";
import Cookie from 'Components/Shared/Cookie'
import {Button, Icon} from 'antd'
import PayCalculator from 'Components/Shared/Actions/PayCalculator'

class OpenCalculatorButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }
  openCookie(){
    this.setState({isOpen: !this.state.isOpen})
  }
  renderButton(){
    switch (this.props.button) {
      case 'menu':
        return(
          <li className="d-flex align-items-center ant-menu-item" style={{paddingLeft: '48px'}} role='menuitem' onClick={()=>this.openCookie()}>
            <Icon type='calculator'/>
            Open Calculator
          </li>
        )
      default:
        return <Button onClick={()=>this.openCookie()}>Open Calculator <Icon type='calculator'/></Button>
    }
  }
	render() {
    let cookieProps = {
      open: this.state.isOpen,
      title: 'Calculate',
      goTo: '/calculatetransaction'
    }
		return (
			<Fragment>
        {this.renderButton()}
        <Cookie {...cookieProps}>
          <PayCalculator/>
        </Cookie>
      </Fragment>
		);
	}
}

export default OpenCalculatorButton;
