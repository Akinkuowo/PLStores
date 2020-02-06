import React from 'react';
import './app.css';


import { Route } from 'react-router-dom';

import HomePage from './Page/HomePage/homePage';
import Hats from './Page/HomePage/Hats/hats';
import ShopPage from './Page/ShopPage/shopPage';


const App = () => {
	
		return (
			<div >
				<Route exact path="/" component={HomePage} />
				<Route  path="/shop/hats" component={Hats} />
				<Route path="/shop" component={ShopPage} />
		   </div>	
		   
		   );
	
}


export default App;