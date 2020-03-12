import React from "react";

function HubInstance({width, height, roomData}) {
  return (
    <iframe
      title="Mozilla hub conference room"
      width={width}
      height={height}
      frameBorder="0"
      src={roomData.embedUrl}
      allow="microphone; camera; vr; speaker;"
    />
  )
}

export default HubInstance;
