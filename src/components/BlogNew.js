import React, { useState } from 'react';
import { projectFirestore } from '../firebase/config';

import RichTextEditor from './RichTextEditor';

const BlogNew = () => {
	const [title, setTitle] = useState();
	const [body, setBody] = useState();

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleBodyChange = (text) => {
		setBody(text);
	};

	const handleSubmit = (e) => {
		console.log('Submitting');
		e.preventDefault();
		projectFirestore.collection('blogs').add({
			title,
			body
		});
	};

	return (
		<div className='ui container'>
			<form onSubmit={handleSubmit}>
				<input
					className='blog-new_title'
					type='text'
					name='title'
					placeholder='Title'
					onChange={handleTitleChange}
				/>
				{/* <textarea
					className='blog-new_body'
					name='body'
					rows='10'
					placeholder='Story goes here...'
				></textarea> */}
				<RichTextEditor handleBodyChange={handleBodyChange} />
				<button class='ui button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default BlogNew;
