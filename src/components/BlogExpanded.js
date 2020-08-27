import React from 'react';
import parse from 'html-react-parser';

const BlogExpanded = (props) => {
	return (
		<div className='wrapper'>
			<div className='wrapper-blog'>
				<div className='wrapper-blog-head'>
					<img
						className='wrapper-blog-head_img'
						src='https://source.unsplash.com/random/400x400'
						alt=''
					/>

					<div className='wrapper-blog-head_title'>
						{props.location.state.blog.title}
					</div>
				</div>

				<div className='wrapper-blog_body'>
					{parse(props.location.state.blog.body)}
				</div>
			</div>
		</div>
	);
};

export default BlogExpanded;
