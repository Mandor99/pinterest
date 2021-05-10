import React from 'react';
import './App.css';
import { PinsProvider } from './app/hooks/PinsContext';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { GlobalStyle } from './style/GlobalStyle';

function App() {
	return (
		<PinsProvider>
			<div className='App'>
				<GlobalStyle />
				<Navbar />
				<Home />
			</div>
		</PinsProvider>
	);
}

export default App;
