import React, { useState, useEffect, useContext } from "react";
import { SpaceContext } from "../contexts/SpaceContext";
// import * as JitsiMeetExternalAPI from "../dist/jitsi";

const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI;

const JitsiInstance = () => {
  const { currentSpace } = useContext(SpaceContext);
  function cleanupInstance() {
    const instance = document.getElementById("meet");
    instance.firstChild.remove();
  }

  useEffect(() => {
    const domain = "meet.jit.si";
    const options = {
      roomName: currentSpace,
      width: 700,
      height: 700,
      parentNode: document.querySelector("#meet")
    };
    const api = new JitsiMeetExternalAPI(domain, options);
    api.executeCommand("displayName", "New Nickname");

    return () => {
      cleanupInstance();
    };
  });

  return <div id="meet"></div>;
};

export default JitsiInstance;
