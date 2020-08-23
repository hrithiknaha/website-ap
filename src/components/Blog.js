import React, { useEffect } from 'react';

const Blog = () => {
	useEffect(() => {
		console.log('Mounted');
	}, []);
	return <div>Test</div>;
};

export default Blog;
