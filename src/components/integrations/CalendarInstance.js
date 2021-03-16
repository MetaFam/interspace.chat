import React, { useState } from 'react'
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
    <InstanceContainer>
      <iframe
        title='Schedule'
        src={`https://calendar.google.com/calendar/embed?src=1qnbr9796nnenn53cibhvekh58%40group.calendar.google.com&ctz=${timezone}&mode=AGENDA&amp`}
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
    </InstanceContainer>
  )
}

export default CalendarInstance
