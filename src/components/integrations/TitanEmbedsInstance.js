import React, { useState, useEffect, useContext } from 'react'
import { FloatingSpaceContext } from '../../contexts/FloatingSpaceContext'

function ChatInstance () {
  const [discordRoom, setDiscordRoom] = useState('692409996083855501')
  const { currentFloatingSpaces } = useContext(FloatingSpaceContext)
  const space = currentFloatingSpaces

  useEffect(() => {
    if (space.indexOf('main-room') > -1) {
      setDiscordRoom('692423172020240444')
    } else if (space.indexOf('lobby') > -1) {
      setDiscordRoom('692423341046366208')
    } else if (space.indexOf('mentor-ring') > -1) {
      setDiscordRoom('692423431777681488')
    } else if (space.indexOf('claim poap token') > -1) {
      setDiscordRoom('693135339249991701')
    } else {
      setDiscordRoom('692409996083855501')
    }
    return console.log(discordRoom)
  }, [space, discordRoom])

  return (
    <iframe
      src={`https://titanembeds.com/embed/690315811293888778?css=85&defaultchannel=${discordRoom}&theme=DiscordDark`}
      width='100%'
      height='100%'
      frameBorder='0'
      title='discord chat'
    ></iframe>
  )
}

export default ChatInstance
