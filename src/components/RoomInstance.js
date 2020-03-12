import React, { useState } from "react";
import styled from "styled-components";

import { RoomURLs } from "../utils/constants";
import JitsiInstance from './integrations/JitsiInstance';
import YoutubeInstance from './integrations/YoutubeInstance';
import HubInstance from './integrations/HubInstance';

const SERVICE_NAMES = {
  jitsi: 'Jitsi',
  mozillaHub: 'Hub',
  youtube: 'Youtube',
};

const SERVICE_CONTAINERS = {
  jitsi: JitsiInstance,
  mozillaHub: HubInstance,
  youtube: YoutubeInstance,
};


const ServiceButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: black;
  border-bottom: 1px solid white;
`;

const ServiceButton = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;  
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #616161;
  }
  &.active {
    background-color: #423838;
  }
`;

const RoomInstance = ({width, height, space}) => {
  const roomURLs = RoomURLs[space];
  const availableServiceNames = Object.keys(roomURLs);

  const [serviceName, setServiceName] = useState(availableServiceNames[0]);

  if(availableServiceNames.length === 0) return <div>Unknown room</div>;

  const roomData = roomURLs[serviceName];
  const RoomServiceContainer = SERVICE_CONTAINERS[serviceName];

  return (
    <div>
      <ServiceButtonContainer>
        {
          availableServiceNames.map(name =>
            <ServiceButton
              key={name}
              onClick={() => setServiceName(name)}
              className={serviceName === name && 'active'}
            >
              <span>{SERVICE_NAMES[name]}</span>
            </ServiceButton>
          )
        }
      </ServiceButtonContainer>

      <RoomServiceContainer width={width} height={height} roomData={roomData} />
    </div>
  );
};

export default RoomInstance;
