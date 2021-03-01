import React from 'react'
import './App.css'
import RootContextProvider from './contexts/RootContext'
import Space from './components/Space'
import FloatingRoomWindow from './components/FloatingRoomWindow'

import './stars.css'
import StarfieldAnimation from 'react-starfield-animation'

import BackgroundImage from './img/MetaFest_bg.jpg'
import Announce from './components/announcement'

function App () {
  return (
    <div className='App'>
      <div className='stars'></div>
      <div className='twinkling'></div>
      {/**<StarfieldAnimation
        numParticles={300}
        lineWidth={2.0}
        depth={300}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />*/}

      <RootContextProvider>
        
        <div
          style={{
            position: 'relative',
            zIndex: '1'
          }}
        >
          <Space />
          <FloatingRoomWindow />
        </div>
      </RootContextProvider>
    </div>
  )
}

export default App
