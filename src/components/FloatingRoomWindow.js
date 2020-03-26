import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Draggable from "react-draggable";

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";
import LoftRadioInstance from "./integrations/LoftRadioInstance";
import RTreesInstance from "./integrations/RTreesInstance";
import RoomInstance from "./RoomInstance";
import { RoomNames } from "../utils/constants";

const height = 600;
const width = 850;
const padding = 15;
const innerWidth = (width - (padding * 2));
let zIndexIterator = 1000;

const FloatingRoomWindowContainer = styled.div`
  width: ${width}px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const FloatingRoomWindowCloser = styled.div`
    width: 18px;
    height 30px;
    opacity: 0.7;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
    &::before {
        content: '×'; // here is your X(cross) sign.
        color: #fff;
        font-family: Arial, sans-serif;
        font-weight: bold;
        font-size: 30px;
    }
`;


const DraggableController = styled.div`
    padding: 15px;
    padding-top: 0px;
    background-color: #3e3d3deb;
    border-radius: 10;
    cursor: all-scroll;
    pointer-events: all;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    &:active iframe {
        pointer-events: none;
    }
`

function getFloatingRoomWindow(windowKey) {
  if(windowKey === "loft.radio") {
    return <LoftRadioInstance width={innerWidth} height={height}></LoftRadioInstance>;
  } else if(RoomNames.indexOf(windowKey) > -1) {
    return <RoomInstance width={innerWidth} space={windowKey} height={height}/>;
  } else if(windowKey === "rTrees"){
    return <RTreesInstance backgroundColor={"white"} width={innerWidth} space={windowKey} height={height}/>;
  } else if(windowKey === null) {
    return null;
  }
}

function FloatingRoomWindow() {
  const { currentFloatingSpaces, closeFloatingSpace } = useContext(FloatingSpaceContext);

  let setWindowFocus = (event) => {
    ReactDOM.findDOMNode(event.target).parentNode.style.zIndex = zIndexIterator++;
  }

  return (
    currentFloatingSpaces.map(windowKey => (
      <FloatingRoomWindowContainer key={windowKey} onMouseDown={(event) => setWindowFocus(event)} data-window={`window-${windowKey}`}>
        <Draggable>
          <DraggableController>
            <FloatingRoomWindowCloser onClick={() => closeFloatingSpace(windowKey)}/>
            {getFloatingRoomWindow(windowKey)}
          </DraggableController>
        </Draggable>
      </FloatingRoomWindowContainer>
    ))
  );
}

export default FloatingRoomWindow;
