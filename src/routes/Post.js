import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Post = () => {
	const { postId } = useParams();
	const [post, setPost] = useState('');

	useEffect(() => {
		const fetchPost = async () => {
			const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ postId }`);
			const data = await res.json();
			setPost(data);
		};
		fetchPost();
	}, [postId]);

	return (
		<div>
			<h2>Post</h2>
			<div>
				<p>postId: { post.id }</p>
				<p>title: { post.title }</p>
				<p>body: { post.body }</p>
			</div>
		</div>
	);
};