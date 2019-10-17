import ImageMapper from "react-image-mapper";
import React, { useContext } from "react";
import { SpaceContext } from "../contexts/SpaceContext";
import styled from "styled-components";

const Space = () => {
  const { currentSpace, setSpace } = useContext(SpaceContext);

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

  const CurrentSpace = styled.span`
    color: pink;
  `;

  return (
    <SpaceSelector>
      <span>
        <Headline>Welcome to interspace.chat</Headline>
        <SpaceInfo>
          You are in the <CurrentSpace>{currentSpace}</CurrentSpace> man!
        </SpaceInfo>
        <button onClick={() => setSpace("livingroom")}>Go to livingroom</button>
        <button onClick={() => setSpace("kitchen")}>Go to kitchen</button>
        <button onClick={() => setSpace("pagoda")}>Go to pagoda</button>
      </span>
    </SpaceSelector>
  );
};

export default Space;
