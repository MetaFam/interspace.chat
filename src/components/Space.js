import ImageMapper from "react-image-mapper";
import React, { useState } from "react";

function Space() {
  // Declare a new state variable, which we'll call "count"
  const [space, setSpace] = useState("graveyard");

  return (
    <div>
      <p>You are in the {space} man!</p>
      <button onClick={() => setSpace("livingroom")}>Go to livingroom</button>
    </div>
  );
}

export default Space;
