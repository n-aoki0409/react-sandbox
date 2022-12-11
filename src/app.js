import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Contact } from './routes/Contact';
import { Notfound } from './routes/Notfound';
import { Footer } from './routes/Footer';
import { Posts } from './routes/Posts';
import { Post } from './routes/Post';
import { PostIndex } from './routes/PostIndex';

function App() {
	return (
		<div className="app">
			<h1>React-router-V6</h1>
			<Routes>
				<Route path='/' element={ <Home/> } />
				<Route path='/about' element={ <About /> } />
				<Route path='/contact' element={ <Contact message='Hello' /> } />
				<Route path='/posts' element={ <Posts /> }>
					<Route index element={ <PostIndex /> } />
					<Route path=':postId' element={ <Post /> } />
				</Route>
				<Route path='*' element={ <Notfound /> } />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;