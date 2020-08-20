import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import Blogs from './Blogs';

const Main = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/blogs' component={Blogs} />
				<Route exact path='/' component={HomePage} />
			</Switch>
		</BrowserRouter>
	);
};

export default Main;
