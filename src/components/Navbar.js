import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='ui container'>
			<div class='ui  secondary menu'>
				<Link to='/' class='item'>
					Home
				</Link>
				<Link to='/blogs' class='item'>
					Blog
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
