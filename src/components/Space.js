import React, { Fragment, useContext, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { BrowserView, MobileView } from 'react-device-detect'

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext'

import SvgImagemap from './MetaFest'
import Mobile from './MetaFestMobile'

import triangle from '../img/triangle.svg'
import Grid from '../img/metafest-grid.gif'
import HeaderImage from '../img/metafest-header.png'
import Date from '../img/metafest-date.png'
import Future from '../img/metafest-manifest-the-future.png'

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
    background-color: ${props => props.theme.background};
    // opacity: 0.7;
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-self: center;
    justify-content: end;
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
          {isHidden ? null : <Element />}
          <CloseButton onClick={onClick}>
            {isHidden ? '' : 'Close this message'}
          </CloseButton>
        </ButtonContainer>
      )}
    </div>
  )
}
const Element = () => (
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
  const { currentFloatingSpaces } = useContext(FloatingSpaceContext)

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
        <img
          src={Date}
          alt='March 7th - April 4th'
          width='auto'
          height='60px'
          style={{ position: 'absolute', bottom: '10px', left: '1rem' }}
        />
        <img
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
            right: '0px'
          }}
        />
        <img
          src={Future}
          alt='manifest'
          width='auto'
          height='100px'
          style={{ position: 'absolute', bottom: '10px', right: '1rem' }}
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
