import React, { Fragment, useContext } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import HeaderImage from '../img/metafest-header.png'
import Date from '../img/metafest-date.png'
import Flavortext from '../img/metafest-flavortext.png'
import Grid from '../img/metafest-grid.gif'
import Future from '../img/metafest-manifest-the-future.png'
import Noise from '../img/metafest-noise.gif'
import Rocks from '../img/metafest-rocks.gif'
import Wanderer from '../img/metafest-wanderer.png'

const StyledLink = styled.a`
  color: #e340a8;
  text-align: center;
`

const Announce = () => {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <React.Fragment>
      {isPortrait && isMobile ? (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            overflowY: 'auto',
            display: 'grid',
            placeItems: 'center'
          }}
        >
          <img
            src={Date}
            alt='March 7th - April 4th'
            width='50%'
            style={{
              position: 'fixed',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: '0',
              right: '0',
              top: '5rem'
            }}
          />
          <img
            src={HeaderImage}
            alt='MetaFest'
            width='100%'
            style={{
              position: 'fixed',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: '0',
              right: '0',
              top: '4rem'
            }}
          />
          <div>
            <img
              src={Flavortext}
              alt='a shitload of fun'
              width='50%'
              style={{
                position: 'absolute',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: '0',
                right: '0',
                top: '38vh',
                zIndex: '1'
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              zIndex: '100',
              left: '0%',
              right: '0%',
              marginLeft: 'auto',
              marginRight: 'auto',
              bottom: '30vh',
              backgroundColor: '#000000AA',
              padding: '1rem'
            }}
          >
            <h2 style={{ color: '#fff' }}>Fill out an application to join</h2>
            <StyledLink href='http://bit.ly/MetaFestMods'>MOD</StyledLink>
            {'   '}
            <StyledLink href='http://bit.ly/MetaFestSpeakers'>
              SPEAKER
            </StyledLink>
            {'   '}
            <StyledLink href='http://bit.ly/MetaFestMG'>METAFAM</StyledLink>
          </div>
          <img
            src={Wanderer}
            alt=''
            width='50%'
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '0%',
              zIndex: '10'
            }}
          />
          <img
            src={Rocks}
            alt=''
            width='100%'
            style={{
              position: 'fixed',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: '0',
              right: '0',
              bottom: '0',
              zIndex: '1'
            }}
          />
          <img
            src={Grid}
            alt=''
            width='100%'
            height='60%'
            style={{
              position: 'fixed',
              bottom: '0',
              zIndex: '0'
            }}
          />
        </div>
      ) : (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            overflowY: 'auto',
            display: 'grid',
            placeItems: 'center'
          }}
        >
          <img
            src={Date}
            alt='March 7th - April 4th'
            width='30%'
            style={{
              position: 'fixed',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: '0',
              right: '0'
            }}
          />
          <img
            src={HeaderImage}
            alt='MetaFest'
            width='60%'
            style={{
              position: 'fixed',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: '0',
              right: '0',
              top: '-3rem'
            }}
          />
          <div>
            <img
              src={Flavortext}
              alt='a shitload of fun'
              width='60%'
              style={{
                position: 'absolute',
                top: '60%',
                right: '0%',
                zIndex: '1',
                width: '30%'
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              zIndex: '100',
              left: '0%',
              right: '0%',
              marginLeft: 'auto',
              marginRight: 'auto',
              bottom: '8vh',
              backgroundColor: '#000000AA',
              padding: '1rem'
            }}
          >
            <h2 style={{ color: '#fff' }}>Fill out an application to join</h2>
            <StyledLink href='http://bit.ly/MetaFestMods'>MOD</StyledLink>
            {'   '}
            <StyledLink href='http://bit.ly/MetaFestSpeakers'>
              SPEAKER
            </StyledLink>
            {'   '}
            <StyledLink href='http://bit.ly/MetaFestMG'>METAFAM</StyledLink>
          </div>
          <img
            src={Wanderer}
            alt=''
            width='50%'
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '0%',
              zIndex: '10'
            }}
          />
          <img
            src={Rocks}
            alt=''
            width='100%'
            style={{
              position: 'fixed',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: '0',
              right: '0',
              bottom: '0',
              zIndex: '1'
            }}
          />
          <img
            src={Grid}
            alt=''
            width='100%'
            height='60%'
            style={{
              position: 'fixed',
              bottom: '0',
              zIndex: '0'
            }}
          />
        </div>
      )}
    </React.Fragment>
  )
}

export default Announce
