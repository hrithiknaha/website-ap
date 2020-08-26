import React, { useEffect, useState } from 'react';

import { projectFirestore } from '../firebase/config';

import Blog from './Blog';

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const events = projectFirestore.collection('blogs');
		events.get().then((querySnapshot) => {
			const tempDoc = [];
			querySnapshot.forEach((doc) => {
				tempDoc.push({ id: doc.id, ...doc.data() });
			});
			setBlogs(tempDoc);
		});
	}, []);
	return (
		<div className='blogs-feed ui container'>
			<div className='blogs-feed__title'>For your Perusal</div>
			{blogs.map((blog) => {
				return <Blog key={blog.id} blog={blog} />;
			})}
		</div>
	);
};

export default Blogs;
