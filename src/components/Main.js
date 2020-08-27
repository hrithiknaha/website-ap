import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import Blogs from './Blogs';
import BlogNew from './BlogNew';
import BlogExpanded from './BlogExpanded';

const Main = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/blogs' component={Blogs} />
				<Route exact path='/' component={HomePage} />
				<Route exact path='/blog/new' component={BlogNew} />
				<Route path='/blogs/:id' component={BlogExpanded} />
			</Switch>
		</BrowserRouter>
	);
};

export default Main;
