import React from 'react';
import { Link } from 'react-router-dom';

import HomeBody from './HomeBody';

import heroImage from '../assets/hero-image.jpg';

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
				<img src={heroImage} alt='Home image background image' />
				<p>ADITI PANDEY</p>
			</div>
			<HomeBody />
		</div>
	);
};

export default HomePage;
