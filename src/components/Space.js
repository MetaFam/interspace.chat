import React, { Fragment, useContext, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import {
  BrowserView,
  isBrowser,
  isMobile,
  MobileView
} from 'react-device-detect'

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext'

import SvgImagemap from './MetaFest'
import Mobile from './MetaFestMobile'

import triangle from '../img/triangle.svg'
import Grid from '../img/metafest-grid.gif'
import HeaderImage from '../img/metafest-header.png'
import Date from '../img/metafest-date.png'
import Future from '../img/metafest-manifest-the-future.png'

import Zeppelin from '../img/zeppelin.svg'

const Header = styled.span``

const ImagemapContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 100%;
  min-height: 100vh;
  padding: 0;
`
const ImagemapContainerMobile = styled.div`
  display: grid;
  place-items: center;
  min-height: 90vh;
`

const Headline = styled.h6`
  color: black;
  font-weight: 500;
  font-size: 1.3rem;
  padding: 1rem;
  a {
    font-weight: 300;
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.background};
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    background-color: whitesmoke;
  }
`

const SpaceSelector = styled.div`
  .space-container {
    height: 100vh;
    display: grid;
  }
`

const SpaceInfo = styled.div`
  text-align: center;
  color: whitesmoke;
  bottom: 1rem;
  left: 50%;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: 300;
  div {
    color: ${props => props.theme.body};
  }
`

const Descripton = styled.div`
  z-index: 1;
  margin: 0px;
  font-size: 0.8rem;
  padding-bottom: 0.4rem;
  max-width: 650px;
  p {
    padding: 0.5rem;
    margin: 0px;
  }
  a {
    padding: 0px;
  }
  @media (max-width: 600px) {
    text-align: block;
    place-self: center;
    margin: 0 auto;
    padding: 2rem;
    a {
      padding: 0.5rem;
    }
  }
`

const CurrentSpace = styled.span`
  color: ${props => props.theme.highlight};
`

const StrongStyled = styled.strong`
  font-weight: 700;
`

const Triangle = styled.img`
  align-self: baseline;
`

const ClickImage = styled.img`
  cursor: pointer;
`

const MovingImage = styled.img`
  pointer-events: none;
  position: absolute;
  z-index: 1;
  animation: slidein 30s linear;
  @keyframes slidein {
    0% {
      transform: translateX(130%) translateY(80%);
    }
    100% {
      transform: translateX(-130%) translateY(60%);
    }
  }
`

const HeaderContainer = styled.div`
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  place-items: center;
`

const ShowSection = () => {
  const [isHidden, toggleHidden] = useState(false)
  const onClick = () => {
    isHidden ? toggleHidden(false) : toggleHidden(true)
  }

  const ButtonContainer = styled.div`
    position: absolute;
    z-index: 5;
    background-color: ${props => props.theme.background};
    opacity: 0.9;
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-self: center;
    place-content: center;
  `
  const CloseButton = styled.button`
    background: unset;
    border: 1px solid ${props => props.theme.highlight};
    border-radius: 100px;
    color: ${props => props.theme.highlight};
    font-size: 1rem;
    font-weight: 100;
    padding: 1rem;
    justify-self: center;
    align-self: start;
    max-width: 250px;
    & :focus {
      filter: invert(100%);
    }
  `
  return (
    <div>
      {isHidden ? null : (
        <ButtonContainer>
          <BrowserView>{isHidden ? null : <DesktopElement />}</BrowserView>
          <MobileView>{isHidden ? null : <MobileElement />}</MobileView>
          <CloseButton onClick={onClick}>
            {isHidden ? '' : 'ENTER'}
          </CloseButton>
        </ButtonContainer>
      )}
    </div>
  )
}

const DesktopElement = () => (
  <Descripton>

   <h1> Welcome to MetaFest</h1>
    <p>
    MetaFest is virtual festival/conference/hackathon powered by MetaGame <br />
    with the goal of helping you level up & manifest a better future.
  </p>
  <p style={{textDecoration: 'line-through'}}>
  Week I<br />
  The week of gaming & social events
  </p>
  <p style={{border: '1px solid #BD96E9', borderRadius: '10px'}}>
  Week II<br />
  The week of talks 70+ great talks
  </p>
  <p>
  Week III<br />
  The week of 20+ epic workshops
  </p>
  <p>
  Week IV<br />
  The week of hacking things into reality
    </p>
    <p style={{ marginTop: '1rem', fontSize: '1.3rem' }}>
      To enter <StrongStyled>METAFEST</StrongStyled>, you will have to
      <br />
      <a
        href='https://gitcoin.co/grants/213/metagame'
        target='_blank'
        rel='noopener noreferrer'
      >
        donate to our Gitcoin grant
      </a>
    </p>
    <p style={{ marginTop: '-1rem', marginBottom: '2rem', fontSize: '0.7rem' }}>jk jk just enter</p>
  </Descripton>
)

const MobileElement = () => (
  <Descripton>
    <p>
      This website is optimized for <StrongStyled>desktop</StrongStyled>.{' '}
    </p>
    <p style={{ marginTop: '2rem' }}>MetaFest livestreams happen at</p>
    <a href='https://www.youtube.com/channel/UC6gdZ6Q7Fwfvn-Uu4QKDyhg'>
      Metamedia Youtube channel
    </a>
  </Descripton>
)

const Space = () => {
  
  const [live, setLive] = useState(false)

  const { currentFloatingSpaces, addFloatingSpace } = useContext(
    FloatingSpaceContext
  )

  const space = currentFloatingSpaces

  let displayedJoinedSpaces
  if (space.length > 0) {
    if (space.length > 2) {
      let nameCount = space.length
      displayedJoinedSpaces =
        space.slice(0, nameCount - 2).join(', ') +
        ', ' +
        space.slice(nameCount - 2, nameCount).join(' & ')
    } else {
      displayedJoinedSpaces = space.join(' & ')
    }
  }
  {
    /**
  useEffect(() => {
    var Sidecar = require("gitter-sidecar");
    var myChat = new Sidecar({
      room: "ethereum/solidity",
      activationElement: false,
    });
  });
   */
  }

  return (
    <SpaceSelector>
      <BrowserView viewClassName='space-container'>
        <ShowSection />
        {live && <MovingImage src={Zeppelin} width='auto' height='auto' />}
        <ClickImage
          src={Date}
          alt='March 7th - April 4th'
          width='auto'
          height='60px'
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '1rem',
            zIndex: 2
          }}
          className='click-zone'
          onClick={() => addFloatingSpace('Calendar')}
        />
        <a href='/'>
          <ClickImage
            src={HeaderImage}
            alt='MetaFest'
            width='auto'
            height='150px'
            style={{
              position: 'absolute',
              top: '10px',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: '0px',
              right: '0px',
              zIndex: 2
            }}
          />
        </a>
        <ClickImage
          src={Future}
          alt='manifest'
          width='auto'
          height='100px'
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '1rem',
            zIndex: 2
          }}
          className='click-zone'
          onClick={() => addFloatingSpace('Apply')}
        />

        <ImagemapContainer>
          <SvgImagemap />
        </ImagemapContainer>
        <Header style={{ position: 'relative', zIndex: 3 }}>
          <SpaceInfo>
            {displayedJoinedSpaces ? (
              <Fragment>
                You're in <CurrentSpace>{displayedJoinedSpaces}</CurrentSpace>!
              </Fragment>
            ) : (
              <Fragment>
                <div>
                  Click on a <Triangle src={triangle} height='12px' />
                </div>
              </Fragment>
            )}
          </SpaceInfo>
        </Header>
        {/**<img
          src={Grid}
          alt=''
          width='100%'
          height='50%'
          style={{
            position: 'absolute',
            bottom: '0',
            zIndex: -1
          }}
        />*/}
      </BrowserView>
      <MobileView>
        <ShowSection />
        <ImagemapContainerMobile>
          <Mobile />
        </ImagemapContainerMobile>
      </MobileView>
    </SpaceSelector>
  )
}

export default Space
