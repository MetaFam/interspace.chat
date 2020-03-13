import React from "react";

function YoutubeInstance({width, height, roomData}) {
  return (
    <iframe
      title="Youtube conference room"
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${roomData.videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default YoutubeInstance;
