import React, { useEffect } from 'react';
import parse from 'html-react-parser';

const Blog = (props) => {
	return (
		<div className='ui card'>
			<div class='card'>
				<div class='content'>
					<div class='header'>{props.blog.title}</div>
					<div class='description'>{parse(props.blog.body)}</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
