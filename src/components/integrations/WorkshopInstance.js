import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { FloatingSpaceContext } from '../../contexts/FloatingSpaceContext'

const Container = styled.div`
  grid-template-columns: 1fr;
  place-items: center;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  text-align: center;

  h1 {
    padding-bottom: 0.3rem;
  }

  p {
    strong {
      color: yellow;
    }
  }
  a {
    padding: 0px;
  }
`
const Highlight = styled.p`
  color: #49c8f4;
`

const ExternalLink = styled.p`
  :hover {
    color: #bd96e9;
    text-shadow: rgba(189, 150, 233, 0.9) 0px 0px 16px;
  }
`

class Soon extends React.Component {
  render () {
    return (
      <span style={{ color: 'yellow', fontSize: '0.8rem' }}>
        {' '}
        check back soon™
      </span>
    )
  }
}

const WorkshopInstance = () => {
  const { addFloatingSpace } = useContext(FloatingSpaceContext)

  const openInNewTab = url => {
    let win = window.open(url, '_blank')
    win.focus()
  }

  return (
    <Container>
      <h1>Workshops</h1>
      <p>Welcome to a week of nice workshops</p>
      <br />
      <Highlight>When and What?</Highlight>
      <p>
        Please check the{' '}
        <span
          style={{ color: 'yellow' }}
          className='click-zone'
          onClick={() => addFloatingSpace('Calendar')}
        >
          Schedule
        </span>
        for details.
      </p>
      <br />
      <Highlight>Where?</Highlight>
      <p>
        All workshops happen in Metagame Discord #metafest-voice,
        <br /> no reservation required.
      </p>
      <br />
      <br />
      <Highlight>Quest!</Highlight>
      <p>
        We are <strong>looking for community members</strong> to record <br />
        the workshops to later upload them to youtube. <br />
        Please have a look at #metafest-ops to sign up for this quest.
      </p>
    </Container>
  )
}

export default WorkshopInstance
