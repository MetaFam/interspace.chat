import React, { Suspense, useEffect, useRef, useState } from "react";
import "./App.css";
import RootContextProvider from "./contexts/RootContext";
import {
  Box,
  Button,
  Container,
  IconButton,
  Image,
  keyframes,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Canvas } from "./components/Canvas";
import {
  HomeSection,
  ScheduleSection,
  WorkshopsSection,
  SpeakersSection,
  MetaverseSection,
  ChatSection,
  ApplySection,
} from "./components/page-sections";
import { SiteHeader } from "./components/Header";
import { SiteFooter } from "./components/Footer";
import { HeadComponent } from "./components/HeadComponent";


import BabyOctoGif from "./static/assets/img/baby_octo_alpha.gif";
import SocialImg from "./static/assets/img/social.png";

function App() {
  const curURL = useRef(null);
  let host = curURL ?? curURL.current;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getHostname = () => {
        if (typeof window !== "undefined") {
          curURL.current = window.location.origin;
          console.log(window.location);
          // return host;
          return null;
        }
      };
      getHostname();
    }
  }, [curURL]);
  // TODO: Need to give the option to turn off animations but not sure how to do it yet 😃
  // const [toggleAnim, setToggleAnim] = useState(false)

  return (
    <div
      className="App"
    >
        <HeadComponent url={host} img={`${host}${SocialImg}`} />
        <SiteHeader />
        <Box
          sx={{
            scrollSnapType: { base: "y proximity", md: "unset" },
            d: 'block',
            position: "relative",
            width: '100%',
            height: 'auto',
            overflowX: "hidden",
            zIndex: 2,
            m: 0,
            p: 0,
            section: {
              scrollSnapAlign: { base: "start" },
              scrollSnapStop: { base: "smooth" },
            },
          }}
        >
          {/* <Suspense fallback={<Loader />}> */}
            <Canvas />
          {/* </Suspense> */}

          <HomeSection />
          <ScheduleSection />
          <WorkshopsSection />
          <SpeakersSection />
          <MetaverseSection />
          <ChatSection />
          <ApplySection />
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
    </div>
  );
}

export default App;

export const AlphaNotice = () => {
  const [toggle, setToggle] = useState(true);
  const ref = useRef(null);

  return (
    <Box
      ref={ref}
      // display="none"
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
      // transform={`translateY(${toggle ? 0 : 100}px)`}
      transition="transform 0.3s 0.2s ease-in-out, opacity 0.3s 0.3s ease-in-out"
      zIndex={3000}
    >
      <Box
        d="flex"
        position="relative"
        alignItems="center"
        justifyContent="space-around"
        flexFlow="row nowrap"
        mx="auto"
        maxW={{base: '100%', md: '66%', '2xl': "6xl"}}
        px={3}
        py={3}
      >
        {/* <Image src={BabyOctoGif} boxSize="25px" objectFit="cover" /> */}
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
        {/* <Image src={BabyOctoGif} boxSize="35px" objectFit="cover" /> */}
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

export const Loader = () => {
  return <Box>Loading...</Box>;
};

export const EasterEgg = () => {
  const [toggle, setToggle] = useState(false);
  const [openClaim, setOpenClaim] = useState(false);
  const ref = useRef(null);
  const claimRef = useRef(null);
  const responsiveButtonSize = useBreakpointValue({base: 'sm', lg: 'md'})
  const handleToggle = () => {
    if (typeof window !== "undefined") {
      setToggle(!toggle);
      ref.current.classList.remove("found");
    }
  };

  // const claimNFT = () => {
  //   if (typeof window !== "undefined") {
  //     setOpenClaim(!openClaim);
  //     // setToggle(!toggle);
  //     // ref.current.classList.remove("found");
  //   }
  // };
  return (
    <>
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
        maxW="100vw"
        textAlign="center"
        height={{base: '150px', md: "auto"}}
        opacity={0}
        // transform="translateY(100px)"
        transition="transform 0.3s 0.2s ease-in-out, opacity 0.3s 0.3s ease-in-out"
        zIndex={0}
        overflowX="clip"
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
        {openClaim && (
          <Button
            position="absolute"
            bottom={20}
            right={6}
            colorScheme="pink"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
            size="sm"
            transition="all 0.3s 0.8s ease"
            // transform={`translateY(${openClaim ? 0 : "-70px"})`}
            onClick={() => setOpenClaim(!openClaim)}
            zIndex={2004}
          >
            Close the claimer
          </Button>
        )}
        <Box
          d="flex"
          position="relative"
          alignItems="center"
          justifyContent="space-around"
          flexFlow="row nowrap"
          mx="auto"
          maxW={{base: '100%', md: "5xl"}}
          py={3}
        >
          <Image src={BabyOctoGif} boxSize={{base: '35px', xl:"100px"}} objectFit="cover" />
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
            <Text as="p" fontWeight={500}>
              Welcome Anon!{" "}
              <span role="img" aria-label="Cheers/Clinking glasses emoji">
                🍻
              </span>
              <br />
              You noticed little octo, all alone in space.{" "}
              <span role="img" aria-label="Loved up emoji">
                🥰
              </span>{" "}
              <br /> For that Nova will bestow wonderment upon you! Do you wish
              to accept the gift?
              <br />
            </Text>
            <Button
              href="#"
              colorScheme="pink"
              size={responsiveButtonSize}
              mt={5}
              onClick={() => setOpenClaim(!openClaim)}
            >
              Claim your NFT
            </Button>
          </Box>

          <Image src={BabyOctoGif} boxSize={{base: '35px', xl:"100px"}} objectFit="cover" />
          <IconButton
            onClick={handleToggle}
            colorScheme="ghost"
            pos="absolute"
            top={3}
            right={0}
            size="sm"
            aria-label="Close easter egg"
            icon={<CloseIcon />}
            zIndex={2001}
          />
        </Box>
      </Box>
      {openClaim && (
        <Box
          ref={claimRef}
          position="fixed"
          top="12.5vh"
          left={0}
          height="75vh"
          minH="75vh"
          width="100vw"
          boxShadow="0 0 30px rgba(0,0,0,0.8)"
          // opacity={onScreen ? 1 : 0}
          transition="opacity 1.2s 0.8s ease-in-out"
          zIndex={2003}
          sx={{
            bg: "rgba(25,0,50,0.4)",
            backdropFilter: "blur(7px)",
          }}
        >
          <Container maxW={{base: '100%', md: "2xl"}} height="100%" py={12} align="center">
            <MinterInstance />
          </Container>
          <Box
            display="flex"
            position="absolute"
            bottom={0}
            right={0}
            width="100%"
            textAlign="center"
          >
            <Link
              href="https://testnets.opensea.io/assets?search[query]=0x91BBa1e0EE2DCC8d78Fa017588614f328d6d1885"
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
              Need more NFTs? View the contract on OpenSea. <ExternalLinkIcon />
            </Link>
          </Box>
        </Box>
      )}
    </>
  );
};

export const MinterInstance = () => {
  return (
    <iframe
      title="Claim Easter Egg NFT"
      src="https://gateway.ipfscdn.io/ipfs/QmQpHkDDWGJPBHFKkpX1DsfzvwZXQYNVoaW4R1Lhenp6T5/bundledrop.html?contract=0x91BBa1e0EE2DCC8d78Fa017588614f328d6d1885&chainId=80001&tokenId=0"
      width="100%"
      height="100%"
      frameborder="0"
    ></iframe>
  );
};
