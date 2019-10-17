import React, { useState, useEffect, useContext } from "react";
import { SpaceContext } from "../contexts/SpaceContext";
import { UserContext } from "../contexts/UserContext";
import styled from "styled-components";
// import * as JitsiMeetExternalAPI from "../dist/jitsi";

const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI;

const JitsiContainer = styled.div`
  width: 100vw;
  height: ;
`;

const JitsiInstance = () => {
  const { currentSpace } = useContext(SpaceContext);
  const { user } = useContext(UserContext);

  const height = window.innerHeight - 200;
  const width = window.innerWidth;

  useEffect(() => {
    const domain = "meet.jit.si";
    const options = {
      roomName: currentSpace,
      width: width,
      height: height,
      parentNode: document.querySelector("#meet")
    };
    const api = new JitsiMeetExternalAPI(domain, options);

    api.executeCommand("displayName", user);

    return function cleanup() {
      api.dispose();
    };
  });

  return <JitsiContainer id="meet"></JitsiContainer>;
};

export default JitsiInstance;
