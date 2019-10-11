import React, { useState, useEffect } from "react";
// import * as JitsiMeetExternalAPI from "../dist/jitsi";

const domain = "meet.jit.si";
const options = {
  roomName: "livingroom",
  width: 700,
  height: 700,
  parentNode: document.querySelector("#meet")
};

const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI;

function JitsiInstance() {
  useEffect(() => {
    const JitsiInstance = new JitsiMeetExternalAPI(domain, options);
  });

  return null;
}

export default JitsiInstance;
