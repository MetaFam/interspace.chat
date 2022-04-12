import React, { useState } from 'react'
import { Box } from "@chakra-ui/react";
import TimezonePicker from 'react-timezone'
import styled from '@emotion/styled'

const InstanceContainer = styled.div`
  grid-template-rows: 1fr auto;
  li {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #aaaaaa;
    color: '#310C4FDD';
  }
`

function CalendarInstance () {
  const [timezone, changeTimezone] = useState('Europe/London')
  return (
    <>
      <iframe
        title='MetaFest2: Schedule'
        src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%238E24AA&ctz=UTC&mode=AGENDA&showTabs=0&src=OWxpZWtudTVwbmVzMWw1MWVqNm4yOTE2dTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F4511E`}
        style={{
          minHeight: '500px',
          height: '100%',
          width: '100%',
          border: '0px'
        }}
      />
      <p style={{ color: '#65CBF6', marginTop: '1rem' }}>
        Please select your timezone
      </p>
      <TimezonePicker
        value={timezone}
        onChange={picktimezone => changeTimezone(picktimezone)}
        inputProps={{
          placeholder: 'Select your Timezone...',
          name: 'picktimezone'
        }}
        style={{
          position: 'relative',
          left: 0,
          marginRight: 'auto',
          width: '70%'
        }}
      />
    </>
  )
}

export default CalendarInstance
