import React, { Fragment, useEffect, useContext, useState, useRef } from "react";
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

function FloatingRoomWindow() {
  const { currentFloatingSpaces, setFloatingSpaces } = useContext(FloatingSpaceContext);
  const [floatingRoomWindows, setFloatingRoomWindow] = useState(currentFloatingSpaces);
  const [focusedWindow, setFocusedWindow] = useState(null);
  const windowFrame = useRef();

  useEffect(() => {
    let useFloatingRoomWindow = getFloatingRoomWindow(currentFloatingSpaces);
    setFloatingRoomWindow(useFloatingRoomWindow);
  }, [currentFloatingSpaces])

  useEffect(() => {
    // Sets the focused window to the incremented
    if(windowFrame.current) {
      let newWindow = ReactDOM.findDOMNode(windowFrame.current).parentNode.querySelector(`[data-window="window-${focusedWindow}"]`);
      if(newWindow){
        ReactDOM.findDOMNode(windowFrame.current).parentNode.querySelector(`[data-window="window-${focusedWindow}"]`).style.zIndex = zIndexIterator++;
      }
    }
  }, [focusedWindow])

  const getFloatingRoomWindow = (currentFloatingSpaces) => {
    let newFloatingRooms = [];
    if(currentFloatingSpaces){
      for(let currentSpace of currentFloatingSpaces) {
        if(currentSpace === "loft.radio") {
          newFloatingRooms.push({
            key: currentSpace,
            element: <LoftRadioInstance width={innerWidth} height={height}></LoftRadioInstance>
          });
        } else if(RoomNames.indexOf(currentSpace) > -1) {
          newFloatingRooms.push({
            key: currentSpace,
            element: <RoomInstance width={innerWidth} space={currentSpace} height={height}/>
          });
        } else if(currentSpace === "rTrees"){
          newFloatingRooms.push({
            key: currentSpace,
            element: <RTreesInstance backgroundColor={"white"} width={innerWidth} space={currentSpace} height={height}/>
          });
        }else if(currentSpace === null) {
          newFloatingRooms.push(null);
        }
        if(currentSpace !== null){
          setFocusedWindow(currentSpace);
        }
      }
    }
    return newFloatingRooms.length > 0 ? newFloatingRooms : null;
  }

  const closeFloatingRoomWindow = (windowKey) => {
    if(currentFloatingSpaces.indexOf(windowKey) > -1) {
      let newFloatingSpaces = [...currentFloatingSpaces];
      // Replaces the floating window with a null record, to prevent the existing windows from shifting position
      newFloatingSpaces.splice(newFloatingSpaces.indexOf(windowKey), 1, null);
      setFloatingSpaces(newFloatingSpaces);
      setFocusedWindow(null);
    }
  }

  let setWindowFocus = (event) => {
    ReactDOM.findDOMNode(event.target).parentNode.style.zIndex = zIndexIterator++;
  }

  return (
    <Fragment>
      {floatingRoomWindows && floatingRoomWindows.length >= 1 && floatingRoomWindows.map(floatingWindow => 
        (floatingWindow && floatingWindow.key && floatingWindow.element) ? 
          <FloatingRoomWindowContainer key={floatingWindow.key} ref={windowFrame} onMouseDown={(event) => setWindowFocus(event)} data-window={`window-${floatingWindow.key}`}>
            <Draggable>
                <DraggableController>
                    <FloatingRoomWindowCloser onClick={() => closeFloatingRoomWindow(floatingWindow.key)}/>
                    {floatingWindow.element}
                </DraggableController>
            </Draggable>
          </FloatingRoomWindowContainer>
        : null
      )}
    </Fragment>
  );
}

export default FloatingRoomWindow;
