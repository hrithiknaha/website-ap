import React, { useEffect } from 'react';
import parse from 'html-react-parser';

const Blog = (props) => {
	return (
		<div className='blog'>
			<div className='blog-photo'>
				<img src='https://source.unsplash.com/random/300x300' alt='' />
			</div>
			<div className='blog-details'>
				<div className='blog-details__title'>{props.blog.title}</div>
			</div>
		</div>
	);
};

export default Blog;
