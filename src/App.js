import React from 'react';
import './App.css';
import Space from './components/Space';
import FloatingRoomWindow from './components/FloatingRoomWindow';
import RootContextProvider from './contexts/RootContext';

import './stars.css';

import StarfieldAnimation from 'react-starfield-animation';

function App() {
	return (
		<div className='App'>
			<div className='stars'></div>
			<div className='twinkling'></div>

			<StarfieldAnimation
				numParticles={300}
				lineWidth={2.0}
				depth={300}
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
				}}
			/>
			<RootContextProvider>
				<Space />
				<FloatingRoomWindow />
			</RootContextProvider>
		</div>
	);
}

export default App;
