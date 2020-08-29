import React, { useState } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';
import Editor from 'react-medium-editor';

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

// ES module

const BlogNew = (props) => {
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
		props.history.push(`/`);
	};

	return (
		<div className='ui container'>
			<form onSubmit={handleSubmit}>
				<button
					class='blog-new_button ui right floated tiny green button'
					type='submit'
				>
					Submit
				</button>
				<input
					className='blog-new_title'
					type='text'
					name='title'
					placeholder='Title'
					onChange={handleTitleChange}
					required
				/>
				<Editor
					className='blog-new_body'
					text={body}
					onChange={handleBodyChange}
				/>
			</form>
		</div>
	);
};

export default BlogNew;
