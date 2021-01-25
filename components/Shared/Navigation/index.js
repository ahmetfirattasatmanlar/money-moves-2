import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import AppContext from 'Services/AppContext';
// import OpenCalculatorButton from 'Components/Shared/Actions/OpenCalculatorButton';
// import Logo from 'Assets/pengyi-logo.svg'
import Logout from 'Components/Shared/Actions/Logout';

const {SubMenu} = Menu;


class Navigation extends Component {
	constructor(props){
		super(props);
		this.state = {
			iconType: 'filled',
			// isCookieOpen: false,
		}
	}
	// openCookie(){
	// 	this.setState({isCookieOpen: !this.state.isCookieOpen})
	// }
	
	render() {
		return (
			// <Logout/>
			// <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
			<AppContext.Consumer>
				{(context)=> (
					 
						<Menu theme="dark" mode="inline">
							 {/* <Menu.Item className="py-4 d-flex" style={{height: 'auto'}}> */}
								{/* <img src={Logo} alt="" className="pengyi-logo mr-2"/> */}
									{/* <Icon type="home" theme={this.state.iconType}/>
									<span className="nav-text">{context.company} Home</span> */}
							{/* </Menu.Item> */}
							<Menu.Item key="1">
								<NavLink to="/faqs">
									<Icon type="message" theme={this.state.iconType}/>
									<span className="nav-text">FAQs</span>
								</NavLink>
							</Menu.Item>
							<Menu.Item key="2">
								<NavLink to="/portfolio">
									<Icon type="picture" theme={this.state.iconType}/>
									<span className="nav-text">Portfolio</span>
								</NavLink>
							</Menu.Item>
							<Menu.Item key="3">
								<NavLink to="/logtime">
									<Icon type="clock-circle" theme={this.state.iconType}/>
									<span className="nav-text">Log Time</span>
								</NavLink>
							</Menu.Item>
							<Menu.Item key="4" disabled>
								<NavLink to="/track-time">
									<Icon type="clock-circle" theme={this.state.iconType}/>
									<span className="nav-text">Track Time</span>
								</NavLink>
							</Menu.Item>
							<SubMenu
								key="sub1"
								title={
									<span>
										<Icon type="money-collect" />
										<span>Transactions</span>
									</span>
								}
							>
								<Menu.Item key="5">
									<NavLink to="/logtransaction">
										<Icon type="money-collect" theme={this.state.iconType}/>
										<span className="nav-text">Log Transaction</span>
									</NavLink>
								</Menu.Item>
								<Menu.Item key="6">
									<NavLink to="/calculatetransaction">
										<Icon type="money-collect" theme={this.state.iconType}/>
										<span className="nav-text">Calculate Transaction</span>
									</NavLink>
								</Menu.Item>
							</SubMenu>
							<Menu.Item key="7" >
								<NavLink to="/projects">
									<Icon type="contacts" theme={this.state.iconType}/>
									<span className="nav-text">Projects</span>
								</NavLink>
							</Menu.Item>
							<Menu.Item key="8">
								<NavLink to="/dailywork">
									<Icon type="smile" theme={this.state.iconType}/>
									<span className="nav-text">Daily Work</span>
								</NavLink>
							</Menu.Item>	
							<Menu.Item>
								
								<Logout/>
								<span>Logout</span>
							</Menu.Item>					
						</Menu>
				)}
			</AppContext.Consumer>
			
		);
	}
}

export default Navigation;
