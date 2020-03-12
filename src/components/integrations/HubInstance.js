import React from "react";

function HubInstance({width, height, roomData}) {
  return (
    <iframe
      width={width}
      height={height}
      frameBorder="0"
      src={roomData.embedUrl}
      allow="microphone; camera; vr; speaker;"
    />
  )
}

export default HubInstance;
