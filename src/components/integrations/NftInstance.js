import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
grid-template-columns: 1fr;
place-items: center;
background-color: black;
max-width: 650px;
height: 80%;
border-radius: 10px;
margin: 1rem;
padding: 1rem;

p {
    padding: 0.5rem;
    margin: 0px;
  }
  a {
    padding: 0px;
  }
`

const ExternalLink = styled.p`
:hover {
  color: #bd96e9;
  text-shadow: rgba(189,150,233,0.9) 0px 0px 16px;
}
`

class Soon extends React.Component {
  render() {
    return (
      <span style={{ color: 'yellow', fontSize: '0.8rem' }}>{" "}check back soon™</span>
    )
  }
}

const NftInstance = () => {
  const openInNewTab = url => {
    let win = window.open(url, '_blank')
    win.focus()
  }
  return (
    <Container>
      <h1>NFTs</h1>
      <p>
        The cat is out of the bag and NFTs are all the rage these days. <br />
        Means we can’t let you leave MetaFest without claiming some 🙃
      </p>
      <p>
        POAP<Soon /><br />
        Claim your proof-of-attendance NFTs here
      </p>
      <ExternalLink className="click-zone"
        onClick={() => openInNewTab('https://www.cryptovoxels.com/play?coords=SE@379E,124S')}>
        Scavenger Hunt<br />
        Come solve a puzzle & claim an achievement NFT
      </ExternalLink>
      <ExternalLink className="click-zone"
        onClick={() => openInNewTab('https://gitcoin.co/grants/213/metagame')}>
        Donate<br />
        Donate to our Gitcoin grant & get an achievement NFT
      </ExternalLink>
      <p>
        Raffle<Soon /><br />
        Buy an NFT to enter raffle & become a Patron of MetaGame
      </p>
      <p>
        Auction<Soon /><br />
        Enter a charity NFT auction and get a 1on1 with anyone from MetaFam
      </p>
    </Container>);
}

export default NftInstance;