import React, { useEffect, useContext } from "react";
// import * as JitsiMeetExternalAPI from "../dist/jitsi";

const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI;

const JitsiInstance = ({width, height, space}) => {

  useEffect(() => {
    const domain = "meet.jit.si/interspace-metagame";
    const options = {
      roomName: space,
      width: width,
      height: height,
      parentNode: document.querySelector("#meet")
    };
    const api = new JitsiMeetExternalAPI(domain, options);

    // api.executeCommand("displayName", user);

    return function cleanup() {
      api.dispose();
    };
  });

  return <div id="meet"></div>;
};

export default JitsiInstance;
