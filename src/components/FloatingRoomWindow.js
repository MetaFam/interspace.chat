import React, { Fragment, useEffect, useContext, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Draggable from "react-draggable";

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";
import LoftRadioInstance from "./LoftRadioInstance";
import JitsiInstance from "./JitsiInstance";
import { JitsiInstances } from "../utils/constants";

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


let DraggableController = styled.div`
    padding: 15px;
    padding-top: 0px;
    background-color: #ffffff36;
    cursor: all-scroll;
    pointer-events: all;
    &:active iframe {
        pointer-events: none;
    }
`

function FloatingRoomWindow() {
  const { currentFloatingSpaces, setFloatingSpaces } = useContext(FloatingSpaceContext);
  const [floatingRoomWindows, setFloatingRoomWindow] = useState(currentFloatingSpaces);

  useEffect(() => {
    let useFloatingRoomWindow = getFloatingRoomWindow(currentFloatingSpaces);
    setFloatingRoomWindow(useFloatingRoomWindow);
  }, [currentFloatingSpaces])

  const getFloatingRoomWindow = (currentFloatingSpaces) => {
    let newFloatingRooms = [];
    if(currentFloatingSpaces){
      for(let currentSpace of currentFloatingSpaces) {
        if(currentSpace === "loft.radio") {
          newFloatingRooms.push({
            key: currentSpace,
            element: <LoftRadioInstance width={innerWidth} height={height}></LoftRadioInstance>
          });
        } else if(JitsiInstances.indexOf(currentSpace) > -1) {
          newFloatingRooms.push({
            key: currentSpace,
            element: <JitsiInstance width={innerWidth} space={currentSpace} height={height}/>
          });
        } else if(currentSpace === null) {
          newFloatingRooms.push(null);
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
    }
  }

  let setWindowFocus = (event) => {
    ReactDOM.findDOMNode(event.target).parentNode.style.zIndex = zIndexIterator++;
  }

  return (
    <Fragment>
      {floatingRoomWindows && floatingRoomWindows.length >= 1 && floatingRoomWindows.map(floatingWindow => 
        (floatingWindow && floatingWindow.key && floatingWindow.element) ? 
          <div onMouseDown={(event) => setWindowFocus(event)}>
            <FloatingRoomWindowContainer>
              <Draggable>
                  <DraggableController key={floatingWindow.key}>
                      <FloatingRoomWindowCloser onClick={() => closeFloatingRoomWindow(floatingWindow.key)}/>
                      {floatingWindow.element}
                  </DraggableController>
              </Draggable>
            </FloatingRoomWindowContainer> 
          </div>
        : null
      )}
    </Fragment>
  );
}

export default FloatingRoomWindow;