import React, { Fragment, useContext, useState } from "react";
import styled from "styled-components";

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";
import { RoomNames } from "../utils/constants";
import InterconLogo from "../img/intercon_logo.png";
import pretopiaLogo from "../img/Pretopia_wartermark.png";

const portalStyle = {
  marginTop: "10px"
};

const Headline = styled.h6`
  font-weight: 100;
  font-size: 1.3rem;
  padding: 1rem;
`;

const SpaceSelector = styled.nav`
  padding-bottom: 1rem;
`;

const SpaceInfo = styled.p`
  font-size: 2rem;
`;

const CurrentSpace = styled.span`
  color: pink;
`;

const Disclaimer = styled.div`
  position: relative;
  top: 800px;
  background: unset;
`;

const Watermark = styled.div`
  position: relative;
  top: 770px;
  background: unset;
  width: 260px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const SpaceWindowInfo = styled.p`
  position: relative;
  top: 790px;
  font-size: 2rem;
`;

const Space = () => {
  const { currentFloatingSpaces, setFloatingSpaces } = useContext(
    FloatingSpaceContext
  );
  const [modalOpen, setModalOpen] = useState(true);
  const launchFloatingSpace = floatingSpace => {
    let resultantSpaces = null;
    if (currentFloatingSpaces && currentFloatingSpaces.length > 0) {
      if (currentFloatingSpaces.indexOf(floatingSpace) > -1) {
        resultantSpaces = currentFloatingSpaces;
      } else if (RoomNames.indexOf(floatingSpace) > -1) {
        let replaceIndex;
        for (let instance of RoomNames) {
          if (currentFloatingSpaces.indexOf(instance) > -1) {
            replaceIndex = currentFloatingSpaces.indexOf(instance);
          }
        }
        if (replaceIndex > -1) {
          let spliceJitsiDuplicates = [...currentFloatingSpaces]; // Prepare for splice
          spliceJitsiDuplicates.splice(replaceIndex, 1, floatingSpace);
          resultantSpaces = [...spliceJitsiDuplicates];
        } else {
          resultantSpaces = [...currentFloatingSpaces, floatingSpace];
        }
      } else {
        resultantSpaces = [...currentFloatingSpaces, floatingSpace];
      }
    } else {
      resultantSpaces = [floatingSpace];
    }
    setFloatingSpaces(resultantSpaces);
  };

  const displayJoinedSpaces = floatingSpaceWindows => {
    let windowsWithoutPlaceholders = floatingSpaceWindows.filter(item => item);
    if (windowsWithoutPlaceholders.length > 0) {
      if (windowsWithoutPlaceholders.length > 2) {
        let nameCount = windowsWithoutPlaceholders.length;
        return (
          windowsWithoutPlaceholders.slice(0, nameCount - 2).join(", ") +
          ", " +
          windowsWithoutPlaceholders.slice(nameCount - 2, nameCount).join(" & ")
        );
      } else {
        return windowsWithoutPlaceholders.join(" & ");
      }
    } else {
      return null;
    }
  };

  return (
    <SpaceSelector>
      {modalOpen && (
        <div id="myModal" class="modal">
          <div class="modal-content">
            <img src={InterconLogo} alt="logo" className="modal_logo"></img>
            <p className="modal_text">
              InterCon is an experimental virtual conference built for 20-30
              people. As such, it is not ready to take all this traffic and will
              probably blow up.
            </p>
            <p className="modal_text">
              - You may try to join the call, but it's probably full and you'll
              get kicked.
            </p>
            <p className="modal_text">
              - So try joining Hubs, but it will probably get laggy.
            </p>
            <p className="modal_text">- So just watch it on YouTube.</p>
            <p className="modal_text">
              If you're a speaker and don't know what stage you are on
              <br /> check the{" "}
              <a
                className="modal-link"
                href="https://docs.google.com/spreadsheets/d/1BaGZkr2_6GXBnHn-ZLwoJYwH216rxKhLTQxgvoeoXUo/edit?fbclid=IwAR1ydFdNoSyqNzzbj9tPVGiml--DlGx0D7lfD3bWtMpYf7u8IJDk5cJsYxA#gid=116941214"
              >
                timetable
              </a>{" "}
            </p>
            <button onClick={() => setModalOpen(false)} className="modal-close">
              I understand
            </button>
          </div>
        </div>
      )}
      <span>
        <Headline>
          Welcome to{" "}
          <a
            href="https://metagame.wtf"
            target="_blank"
          >
            MetaGame
          </a><i style={{fontSize:'0.6em'}}> v1.0</i>
        </Headline>
        <span>
          Come to the chat on{" "}
          <a href="https://t.me/intercon13" target="_blank">
            Telegram
          </a>
        </span>
        <SpaceInfo>
          {displayJoinedSpaces(currentFloatingSpaces) ? (
            <Fragment>
              You're in the{" "}
              <CurrentSpace>
                {displayJoinedSpaces(currentFloatingSpaces)}
              </CurrentSpace>
              !
            </Fragment>
          ) : (
            "Click a room on the map to join!"
          )}
        </SpaceInfo>
      </span>

      <div className="map-container">
        {/*
        <span className="mapInstructions">
          Click a location to join a conversation.
        </span>
        */}
        <img src="metaspace.png" className="image-map" alt="map" />
        <div
          className="click-zone a"
          onClick={() => launchFloatingSpace("House of Defiance")}
        >
          <span className="roomName">House of Defiance</span>
          <div className="click-zone-highlight a"></div>
        </div>
        <div
          className="click-zone b"
          onClick={() => launchFloatingSpace("House of DAOs")}
        >
          <span className="roomName">House of DAOs</span>
          <div className="click-zone-highlight b"></div>
        </div>
        <div
          className="click-zone c"
          onClick={() => launchFloatingSpace("Raid Guild")}
        >
          <span className="roomName">Raid Guild</span>
          <div className="click-zone-highlight c"></div>
        </div>
        <div
          className="click-zone d"
          data-zone="stress-test-arena"
          onClick={() => launchFloatingSpace("Stress Test Arena")}
        >
          <span className="roomName" style={portalStyle}>
            Stress Test Arena
          </span>
          <div className="click-zone-highlight d"></div>
        </div>
        <div
          className="click-zone e"
          onClick={() => launchFloatingSpace("House of Adoption")}
        >
          <span className="roomName">House of Adoption</span>
          <div className="click-zone-highlight e"></div>
        </div>
        <div
          className="click-zone f"
          onClick={() => launchFloatingSpace("loft.radio")}
        >
          <span className="roomName">loft.radio</span>
          <div className="click-zone-highlight f"></div>
        </div>
        <div
          className="click-zone g"
          onClick={() => launchFloatingSpace("rTrees")}
        >
          <span className="roomName">rTrees</span>
          <div className="click-zone-highlight g"></div>
        </div>
      </div>
      <Watermark>
        <span>Sponsored by</span>
        <a href="https://pretopia.fm/" target="_blank">
          <img src={pretopiaLogo} width="100%" />
        </a>
      </Watermark>
      <Disclaimer>
        Feel free to make improvements to the map, download the .psd file{" "}
        <a href="https://www.dropbox.com/s/cocwaannzy8lqty/Interspace%20v0.2.psd?dl=0">
          here
        </a>{" "}
        and share with us <a href="https://discord.gg/cZjqQmE">there</a>
      </Disclaimer>
      <SpaceWindowInfo>
        {displayJoinedSpaces(currentFloatingSpaces)
          ? "Position your window(s) down below"
          : null}
      </SpaceWindowInfo>
    </SpaceSelector>
  );
};

export default Space;
