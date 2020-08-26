import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import Blogs from './Blogs';
import BlogNew from './BlogNew';

const Main = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/blogs' component={Blogs} />
				<Route exact path='/' component={HomePage} />
				<Route path='/blog/new' component={BlogNew} />
			</Switch>
		</BrowserRouter>
	);
};

export default Main;
