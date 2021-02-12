import React, { Fragment, useContext } from 'react'
import HeaderImage from '../img/MetaFestHeader.png'
import styled from 'styled-components'

const StyledHeadline = styled.h1`
  font-size: 4rem;
  color: #f900a9;
  position: relative;
`
const Glow = styled.h1`
  font-size: 4rem;
  color: #f900a9;
  filter: blur(26px);
  opacity: 0.69;
  position: relative;
  top: -7rem;
  border-radius: 20px;
`

const StyledLink = styled.a`
  color: #e340a8;
  text-align: center;
`

const Announce = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <img src={HeaderImage} alt='MetaFest' />
      <div>
        <StyledHeadline>MARCH 7TH - APRIL 4TH</StyledHeadline>
        <Glow>MARCH 7TH - APRIL 4TH</Glow>
      </div>
      <p style={{ color: '#685460' }}>Fill out an application to join:</p>
      <StyledLink href='http://bit.ly/MetaFestMods'>MOD</StyledLink> //{' '}
      <StyledLink href='http://bit.ly/MetaFestSpeakers'>SPEAKER</StyledLink> //{' '}
      <StyledLink href='http://bit.ly/MetaFestMG'>METAFAM</StyledLink>
    </div>
  )
}

export default Announce
