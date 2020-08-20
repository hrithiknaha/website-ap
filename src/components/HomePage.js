import React from 'react';
import { Link } from 'react-router-dom';

import HomeBody from './HomeBody';

const HomePage = () => {
	return (
		<div>
			<div className='homepage-image'>
				<div className='homepage-image_nav'>
					<Link to='/'>
						<p>HOME</p>
					</Link>
					<Link to='/blogs'>
						<p>BLOGS</p>
					</Link>
					<Link to='#about'>
						<p>ABOUT ME</p>
					</Link>
				</div>
				<img
					src='https://source.unsplash.com/random/1600x900'
					alt='Home image background image'
				/>
				<p>ADITI PANDEY</p>
			</div>
			<HomeBody />
		</div>
	);
};

export default HomePage;
