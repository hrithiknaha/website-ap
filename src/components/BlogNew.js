import React, { useState } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';
import Editor from 'react-medium-editor';

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

// ES module

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
		const created = timestamp();
		projectFirestore.collection('blogs').add({
			title,
			body,
			created
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

				<Editor
					className='blog-new_body'
					text={body}
					onChange={handleBodyChange}
				/>

				<button class='ui button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default BlogNew;
