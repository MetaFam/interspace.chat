import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";

import { SpaceContext } from "../contexts/SpaceContext";
import JitsiInstance from "../components/JitsiInstance";
import LoftRadioInstance from "./LoftRadioInstance";

const JitsiInstances = [
  "House of Defiance",
  "House of DAOs",
  "Raid Guild",
  "Stress Test Arena",
  "House of Adoption",
];

const height = 600;
const width = 800;

const RoomWindowContainer = styled.div`
  width: auto;
  float: right;
`;

function RoomWindow() {
  const { currentSpace } = useContext(SpaceContext);
  const [roomWindow, setRoomWindow] = useState(null);

  useEffect(() => {
    let useRoomWindow = getRoomWindow(currentSpace);
    setRoomWindow(useRoomWindow);
  }, [currentSpace])

  const getRoomWindow = (currentSpace) => {
    if(JitsiInstances.indexOf(currentSpace) > -1) {
        return (
            <JitsiInstance width={width} height={height}/>
        )
    } else if(currentSpace === "loft.radio") {
        return (
            <LoftRadioInstance width={width} height={height}/>
        )
    }
    return null;
  }

  return (
    <RoomWindowContainer>
        {roomWindow}
    </RoomWindowContainer>
  );
}

export default RoomWindow;