import React from 'react';
import { Outlet } from 'react-router-dom';

export const Posts = () => {
	return (
		<>
			<h2>Posts</h2>
			<Outlet />
		</>
	);
};