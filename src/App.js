import React from 'react';
import './app.css';


import { Route } from 'react-router-dom';

import HomePage from './Page/HomePage/homePage';
import Hats from './Page/HomePage/Hats/hats';
import ShopPage from './Page/ShopPage/shopPage';
import Header from './components/Header/header';
import SignIn_and_register from './Page/SignIn_and_register/signIn_and_register';
import { auth } from './firebase/firebase';


class App extends React.Component {
	constructor(){
		super()

		this.state = {
			currentUser: null
		}      
	}

	unsubscribeFromAuth = null;

	componentWillMount(){
		this.unsubscribeFromAuth =	auth.onAuthStateChanged(user => {
			this.setState({
				currentUser: user,
			})

			console.log(user)
		})
	}

	componentWillUnmount(){
		this.unsubscribeFromAuth();
	}

	render(){
		return (
			<div >
				<Header currentUser={this.state.currentUser}/>
				<Route exact path="/" component={HomePage} />
				<Route  path="/shop/hats" component={Hats} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignIn_and_register} />
		   </div>	
		   
	   );
	
	}
	
		
}


export default App;