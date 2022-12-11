import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Contact = ( { message } ) => {
	const navigate = useNavigate();
	return (
		<div>
			<p>Contact, { message }</p>
			<button onClick={() => navigate('/about')}>about</button>
		</div>
	);
};