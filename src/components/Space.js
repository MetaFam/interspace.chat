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
    font-size: 1.3rem;
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

  const roomName = styled.p`
    font-size: 1.3rem;
  `;

  const CurrentSpace = styled.span`
    color: pink;
  `;

  return (
    <SpaceSelector>
      <span>
        <Headline>
          Welcome to interspace.
        </Headline>
        <SpaceInfo>
          You're in the <CurrentSpace>{currentSpace}</CurrentSpace>!
        </SpaceInfo>
      </span>

      <div className="map-container">
        <span className="mapInstructions">Click a location below to join a conversation.</span>
        <img src="map-liminal2.png" className="image-map" alt="map" onClick={() => setSpace("yard")}/>
        <span className="defaultRoomName">Yard</span>
        <div
          className="click-zone a"
          data-zone="Living Room"
          onClick={() => setSpace("kitchen")}
        >
          <span className="roomName">Kitchen</span>
        </div>
        <div
          className="click-zone b"
          data-zone="Dining Room"
          onClick={() => setSpace("living room")}
        >
          <span className="roomName">Living Room</span>
        </div>
        <div
          className="click-zone c"
          data-zone="Sunset Patio"
          onClick={() => setSpace("patio")}
        >
          <span className="roomName">Patio</span>
        </div>
        <div
          className="click-zone d"
          data-zone="Portal Zone"
          onClick={() => setSpace("poOOOooOortal")}
        >
          <span className="roomName" style={portalStyle}>
          Portal
          </span>
        </div>
        <img
          className="click-zone pavle"
          id="pavle"
          src="pavle.png"
          data-zone="Pavle"
          alt="avatar"
        />
      </div>

    </SpaceSelector>
  );
};

export default Space;
