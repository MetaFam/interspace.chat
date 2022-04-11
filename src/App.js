import React, { Suspense, useEffect, useRef, useState } from "react";
import "./App.css";
import RootContextProvider from "./contexts/RootContext";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
// import Space from './components/Space'
import { Canvas } from "./components/Canvas";
import CryptovoxelsInstance from "./components/integrations/CryptovoxelsInstance";
// import CalendarInstance from "./components/integrations/CalendarInstance";
import ChatInstance from "./components/integrations/ChatInstance";
import { useOnScreen } from "./utils/hooks";
import { SiteHeader } from "./components/Header";
import { SiteFooter } from "./components/Footer";
import { HeadComponent } from "./components/HeadComponent";
import BabyOctoGif from "./static/assets/img/baby_octo_alpha.gif";
import MindBlownImg from "./static/assets/img/mindblown.gif";

import SocialImg from "./static/assets/img/social.png";

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
        position="relative"
        className="__content"
        maxW="2xl"
        transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
        pointerEvents="none"
        sx={{
          '.fest-dates': {
            d: 'block',
            width: '100%',
            color: '#FF61E6',
            fontSize: '0.7vmax',
            fontWeight: 700,
            textAlign: 'right',
            transform: 'translateY(15px)',
            zIndex: 2001,
          },
        }}
      >
        <Box
          d="inline-flex"
          flexFlow="column-reverse wrap"
          alignItems="flex-start"
          width="auto"
        >
        <Text
          as="h1"
          className="gradient-cone"
          lineHeight={1}
          sx={{
            position: 'relative',
            fontWeight: 700,
            mb: 0,
            strong: {
              d: "block",
              fontWeight: 700,
            },
            em: {
              fontStyle: "normal",
            },
          }}
        >
          MetaFest2
        </Text>
        <span className="fest-dates">9 - 23rd JUNE</span>

        </Box>
        <Box className="__content__body">
          <Text as="p" fontSize="1vmax" fontWeight={300} mt={0}>
            powered by{" "}
            <Text as="strong" className="gradient">
              MetaGame
            </Text>
          </Text>
          <Text as="p" fontSize="1.5vmax" mt={6} fontWeight={500}>
            A virtual festival/conference/hackathon.
          </Text>
          <Text as="p">
            The goal? To help you{" "}
            <Text as="span" className="gradient">
              level up
            </Text>{" "}
            &{" "}
            <Text as="span" className="gradient">
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
        w="2xl"
        transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
      >
        <Text as="h2">Schedule</Text>
        {/* <CalendarInstance /> */}
        <Box className="__content__body">
          <Text>
            Our{" "}
            <Text as="span" className="gradient">
              community members
            </Text>{" "}
            are busy rn, booking guests &amp; organising workshops. Watch this
            space...it's gonna blow your mind!{" "}
            <Image
              src={MindBlownImg}
              boxSize="20px"
              objectFit="cover"
              d="inline-block"
            />
          </Text>
          <Flex alignContent="flex-start" flexFlow="column wrap" mt={5}>
            <Box>
              <Text as="h3" className="gradient2">
                <span>Week I</span>
              </Text>
              <Text>The week of gaming & social events</Text>
              <Text>
                Expect live music from Billy Idol and other artists streaming on
                stage in the Metaverse, Discord & YouTube. A CryptoVoxel
                treasure hunt. Gatherings in NEOS. NFT giveaways & POAPs and
                moar!
              </Text>
            </Box>
            <Box>
              <Text as="h3" className="gradient2">
                <span>Week II</span>
              </Text>
              <Text as="p">The week of talks 70+ great talks</Text>
              <Text>
                If you didn't miss out last year, I can feel your{" "}
                <span className="gradient">FOMO</span> from here!!{" "}
              </Text>
            </Box>
            <Box>
              <Text as="h3" className="gradient2">
                <span>Week III</span>
              </Text>
              <Text as="p">The week of 20+ epic workshops</Text>
            </Box>
            <Box mt={5}>
              <Text as="p">
                To enter METAFEST, you will have to{" "}
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
              </Text>
              <Text as="p">jk jk just enter!</Text>
            </Box>
          </Flex>
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
        width="100%"
      >
        <Text as="h2">Speakers</Text>
        <Box className="__content__body">
          <Text>
            Novas tentacles, have we got some fantastic guests lined up!!{" "}
            <span role="img" aria-label="Screaming with excitement">
              😱
            </span>
          </Text>
          <Flex alignItems="center" justiftyContent="space-between" mt={5}>
            <Box flex="0 0 32%" w="32%">
              <Text as="h3" className="gradient2">
                Meta Day
              </Text>
              <UnorderedList
                listStyleType="none"
                ml={0}
                sx={{
                  li: {
                    ml: 0,
                  },
                }}
              >
                <ListItem>
                  <Text as="h4">Speaker 1</Text>
                  <Text>description</Text>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box flex="0 0 32%" w="32%">
              <Text as="h3" className="gradient2">
                ReFi Day
              </Text>
            </Box>
            <Box flex="0 0 32%" w="32%">
              <Text as="h3" className="gradient2">
                DAO Day
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export const WorkshopsSection = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  return (
    <Box as="section" id="workshops">
      <Box
        ref={ref}
        className="__content"
        maxW="2xl"
        transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
      >
        <Text as="h2">Workshops</Text>
        <Box className="__content__body">
          <p>Welcome to a week of pretty sweet workshops...</p>
          <Box mt={5}>
            <Text as="h3" className="gradient2">
              When and What?
            </Text>
            <Text>
              Exact workshops and their dates & times tbc. Watch this space!
            </Text>
            <Text>
              Please check the <Link href="#schedule">Schedule</Link> for the
              latest info.
            </Text>
            <Text as="h3" className="gradient2">
              Where?
            </Text>
            <Text>
              All workshops happen in Metagame Discord{" "}
              <Link href="#chat">#metafest-voice</Link>
              <sup>*</sup>
            </Text>
            <Text>
              <sup>*</sup>no reservation required.
            </Text>

            <Text as="h3" className="gradient2">
              Open Quests!
            </Text>
            <Text>Get involved in the event!</Text>
            <Text>
              Watch this space for active quests and ways to help out with
              MetaFest2.
              {/* We're curently looking for{" "}
            <strong className="gradient">community members</strong> to record
            the workshops to later upload them to youtube. We also need friendly
            folks to help with <strong className="gradient">Innkeeping</strong>. */}
            </Text>
            <Text>
              You can always{" "}
              <Link href="https://discord.gg/invite/metagame" isExternal>
                join our Discord
              </Link>{" "}
              and see what needs doing.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const CVSection = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  const [open, setOpen] = useState(false);

  const toggleBooth = () => {
    setOpen(!open);
    if (typeof window !== "undefined") {
      const body = document.querySelector("body");
      body.classList.toggle("booth-open");
    }
  };

  return (
    <Box as="section" id="metafest-booth" position="relative">
      {open && (
        <Button
          position="absolute"
          bottom={20}
          right={6}
          colorScheme="pink"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
          size="sm"
          transition="all 0.3s 0.8s ease"
          transform={`translateY(${open ? 0 : "-70px"})`}
          onClick={toggleBooth}
          zIndex={2002}
        >
          Close Booth
        </Button>
      )}
      <Box
        ref={ref}
        className="__content"
        maxW="2xl"
        transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
        zIndex={open ? 0 : 2001}
      >
        <Box className="__content__body" textAlign="right" mt={6}>
          <Text as="h2">MetaFest2 Booth</Text>
          <Text as="p" className="gradient">
            MetaFam's HQ in the Metaverse.
          </Text>
          <Text as="p">
            <Button colorScheme="ghost" onClick={toggleBooth}>
              Open the booth
            </Button>
          </Text>
        </Box>
      </Box>
      {open && (
        <Box
          ref={ref}
          position="absolute"
          top="12.5vh"
          left={0}
          height="75vh"
          minH="75vh"
          minW="100vw"
          boxShadow="0 0 30px rgba(0,0,0,0.8)"
          opacity={onScreen ? 1 : 0}
          transition="opacity 1.2s 0.8s ease-in-out"
          zIdex={2001}
        >
          <CryptovoxelsInstance />
          <Box
            display="flex"
            position="absolute"
            bottom={0}
            right={0}
            width="100%"
            textAlign="center"
          >
            <Link
              href="https://www.cryptovoxels.com/play?coords=S@379E,115S"
              isExternal
              fontWeight={700}
              fontSize="0.7vmax"
              // d="inline-block"
              mx="auto"
              p={3}
              bg="linear-gradient(90.24deg, #640DFB99 0.3%, rgba(100, 13, 251, 0.9) 80.16%)"
              borderRadius="5px 5px 0 0"
              boxShadow="0 0 5px rgba(0,0,0,0.6)"
              overflow="clip"
            >
              <span role="img" aria-label="Attention!">
                📢
              </span>{" "}
              Need more CryptoVoxels? Open it up in a new tab.{" "}
              <ExternalLinkIcon />
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export const ChatSection = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  const [open, setOpen] = useState(false);

  const toggleChat = () => {
    setOpen(!open);
    if (typeof window !== "undefined") {
      const body = document.querySelector("body");
      body.classList.toggle("chat-open");
    }
  };

  return (
    <Box as="section" id="chat" position="relative">
      {open && (
        <Button
          position="absolute"
          bottom={20}
          right={6}
          colorScheme="pink"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
          size="sm"
          transition="all 0.3s 0.8s ease"
          transform={`translateY(${open ? 0 : "-70px"})`}
          onClick={toggleChat}
          zIndex={2002}
        >
          Close chat
        </Button>
      )}
      <Box
        ref={ref}
        className="__content"
        transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.8s ease-in-out, opacity 0.6s 0.9s ease-in"
      >
        <Box className="__content__body" textAlign="right" mt={6}>
          <Text as="h2">MetaFest Chat</Text>
          <Text as="p" className="gradient">
            Come and join the discusion.
          </Text>
          <Text as="p">
            <Button colorScheme="ghost" onClick={toggleChat}>
              Open chat
            </Button>
          </Text>
        </Box>
      </Box>
      {open && (
        <Box
          ref={ref}
          position="absolute"
          top="12.5vh"
          left={0}
          height="75vh"
          minH="75vh"
          minW="100vw"
          boxShadow="0 0 30px rgba(0,0,0,0.8)"
          opacity={onScreen ? 1 : 0}
          transition="opacity 1.2s 0.8s ease-in-out"
          zIdex={2001}
        >
          <ChatInstance />
          <Box position="absolute" top={2} right={8}>
            <Link
              href="https://discord.com/channels/629411177947987986/629411178837442601"
              isExternal
              fontWeight={500}
              fontSize="0.7vmax"
            >
              <span role="img" aria-label="Attention!">
                📢
              </span>{" "}
              Hey octo, need more Discord? Open it up in a new tab.{" "}
              <ExternalLinkIcon />
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};

function App() {
  const curURL = useRef(null);
  let host = curURL ?? curURL.current ;


  useEffect(() => {
    if (typeof window !== "undefined") {
    const getHostname = () => {
      if (typeof window !== "undefined") {
        curURL.current = window.location.origin;
        console.log(window.location);
        // return host;
        return null
      }
    };
      getHostname();
    }
  }, [curURL]);
  // const [toggleAnim, setToggleAnim] = useState(false)

  return (
    <Box
      className="App"
      sx={{
        ".gradient": {
          display: "inline-block",
          background:
            "linear-gradient(90deg, #FF61E6 -29.22%, #7C56FF 107.53%)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 5px rgba(0,0,0,0.6))",
        },
        ".gradient2": {
          display: "inline-block",
          background:
            "linear-gradient(90.24deg, #79F8FB 0.3%, #9032E6 55.76%, #E839B7 106.78%)",
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundClip: "text",
          textFillColor: "transparent",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 5px rgba(0,0,0,0.6))",
        },
        ".gradient-cone": {
          display: "inline-block",
          background:
            "conic-gradient(from 92.2deg at 60.45% 74.83%, #8EBBFF 0deg, #DE3FFF 88.12deg, #79F8FB 105deg, #7C56FF 165deg, #FF61E6 251.25deg, #927CFF 286.87deg, #76EBF2 326.25deg, #8EBBFF 360deg)",
          backgroundPosition: "-254%",
          backgroundSize: "100%",
          backgroundClip: "text",
          textFillColor: "transparent",
          WebkitTextFillColor: "transparent",
          transition: "background 0.3s ease",
          filter: "drop-shadow(0 0 5px rgba(0,0,0,0.6))",
        },
        ".highlight": {},
        h3: {
          lineHeight: "2rem",
          mt: 5,
          mb: 0,
          "& + p": {
            fontSize: "1vmax",
            fontWeight: 500,
            mb: 1,
          },
        },
      }}
    >
      <RootContextProvider>
        <HeadComponent url={host} img={`${host}${SocialImg}`} />
        <SiteHeader />
        <Box
          sx={{
            scrollSnapType: { base: "y proximity", md: "unset" },
            position: "relative",
            zIndex: "1",
            section: {
              scrollSnapAlign: { base: "center", md: "unset" },
              scrollSnapStop: { base: "smooth", md: "unset" },
            },
          }}
        >
          <Suspense fallback={<Loader />}>
            <Canvas />
          </Suspense>
          <HomeSection />
          <ScheduleSection />
          <WorkshopsSection />
          <SpeakersSection />
          <CVSection />
          <ChatSection />
          <EasterEgg />
          <AlphaNotice />
          {/* TODO: Need to figure out how to stop the animations, in gsap & three's `tick()` */}
          {/* <Button
          position="fixed"
          bottom={20}
          left={6}
          colorScheme="pink"
          transition="all 0.3s 0.8s ease"
          onClick={setToggleAnim}
          zIndex={2002}
        >
          Turn off animations
        </Button> */}
          <SiteFooter />
        </Box>
      </RootContextProvider>
    </Box>
  );
}

export default App;

export const AlphaNotice = () => {
  const [toggle, setToggle] = useState(true);
  const ref = useRef(null);

  return (
    <Box
      ref={ref}
      bg="linear-gradient(90.24deg, #640DFB80 0.3%, rgba(100, 13, 251, 0.1) 80.16%)"
      backdropFilter="blur(7px)"
      boxShadow="0 0 15px rgba(0,0,0,0.6)"
      color="#FF61E6"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      width="100%"
      textAlign="center"
      height="auto"
      opacity={toggle ? 1 : 0}
      transform={`translateY(${toggle ? 0 : 100}px)`}
      transition="transform 0.3s 0.2s ease-in-out, opacity 0.3s 0.3s ease-in-out"
      zIndex={2002}
    >
      <Box
        d="flex"
        position="relative"
        alignItems="center"
        justifyContent="space-around"
        flexFlow="row nowrap"
        mx="auto"
        maxW="6xl"
        px={3}
        py={3}
      >
        <Image src={BabyOctoGif} boxSize="35px" objectFit="cover" />
        <Text fontSize="0.7vmax" fontWeight={700}>
          The site is in{" "}
          <Text as="span" color="#76EBF2" fontWeight="700">
            Alpha
          </Text>
          .{" "}
          <span role="img" aria-label="watchful eyes">
            👀
          </span>{" "}
          We're still working on content, there's no Web3 connectivity and there
          are some bugs...especially on mobile. <br /> We're working to get it
          all ship shape for June!
        </Text>
        <Image src={BabyOctoGif} boxSize="35px" objectFit="cover" />
        <IconButton
          onClick={() => setToggle(!toggle)}
          colorScheme="ghost"
          pos="fixed"
          bottom={3}
          right={6}
          size="sm"
          aria-label="Close easter egg"
          icon={<CloseIcon />}
          zIndex={2001}
        />
      </Box>
    </Box>
  );
};
export const EasterEgg = () => {
  const [toggle, setToggle] = useState(false);
  const ref = useRef(null);
  const handleToggle = () => {
    if (typeof window !== "undefined") {
      setToggle(!toggle);
      ref.current.classList.remove("found");
    }
  };
  return (
    <Box
      ref={ref}
      className="ee1"
      bg="rgba(0,0,0,0.3)"
      boxShadow="0 0 15px rgba(0,0,0,0.6)"
      backdropFilter="blur(7px)"
      color="white"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      width="100%"
      textAlign="center"
      height="auto"
      opacity={0}
      transform="translateY(100px)"
      transition="transform 0.3s 0.2s ease-in-out, opacity 0.3s 0.3s ease-in-out"
      zIndex={0}
      // onClick={(event) => handleToggle(event)}
      sx={{
        h4: {
          fontSize: "2vmax",
          fontWeight: 700,
        },
        "&.found": {
          opacity: 1,
          transform: "translateY(0)",
          zIndex: 2003,
        },
      }}
    >
      <Box
        d="flex"
        position="relative"
        alignItems="center"
        justifyContent="space-around"
        flexFlow="row nowrap"
        mx="auto"
        maxW="5xl"
        py={3}
      >
        <Image src={BabyOctoGif} boxSize="100px" objectFit="cover" />
        <Box flex={1}>
          <Text as="h4">
            <span role="img" aria-label="Octo emoji">
              🐙
            </span>{" "}
            Nova's blessings!!{" "}
            <span role="img" aria-label="Octo emoji">
              🐙
            </span>
          </Text>
          <Text as="p" fontSize="1vmax" fontWeight={500}>
            Welcome curious one!{" "}
            <span role="img" aria-label="Cheers/Clinking glasses emoji">
              🍻
            </span>
            <br />
            You noticed little octo, all alone in space.{" "}
            <span role="img" aria-label="Loved up emoji">
              🥰
            </span>{" "}
            <br /> For that Nova will bestow wonderment upon you! Do you wish to
            accept the gift?
            <br />
            <Link href="#">Connect your wallet to claim your NFT.</Link>
          </Text>
        </Box>

        <Image src={BabyOctoGif} boxSize="100px" objectFit="cover" />
        <IconButton
          onClick={handleToggle}
          colorScheme="ghost"
          pos="absolute"
          top={3}
          right={-10}
          size="sm"
          aria-label="Close easter egg"
          icon={<CloseIcon />}
          zIndex={2001}
        />
      </Box>
    </Box>
  );
};

export const Loader = () => {
  return <Box>Loading...</Box>;
};
