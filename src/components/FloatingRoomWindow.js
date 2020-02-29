import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";
import LoftRadioInstance from "./LoftRadioInstance";

const height = 600;
const width = 850;
const padding = 15;
const innerWidth = (width - (padding * 2));

const FloatingRoomWindowContainer = styled.div`
  width: ${width}px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
    &:active iframe {
        pointer-events: none;
    }
`

function FloatingRoomWindow() {
  const { currentFloatingSpace, setFloatingSpace } = useContext(FloatingSpaceContext);
  const [floatingRoomWindow, setFloatingRoomWindow] = useState(null);

  useEffect(() => {
    let useFloatingRoomWindow = getFloatingRoomWindow(currentFloatingSpace);
    setFloatingRoomWindow(useFloatingRoomWindow);
  }, [currentFloatingSpace])

  const getFloatingRoomWindow = (currentFloatingSpace) => {
    if(currentFloatingSpace === "loft.radio") {
        return (
          <LoftRadioInstance width={innerWidth} height={height}></LoftRadioInstance>
        )
    }
    return null;
  }

  const closeFloatingRoomWindow = () => {
    setFloatingSpace(null)
  }

  return (
    <FloatingRoomWindowContainer>
        {floatingRoomWindow && 
            <Draggable>
                <DraggableController className="dot-grid-background">
                    <FloatingRoomWindowCloser onClick={() => closeFloatingRoomWindow()}/>
                    {floatingRoomWindow}
                </DraggableController>
            </Draggable>
        }
    </FloatingRoomWindowContainer>
  );
}

export default FloatingRoomWindow;