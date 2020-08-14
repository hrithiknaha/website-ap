import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';

const Main = () => {
	return (
		<div>
			<BrowserRouter basename={window.location.pathname || ''}>
				<Switch>
					<Route path='/' component={HomePage} exact />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Main;
