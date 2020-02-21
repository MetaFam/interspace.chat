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

  const CurrentSpace = styled.span`
    color: pink;
  `;

  return (
    <SpaceSelector>
      <span>
        <Headline>Welcome to MetaGame</Headline>
        <SpaceInfo>
          You're in the <CurrentSpace>{currentSpace}</CurrentSpace>!
        </SpaceInfo>
      </span>

      <div className="map-container">
        {/*
        <span className="mapInstructions">
          Click a location to join a conversation.
        </span>
        */}
        <img src="metaspace.png" className="image-map" alt="map" />
        <div
          className="click-zone e"
          onClick={() => setSpace("House of Adoption")}
        >
          <span className="roomName">House of Adoption</span>
        </div>
        <div
          className="click-zone a"
          onClick={() => setSpace("House of Defiance")}
        >
          <span className="roomName">House of Defiance</span>
        </div>
        <div className="click-zone b" onClick={() => setSpace("House of DAOs")}>
          <span className="roomName">House of DAOs</span>
        </div>
        <div className="click-zone c" onClick={() => setSpace("Raid Guild")}>
          <span className="roomName">Raid Guild</span>
        </div>
        <div
          className="click-zone d"
          data-zone="stress-test-arena"
          onClick={() => setSpace("Stress Test Arena")}
        >
          <span className="roomName" style={portalStyle}>
            Stress Test Arena
          </span>
        </div>
      </div>
    </SpaceSelector>
  );
};

export default Space;
