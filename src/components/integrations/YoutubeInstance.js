import React, { useState, useEffect, useContext } from 'react'
import { FloatingSpaceContext } from '../../contexts/FloatingSpaceContext'

function YoutubeInstance ({ roomData }) {
  const [youtubeRoom, setYoutubeRoom] = useState('BnO-3u64fO8')
  const { currentFloatingSpaces } = useContext(FloatingSpaceContext)
  const space = currentFloatingSpaces

  useEffect(() => {
    if (space.indexOf('stage') > -1) {
      setYoutubeRoom('BnO-3u64fO8')
    } else {
      setYoutubeRoom('BnO-3u64fO8')
    }
    return console.log(youtubeRoom)
  }, [space, youtubeRoom])
  return (
    <iframe
      title='Youtube Livestream'
      width='100%'
      height='100%'
      src={`https://www.youtube-nocookie.com/embed/${youtubeRoom}`}
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  )
}

export default YoutubeInstance
