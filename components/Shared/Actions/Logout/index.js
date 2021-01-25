import React, { Component } from "react";
import {Icon} from 'antd';
import Fire from 'Config/firebase';
import AppContext from 'Services/AppContext'

class Logout extends Component {
  logout = () => {
		Fire.auth().signOut();
	}
	render() {
		return (
			<AppContext.Consumer>
				{(context)=>(
					context.user && <Icon onClick={this.logout} type="logout" theme='outlined'/>
				)}
			</AppContext.Consumer>
		);
	}
}

export default Logout;
