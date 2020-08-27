import React from 'react';
import parse from 'html-react-parser';

const BlogExpanded = (props) => {
	return (
		<div>
			<h1>{props.location.state.blog.title}</h1>
			<p>{parse(props.location.state.blog.body)}</p>
		</div>
	);
};

export default BlogExpanded;
