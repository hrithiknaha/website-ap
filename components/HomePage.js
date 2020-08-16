import React from 'react';

import HomeBody from './HomeBody';

const HomePage = () => {
	return (
		<div>
			<div className='homepage-image'>
				<div className='homepage-image_nav'>
					<a href='/'>
						<p>HOME</p>
					</a>
					<a href='/blogs'>
						<p>BLOGS</p>
					</a>
					<a href='#about'>
						<p>ABOUT ME</p>
					</a>
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
