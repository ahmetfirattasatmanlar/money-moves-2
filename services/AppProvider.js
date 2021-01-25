import React, {Component} from 'react';
import AppContext from './AppContext';
import Fire from 'Config/firebase';
import apiClient from 'Services/apiClient';


class AppProvider extends Component {
  constructor(){
    super()
    this.state = {
      company: 'Pengyi',
      user: null,
      portfolio: {}
    };
  }
  componentDidMount(){
    this.authListener();
    // this.fetchPortfolio();
  }
  authListener(){
    Fire.auth().onAuthStateChanged((user) => {
      if(user){this.setState({user})}
      else{this.setState({user:null})}
    });
  }
  async fetchPortfolio(){
    try {
      const {data: portfolioList} = await apiClient.getAllPortfolio();
      this.setState({portfolio: portfolioList.records})
		} catch (e) {
			if(e.response){
        console.log(e.response)
			}
		}
  }
  render(){
    return(
      <AppContext.Provider
        value={{
          // cars: this.state.cars,
          company: this.state.company,
          user: this.state.user,
          portfolio: this.state.portfolio
          // incrementPrice: selectedID => {
          //   const cars = Object.assign({}, this.state.cars);
          //   cars[selectedID].price = cars[selectedID].price + 1;
          //   this.setState({
          //       cars
          //   });
          // },
          // decrementPrice: selectedID => {
          //     const cars = Object.assign({}, this.state.cars);
          //     cars[selectedID].price = cars[selectedID].price - 1;
          //     this.setState({
          //         cars
          //     });
          // }
        }}>
        {this.props.children}
      </AppContext.Provider>

    )
  }
}
export default AppProvider