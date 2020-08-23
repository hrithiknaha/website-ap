import React, { useEffect, useState } from 'react';

import { projectFirestore } from '../firebase/config';

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const events = projectFirestore.collection('blogs');
		events.get().then((querySnapshot) => {
			const tempDoc = [];
			querySnapshot.forEach((doc) => {
				tempDoc.push({ id: doc.id, ...doc.data() });
			});
			console.log(tempDoc);
		});
	}, []);
	return <div>Test</div>;
};

export default Blogs;
