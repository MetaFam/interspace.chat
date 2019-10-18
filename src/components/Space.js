import ImageMapper from "react-image-mapper";
import React, { useContext } from "react";
import { SpaceContext } from "../contexts/SpaceContext";
import styled from "styled-components";

const Space = () => {
  const { currentSpace, setSpace } = useContext(SpaceContext);

  const portalStyle = {
    marginTop: "10px"
  };

  const Headline = styled.h6`
    font-weight: 100;
    font-size: 1rem;
    text-align: left;
    padding: 1rem;
  `;

  const SpaceSelector = styled.nav`
    padding-bottom: 1rem;
  `;

  const SpaceInfo = styled.p`
    font-size: 2rem;
  `;

  const Intro = styled.p`
    font-size: 1.3rem;
  `;

  const CurrentSpace = styled.span`
    color: pink;
  `;

  const SpaceButton = styled.button`
    color: greenyellow;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 10px;
    border-color: greenyellow;
    :hover {
      color: white;
      border-color: white;
    }
  `;

  return (
    <SpaceSelector>
      <span>
        <Headline>Welcome to interspace.chat</Headline>
        <Intro>
          Click a room to join the conversation.
        </Intro>
        <SpaceInfo>
          You're in the <CurrentSpace>{currentSpace}</CurrentSpace>, man!
        </SpaceInfo>
        <SpaceButton onClick={() => setSpace("livingroom")}>
          Go to livingroom
        </SpaceButton>
        <SpaceButton onClick={() => setSpace("kitchen")}>
          Go to kitchen
        </SpaceButton>
        <SpaceButton onClick={() => setSpace("pagoda")}>
          Go to pagoda
        </SpaceButton>
      </span>
      <div className="map-container">
      <img src="map0.png" className="image-map" />
      </div>
      <div className="map-container">
        <div className="map-background"></div>
        <div
          className="click-zone a"
          data-zone="Living Room"
          onClick={() => setSpace("living room")}
        >
          <span className="roomName">Living Room</span>
        </div>
        <div
          className="click-zone b"
          data-zone="Dining Room"
          onClick={() => setSpace("lava")}
        >
          <span className="roomName">Lava</span>
        </div>
        <div
          className="click-zone c"
          data-zone="Sunset Patio"
          onClick={() => setSpace("fairy garden")}
        >
          <span className="roomName">Fairy garden</span>
        </div>
        <div
          className="click-zone d"
          data-zone="Portal Zone"
          onClick={() => setSpace("poOOOooOortal")}
        >
          <span className="roomName" style={portalStyle}>
            The Portal
          </span>
        </div>
        <img
          className="click-zone pavle"
          id="pavle"
          src="pavle.png"
          data-zone="Pavle"
        />
      </div>
    </SpaceSelector>
  );
};

export default Space;
