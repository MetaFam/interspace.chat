import React, { useEffect } from "react";
// import * as JitsiMeetExternalAPI from "../dist/jitsi";

const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI;

const JitsiInstance = ({width, height, roomData}) => {

  useEffect(() => {
    const options = {
      roomName: roomData.roomName,
      width: width,
      height: height,
      parentNode: document.querySelector("#meet")
    };
    const api = new JitsiMeetExternalAPI(roomData.domain, options);

    // api.executeCommand("displayName", user);

    return function cleanup() {
      api.dispose();
    };
  }, [roomData, width, height]);

  return <div id="meet"></div>;
};

export default JitsiInstance;
