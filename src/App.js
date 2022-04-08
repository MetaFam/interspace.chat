import React from "react";
import "./App.css";
import RootContextProvider from "./contexts/RootContext";
import { Box, Text } from "@chakra-ui/react";
// import Space from './components/Space'
import { Canvas } from "./components/Canvas";
import FloatingRoomWindow from "./components/FloatingRoomWindow";

import "./stars.css";
import StarfieldAnimation from "react-starfield-animation";

import BackgroundImage from "./img/MetaFest_bg.jpg";
import Announce from "./components/announcement";

function App() {
  return (
    <Box className="App">
      <Box className="stars" />
      <Box className="twinkling" />
      {/* <StarfieldAnimation
        numParticles={300}
        lineWidth={2.0}
        depth={300}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      /> */}

      <RootContextProvider>
        <Box
          sx={{
            position: "relative",
            zIndex: "1",
          }}
        >
          <Canvas />
          <Box as="section">
            <Box className="__content">
              <Text as="h1" lineHeight={1} sx={{
                fontWeight: 500,
                'strong': {
                  d: 'block',
                  fontWeight: 900
                },
                'em': {
                  fontStyle: 'none'
                }
              }}>
                Welcome to <Text as="strong">MetaFest<Text as="em">2</Text></Text>
              </Text>
              <Box className="__content__body">
                <Text as="p">
                  MetaFest is virtual festival/conference/hackathon powered by
                  MetaGame <br />
                  with the goal of helping you level up & manifest a better
                  future.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box as="section">
            <Box className="__content">
              <Text as="h2">Timetable</Text>
              <Box className="__content__body"></Box>
            </Box>
          </Box>
          <Box as="section">
            <Box className="__content">
              <Text as="h2">Contact</Text>
              <Box className="__content__body"></Box>
            </Box>
          </Box>
          <FloatingRoomWindow />
        </Box>
      </RootContextProvider>
    </Box>
  );
}

export default App;
