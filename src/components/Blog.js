import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
	return (
		<Link
			to={{
				pathname: `/blog/${props.blog.id}`,
				state: {
					blog: props.blog
				}
			}}
			className='blog'
		>
			<div className='blog-photo'>
				<img src='https://source.unsplash.com/random/300x300' alt='' />
			</div>
			<div className='blog-details'>
				<div className='blog-details__title'>{props.blog.title}</div>
			</div>
		</Link>
	);
};

export default Blog;
