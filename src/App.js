import React, { useRef } from "react";
import "./App.css";
import RootContextProvider from "./contexts/RootContext";
import { Box, Image, Text } from "@chakra-ui/react";
// import Space from './components/Space'
import { Canvas } from "./components/Canvas";
import CryptovoxelsInstance from "./components/integrations/CryptovoxelsInstance";
import FloatingRoomWindow from "./components/FloatingRoomWindow";
import { useOnScreen } from "./utils/hooks";
import { SiteHeader } from "./components/Header";
import "./stars.css";
import StarfieldAnimation from "react-starfield-animation";
import MF2Logo from "./static/assets/img/mf2-logo.png";
import BackgroundImage from "./img/MetaFest_bg.jpg";
import Announce from "./components/announcement";

export const HomeSection = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  return (
    <Box
      as="section"
      id="home"
      d="flex"
      alignContent="center"
      justifyContent="flex-start"
      w="100vw"
    >
      <Box
        ref={ref}
        className="__content"
        maxW="2xl"
        transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
      >
        {/* <Image src={MF2Logo} className="mf-logo" /> */}
        <Text
          as="h1"
          className="gradient-cone"
          lineHeight={1}
          sx={{
            fontWeight: 700,
            mb: 0,
            strong: {
              d: "block",
              fontWeight: 900,
            },
            em: {
              fontStyle: "normal",
            },
            span: {
              fontWeight: 700,
              textDecoration: "line-through",
            },
          }}
        >
          MetaFest<Text as="em">2</Text>
        </Text>
        <Box className="__content__body">
          <Text as="p" fontSize="md" fontWeight={700} mt={0}>
            powered by{" "}
            <Text as="strong" className="gradient">
              MetaGame
            </Text>
          </Text>
          <Text as="p" fontSize="3xl" mt={6} fontWeight={700}>
            A virtual festival/conference/hackathon.
          </Text>
          <Text as="p">
            With the goal of helping you{" "}
            <Text as="span" className="highlight">
              level up
            </Text>{" "}
            &{" "}
            <Text as="span" className="highlight">
              manifest a better future
            </Text>
            .
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export const ScheduleSection = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  return (
    <Box as="section" id="schedule">
      <Box
        ref={ref}
        className="__content"
        transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
      >
        <Text as="h2">Schedule</Text>
        <Box className="__content__body">
          <Text as="h3">Week I</Text>
          <p>The week of gaming & social events</p>
          <p>
            Week II
            <br />
            The week of talks 70+ great talks
          </p>
          <p>
            Week III
            <br />
            The week of 20+ epic workshops
          </p>
          <p style={{ marginTop: "1rem", fontSize: "1.3rem" }}>
            To enter METAFEST, you will have to
            <br />
            <a
              href="https://gitcoin.co/grants/213/metagame"
              target="_blank"
              rel="noopener noreferrer"
            >
              donate to our Gitcoin grant
            </a>{" "}
            or{" "}
            <a
              href="https://giveth.io/project/metagame-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              donate to our Giveth project
            </a>
          </p>
          <p>jk jk just enter</p>
        </Box>
      </Box>
    </Box>
  );
};

export const SpeakersSection = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  return (
    <Box as="section" id="speakers">
      <Box
        ref={ref}
        className="__content"
        transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
      >
        <Text as="h2">Speakers</Text>
        <Box className="__content__body"></Box>
      </Box>
    </Box>
  );
};

export const CVSection = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  return (
    <Box as="section" id="cryptovoxels">
      <Box
        ref={ref}
        className="__content"
        transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
      >
        <Text as="h2">CryptoVoxels</Text>
        <CryptovoxelsInstance />
      </Box>
    </Box>
  );
};

export const ContactSection = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  return (
    <Box as="section" id="contact">
      <Box
        ref={ref}
        className="__content"
        transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
      >
        <Text as="h2">Contact</Text>
        <Box className="__content__body"></Box>
      </Box>
    </Box>
  );
};

function App() {
  return (
    <Box
      className="App"
      sx={{
        ".gradient": {
          background:
            "linear-gradient(90deg, #FF61E6 -29.22%, #7C56FF 107.53%)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        ".gradient-cone": {
          background:
            "conic-gradient(from 92.2deg at 60.45% 74.83%, #8EBBFF 0deg, #DE3FFF 88.12deg, #79F8FB 105deg, #7C56FF 165deg, #FF61E6 251.25deg, #927CFF 286.87deg, #76EBF2 326.25deg, #8EBBFF 360deg)",
          backgroundPosition: "-254%",
          backgroundSize: "133%",
          backgroundClip: "text",
          textFillColor: "transparent",
          WebkitTextFillColor: "transparent",
          transition: "background 0.3s ease",
        },
        ".highlight": {},
      }}
    >
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
        <SiteHeader />
        <Box
          sx={{
            scrollSnapAlign: "start",
            scrollSnapStop: "normal",
            position: "relative",
            zIndex: "1",
          }}
        >
          <Canvas />
          <HomeSection />
          <ScheduleSection />
          <SpeakersSection />
          <CVSection />
          <ContactSection />
          {/* <FloatingRoomWindow /> */}
        </Box>
      </RootContextProvider>
    </Box>
  );
}

export default App;
