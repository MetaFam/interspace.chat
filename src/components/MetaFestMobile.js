import React, { Fragment, useContext, useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext'

import Crawl from './crawltext/crawltext'

import HeaderImage from '../img/metafest-header.png'
import Date from '../img/metafest-date.png'
import Flavortext from '../img/metafest-flavortext.png'
import Grid from '../img/metafest-grid.gif'
import Future from '../img/metafest-manifest-the-future.png'
import Noise from '../img/metafest-noise.gif'
import Rocks from '../img/metafest-rocks.gif'
import Wanderer from '../img/metafest-wanderer.png'
import Loupe from '../img/loupe.svg'

const StyledLink = styled.a`
  color: #e340a8;
  text-align: center;
`
const ImageButton = styled.button`
  cursor: pointer;
  transform: scale(1);
  transition: 1s;

  & :hover {
    transform: scale(2);
  }
`

const ButtonLink = styled.button`
  background-color: '#ffffff33';
  color: '#FFF';
  font-size: '1rem';
  padding: '1rem';
  border-radius: '1rem';
  border-color: '#FF1B7F';
  border-width: '3px';
  cursor: 'pointer';
`

const Mobile = () => {
  const [starwars, setStarwars] = useState(true)
  const crawlSwitch = () => {
    setStarwars(starwars => !starwars)
    {
      starwars ? addFloatingSpace('Crawl') : closeFloatingSpace('Crawl')
    }
  }

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const {
    currentFloatingSpaces,
    addFloatingSpace,
    closeFloatingSpace
  } = useContext(FloatingSpaceContext)

  let displayedJoinedSpaces
  if (currentFloatingSpaces.length > 0) {
    if (currentFloatingSpaces.length > 2) {
      let nameCount = currentFloatingSpaces.length
      displayedJoinedSpaces =
        currentFloatingSpaces.slice(0, nameCount - 2).join(', ') +
        ', ' +
        currentFloatingSpaces.slice(nameCount - 2, nameCount).join(' & ')
    } else {
      displayedJoinedSpaces = currentFloatingSpaces.join(' & ')
    }
  }

  return (
    <React.Fragment>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'grid',
          placeItems: 'center'
        }}
      >
        <img
          src={Date}
          alt='March 7th - April 4th'
          width='50%'
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: '0',
            right: '0',
            top: '1rem'
          }}
        />
        <img
          src={HeaderImage}
          alt='MetaFest'
          width='50%'
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: '0',
            right: '0',
            top: '1rem'
          }}
        />
        <div
          style={{
            left: '0%',
            right: '0%',
            marginLeft: 'auto',
            marginRight: 'auto',
            bottom: '25vh',
            padding: '1rem'
          }}
        >
          <a href='https://youtu.be/SV5K6KJdSPA'>
            <ButtonLink
              style={{
                backgroundColor: '#ffffff33',
                color: '#FFF',
                fontSize: '1rem',
                padding: '1rem',
                borderRadius: '1rem',
                borderColor: '#FF1B7F',
                borderSize: '3px',
                cursor: 'pointer',
                marginTop: '0.5rem'
              }}
            >
              Watch the livestream
            </ButtonLink>
          </a>
          <a href='https://calendar.google.com/calendar/u/0/embed?src=1qnbr9796nnenn53cibhvekh58@group.calendar.google.com&ctz=Europe/London'>
            <ButtonLink
              style={{
                backgroundColor: '#ffffff33',
                color: '#FFF',
                fontSize: '1rem',
                padding: '1rem',
                borderRadius: '1rem',
                borderColor: '#FF1B7F',
                borderSize: '3px',
                cursor: 'pointer',
                marginTop: '0.5rem'
              }}
            >
              See the schedule
            </ButtonLink>
          </a>
          <a href='https://form.typeform.com/to/BClVBF4E'>
            <button
              style={{
                backgroundColor: '#ffffff33',
                color: '#FFF',
                fontSize: '1rem',
                padding: '1rem',
                borderRadius: '1rem',
                borderColor: '#03E9FD',
                borderSize: '3px',
                cursor: 'pointer',
                marginTop: '0.5rem'
              }}
            >
              Fill out an application<br></br> to join
            </button>
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Mobile
