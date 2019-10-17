import ImageMapper from "react-image-mapper";
import React, { useContext } from "react";
import { SpaceContext } from "../contexts/SpaceContext";

const Space = () => {
  const { currentSpace, setSpace } = useContext(SpaceContext);

  return (
    <div>
      <p>You are in the {currentSpace} man!</p>
      <button onClick={() => setSpace("livingroom")}>Go to livingroom</button>
      <button onClick={() => setSpace("kitchen")}>Go to kitchen</button>
      <button onClick={() => setSpace("pagoda")}>Go to pagoda</button>
    </div>
  );
};

export default Space;
