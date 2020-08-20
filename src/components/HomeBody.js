import React from 'react';
import { Link } from 'react-router-dom';

const HomeBody = () => {
	return (
		<div id='about' className='homebody'>
			<p>
				When I m not outside with my rucksack, I love writing my blogs.
				I find it a great platform to express my thoughts.
			</p>
			<p>
				I live in Kolkata, with my family. My favorite things in life
				are a big plate of paella with a glass of sangria , windy days
				and going out to the dog park.
			</p>

			<blockquote>
				The cure of boredom is curiosity. There is no cure for
				curiosity.
				<cite>~ Aditi Pandey</cite>
			</blockquote>

			<p>
				Hi! I am Aditi Pandey. I am an Electronics Engineer and an
				eloquent orator. I am a soulful fashion enthusiast who is a
				caffeine connoisseur and loves travelling. I watch horror movies
				and get scared by lizards. But, I wish them good luck!
			</p>

			<Link to='/blogs'>
				<button class='homebody-button ui green button'>
					Read my blogs
				</button>
			</Link>
		</div>
	);
};

export default HomeBody;
