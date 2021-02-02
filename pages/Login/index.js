import React, {Component} from 'react';
import Fire from 'Config/firebase';
import Logo from 'Assets/pengyi-logo.svg'

class Login extends Component {
  constructor(props) {
		super(props);
		this.state = {
			form: {
				email: '',
				password: '',
			},
			fireErrors: '',
			formTitle: 'Login',
			loginBtn: true
		}
	}

	login = e => {
		e.preventDefault();
		Fire.auth().signInWithEmailAndPassword(this.state.form.email, this.state.form.password)
			.catch((error) => {
				this.setState({ fireErrors: error.message })
			});
	}

	register = e => {
		e.preventDefault();
		Fire.auth().createUserWithEmailAndPassword(this.state.form.email, this.state.form.password)
			.catch((error) => {
				this.setState({ fireErrors: error.message })
			});
	}

	getAction = action => {
		if (action === 'reg') {
			this.setState({ formTitle: 'Sign up', loginBtn: false, fireErrors: '' });
		} else {
			this.setState({ formTitle: 'Login', loginBtn: true, fireErrors: '' });
		}
	}

	handleInputChange = e => {
		const {name, value} = e.target;

		this.setState({
			form: Object.assign({}, this.state.form, {
				[name]: value
			})
		});
	}

	render() {

		let submitBtn = this.state.loginBtn ?
			(<input className="btn btn-light btn-block btn-lg" type="submit" onClick={this.login} value="Login" />) :
			(<input className="btn btn-light btn-block btn-lg" type="submit" onClick={this.register} value="Register" />);

		// let login_register = this.state.loginBtn ?
		// 	(<button className="registerBtn" onClick={() => this.getAction('reg')}>Sign up</button>) :
		// 	(<button className="registerBtn" onClick={() => this.getAction('login')}>Back to login</button>)

		return (
			<div className="app d-flex justify-content-center align-items-center">
				<div className="card bg-primary ">
					<div className="card-body p-5 d-flex">
					{/* <h1 className="font-weight-bold text-white">{this.state.formTitle}</h1> */}
						<div className="col d-flex align-items-center">
							<h1 className="font-weight-bold text-white">
								<img src={Logo} className='pengyi-logo pengyi-logo-lg' alt=""/>
							</h1>

						</div>
						<div className="col">
							<form>
								<div className="form-group">
									<input type="text"
										value={this.state.form.email}
										onChange={this.handleInputChange}
										className="form-control"
										placeholder='Enter email'
										style={{width: 200}}
										name="email" />
								</div>

								<div className="form-group">
									<input type="password"
										value={this.state.form.password}
										onChange={this.handleInputChange}
										className="form-control"
										placeholder='Enter password'
										name="password" />
								</div>

								{this.state.fireErrors && <div className="Error"> {this.state.fireErrors} </div> }

								{submitBtn}
							</form>
						</div>
					</div>
				</div>

					{/* {login_register} */}
			</div>
		)
	}
}

export default Login;