import React, { Suspense, useEffect, useRef, useState } from "react";
import "./App.css";
import RootContextProvider from "./contexts/RootContext";
import {
  Box,
  Button,
  Flex,
  Stack,
  Container,
  SimpleGrid,
  StackDivider,
  IconButton,
  Image,
  Link,
  Text,
  HStack,
  useDisclosure,
  // Drawer,
  // DrawerOverlay,
  // DrawerContent,
  // DrawerCloseButton,
  // DrawerBody,
  // DrawerFooter,
} from "@chakra-ui/react";
import { CalendarIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
// import Space from './components/Space'
import { Canvas } from "./components/Canvas";
import {
  CryptovoxelsHQInstance,
  CryptovoxelsJobFairInstance,
} from "./components/integrations/CryptovoxelsInstance";
import CalendarInstance from "./components/integrations/CalendarInstance";
import ChatInstance from "./components/integrations/ChatInstance";
import {
  AirtableSpeakerInstance,
  AirtableContributorInstance,
  AirtablePerformerInstance,
  AirtableSponsorInstance,
} from "./components/integrations/AirtableInstance";
import { useDisabledMobileNotify, useOnScreen } from "./utils/hooks";
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
        // pointerEvents="none"
        sx={{
          ".fest-dates": {
            d: "block",
            width: "100%",
            color: "#FF61E6",
            fontSize: { base: "2vmin", md: "0.7vmax" },
            fontWeight: 700,
            textAlign: "right",
            transform: { md: "translateY(15px)" },
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
              position: "relative",
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
          <HStack mt={5}>
            <Link href="#apply"><Button colorScheme="pink" size="lg">Apply</Button></Link>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

// export const ApplicationDrawer = () => {
//   const ref = useRef(null);
//   const appRef = useRef(null);
//   const btnRef = useRef(null);
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Link href="#appl"></Link>
//       {/* <Drawer
//         placement="right"
//         onClose={onClose}
//         isOpen={isOpen}
//         finalFocusRef={btnRef}
//         size="xl"
//       >
//         <DrawerOverlay />
//         <DrawerContent
//           sx={{
//             bg: "rgba(25,0,50,0.4)",
//             backdropFilter: "blur(7px)",
//             borderRadius: "5px 30px 10px 0",
//             boxShadow: "0 0 30px #00000070",
//             color: "white",
//           }}
//         >
//           <DrawerBody>
//             <Box
//               d="flex"
//               maxW="100%"
//               minH="100%"
//               maxH="100vh"
//               flexFlow="row nowrap"
//               alignItems="center"
//               justifyContent="space-between"
//             >
//               <Container
//                 maxW={"2xl"}
//                 maxH="75vh"
//                 p={{ base: 8, md: 12 }}
//                 sx={{
//                   bg: "rgba(255,255,255,0.1)",
//                   backdropFilter: "blur(7px)",
//                   borderRadius: "5px 30px 10px 0",
//                   boxShadow: "0 0 30px #00000070",
//                 }}
//               >
//                 <Button
//                   variant="outline"
//                   mr={3}
//                   onClick={onClose}
//                   pos="absolute"
//                   right={5}
//                   top={5}
//                 >
//                   Cancel
//                 </Button>
//                 <SimpleGrid columns={{ base: 1 }} spacing={0}>
//                   <Stack spacing={4}>
//                     <Text
//                       textTransform={"uppercase"}
//                       fontWeight={500}
//                       fontSize={{ base: "1vmin", md: "0.7vmax" }}
//                       className="gradient"
//                       p={0}
//                       alignSelf={"flex-start"}
//                       rounded={"md"}
//                     >
//                       <span role="img" aria-label="Yay, come join us!">
//                         🎉
//                       </span>{" "}
//                       Join the party!{" "}
//                       <span role="img" aria-label="Yay, come join us!">
//                         🎉
//                       </span>
//                     </Text>
//                     <Text as="h3">
//                       <span>MetaFest2 needs YOU</span>
//                       <span
//                         className="gradient"
//                         role="img"
//                         aria-label="Pointing at the forms below"
//                       >
//                         👇
//                       </span>
//                     </Text>
//                     <Text fontSize={"lg"}>
//                       What is an event without the amazing folks like you!
//                       People who want to help organise &amp; greet, tell us
//                       about their projects, teach, sing, code...we'd love to see
//                       you. Apply below.
//                     </Text>
//                     <Stack spacing={4} divider={<StackDivider />}>
//                       <Feature
//                         iconBg={"yellow.900"}
//                         text={"Speaker"}
//                         call={() => loadForm("speaker")}
//                       />
//                       <Feature
//                         iconBg={"green.900"}
//                         text={"Contributor"}
//                         call={() => loadForm("contributor")}
//                       />
//                       <Feature
//                         iconBg={"purple.900"}
//                         text={"Performer"}
//                         call={() => loadForm("performer")}
//                       />
//                       <Feature
//                         iconBg={"purple.900"}
//                         text={"Sponsor"}
//                         call={() => loadForm("sponsor")}
//                       />
//                     </Stack>
//                   </Stack>
//                 </SimpleGrid>
//               </Container>
//               {/* <Container
//                 maxW="5xl"
//                 minH="85vh"
//                 maxH="85vh"
//                 overflowY="auto"
//                 overflowX="clip"
//                 borderRadius="md"
//                 p={0}
//               >
//                 <Box
//                   ref={appRef}
//                   height="auto"
//                   width="calc(100% + 15px)"
//                   transition="opacity 1.2s 0.8s ease-in-out"
//                   zIndex={2001}
//                   overflowY="hidden"
//                 >
//                   {currentForm && (
//                     currentForm()
//                   )}
//                 </Box>
//               </Container>
//             </Box>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer> */}
//     </>
//   );
// };

export const ScheduleSection = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  const [openCal, setOpenCal] = useState(false);
  const disabledMobNotify = useDisabledMobileNotify();

  return (
    <Box
      as="section"
      id="schedule"
      flexFlow="row nowrap"
      justifyContent="space-between"
    >
      {openCal && (
        <Button
          position="absolute"
          bottom={20}
          right={6}
          colorScheme="pink"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
          size="sm"
          transition="all 0.3s 0.8s ease"
          transform={`translateY(${openCal ? 0 : "-70px"})`}
          onClick={() => setOpenCal(!openCal)}
          zIndex={2002}
        >
          Close Calendar
        </Button>
      )}

      <Box
        ref={ref}
        className="__content"
        w={{ base: "full", md: "2xl" }}
        transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
      >
        <Box
          position="relative"
          d="inline-flex"
          flexFlow="row nowrap"
          alignItems="flex-start"
          justifyContent="space-between"
          width="100%"
        >
          <Text as="h2" d="inline-block">
            Schedule
          </Text>
          <IconButton
            icon={<CalendarIcon />}
            aria-label="Open event calendar"
            flex={0}
            fontSize="2vmax"
            colorScheme="ghost"
            onClick={() => setOpenCal(!openCal)}
            alignSelf="center"
            filter="drop-shadow(0 0 15px #FF61E6)"
          />
        </Box>

        <Box className="__content__body">
          <Text>
            Our community members are busy rn, booking guests &amp; organising
            workshops. Watch this space
            <Text as="span" className="gradient2">
              ...it's gonna blow your mind!
            </Text>
            <Image
              src={MindBlownImg}
              boxSize="20px"
              objectFit="cover"
              d="inline-block"
            />
          </Text>
          <Box>
            <Box className="week">
              <Text as="h3" className="gradient2">
                <span>Metaverse Week</span>
              </Text>
              <Text>The week of gaming &amp; social events</Text>
              <Text>
                Expect live music from Billy Idol and other artists streaming on
                stage in the Metaverse, Discord &amp; YouTube. A CryptoVoxel
                treasure hunt. Gatherings in NEOS. NFT giveaways &amp; POAPs and
                moar!
              </Text>
            </Box>
            <Box className="week">
              <Text as="h3" className="gradient2">
                <span>DAO Week</span>
              </Text>
              <Text>The week of 70+ great talks &amp; workshops</Text>
              <Text>
                A <Link href="#metafest-verse">Web3 job fair</Link>, pair
                programming, learn to buidl in CryptoVoxels, find out how to
                take advantage of the latest ReFi tech - there's something for
                everyone.
              </Text>
              <Text>
                If you didn't miss out last year, I can feel your{" "}
                <span className="gradient">FOMO</span> from here!!{" "}
              </Text>
            </Box>
            <Box mt={5}>
              <Text>
                To enter MetaFest2, you will have to{" "}
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
              <Text>jk jk just enter!</Text>
              <Button
                d={{ md: "none" }}
                colorScheme="pink"
                size="sm"
                mt={5}
                // isDisabled
                onClick={disabledMobNotify}
              >
                <span role="img" aria-label="Yay, come join us!">
                  🎉
                </span>{" "}
                Join the party!{" "}
                <span role="img" aria-label="Yay, come join us!">
                  🎉
                </span>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {openCal && (
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
          zIndex={2001}
          sx={{
            bg: "rgba(25,0,50,0.4)",
            backdropFilter: "blur(7px)",
          }}
        >
          <CalendarInstance />
          <Box
            display="flex"
            position="absolute"
            bottom={0}
            right={0}
            width="100%"
            textAlign="center"
          >
            <Link
              href="https://calendar.google.com/calendar/embed?src=9lieknu5pnes1l51ej6n2916u0%40group.calendar.google.com&ctz=Europe%2FLondon"
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
              Need more Calendar? Open it up in a new tab. <ExternalLinkIcon />
            </Link>
          </Box>
        </Box>
      )}
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
            <Box flex="0 0 48%" w="48%">
              <Text as="h3" className="gradient2">
                Metaverse Week
              </Text>
              <Text>Want to take part in Metaverse Week?</Text>
              <Text>
                Find the application forms on the{" "}
                <Link href="#schedule">Schedule page</Link>
              </Text>
              {/* <UnorderedList
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
              </UnorderedList> */}
            </Box>
            <Box flex="0 0 48%" w="48%">
              <Text as="h3" className="gradient2">
                DAO Week
              </Text>
              <Text>Want to take part in DAO Week?</Text>
              <Text>
                Find the application forms on the{" "}
                <Link href="#schedule">Schedule page</Link>
              </Text>
            </Box>
            {/* <Box flex="0 0 32%" w="32%">
              <Text as="h3" className="gradient2">
                Other stuff...
              </Text>
              <Text>Details of ?</Text>
              <Text>Find the application forms on the <Link href="#schedule">Schedule page</Link></Text>
            </Box> */}
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
              Head to the <Link href="#schedule">Schedule</Link> for the latest
              info, calendar<sup>*</sup> and application forms.
            </Text>
            <Text fontSize="sm">
              <em>
                <sup>*</sup> All times shown in UTC
              </em>
            </Text>

            <Text as="h3" className="gradient2">
              Where?
            </Text>
            <Text>
              All workshops happen in Metagame Discord{" "}
              <Link href="#chat">#metafest-voice</Link>
              <sup>*</sup>
            </Text>
            <Text fontSize="sm">
              <em>
                <sup>*</sup>no reservation required.
              </em>
            </Text>

            <Text as="h3" className="gradient2">
              Open Quests / Help Needed!
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
              Check the <Link href="#schedule">Schedule page</Link> for the
              contributors application form and as always, you can always{" "}
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
  const [openHQ, setOpenHQ] = useState(false);
  const [openFair, setOpenFair] = useState(false);

  return (
    <Box as="section" id="metafest-verse" position="relative">
      {openHQ && (
        <Button
          position="absolute"
          bottom={20}
          right={6}
          colorScheme="pink"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
          size="sm"
          transition="all 0.3s 0.8s ease"
          transform={`translateY(${openHQ ? 0 : "-70px"})`}
          onClick={() => setOpenHQ(!openHQ)}
          zIndex={2002}
        >
          Close the booth
        </Button>
      )}
      {openFair && (
        <Button
          position="absolute"
          bottom={20}
          right={6}
          colorScheme="pink"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
          size="sm"
          transition="all 0.3s 0.8s ease"
          transform={`translateY(${openFair ? 0 : "-70px"})`}
          onClick={() => setOpenFair(!openFair)}
          zIndex={2002}
        >
          Close Fair
        </Button>
      )}
      <Box
        ref={ref}
        className="__content"
        maxW="2xl"
        transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
        zIndex={openHQ || openFair ? 0 : 2001}
      >
        <Box className="__content__body--no-firstof" textAlign="right" mt={6}>
          <Text as="h2">MetaFest-a-verse</Text>
          <Text as="p" className="gradient">
            The MetaFest Booth: MetaFam's HQ in the Metaverse.
          </Text>
          <Text>
            From scavenger hunts to gigs, come explore our virtual HQ!{" "}
          </Text>

          <Button colorScheme="ghost" onClick={() => setOpenHQ(!openHQ)}>
            Open the booth
          </Button>
          <Text as="p">
            <span className="gradient">
              Web3 JobFair: Seeking for honor and glory in the most meaningful
              web3 orgs?
            </span>
          </Text>
          <Text>Come to the Job Fair and find your place!</Text>
          <Button colorScheme="ghost" onClick={() => setOpenFair(!openFair)}>
            Open the fair
          </Button>
        </Box>
      </Box>
      {openHQ && (
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
          zIndex={2001}
          sx={{
            bg: "rgba(25,0,50,0.4)",
            backdropFilter: "blur(7px)",
          }}
        >
          <CryptovoxelsHQInstance />
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
      {openFair && (
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
          zIndex={2001}
          sx={{
            bg: "rgba(25,0,50,0.4)",
            backdropFilter: "blur(7px)",
          }}
        >
          <CryptovoxelsJobFairInstance />
          <Box
            display="flex"
            position="absolute"
            bottom={0}
            right={0}
            width="100%"
            textAlign="center"
          >
            <Link
              href="https://www.cryptovoxels.com/play?coords=E@399E,93S,7.5F"
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
          zIndex={2001}
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

export const ApplySection = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  const [openSpeakerApplication, setOpenSpeakerApplication] = useState(false);
  const [openContributorApplication, setOpenContributorApplication] = useState(
    false
  );
  const [openPerformerApplication, setOpenPerformerApplication] = useState(
    false
  );
  const [openSponsorApplication, setOpenSponsorApplication] = useState(false);

  return (
    <Box as="section" id="apply" position="relative">
      <Box
        ref={ref}
        className="__content"
        width="100%"
        transform={`translate3d(${onScreen ? 0 : "70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.8s ease-in-out, opacity 0.6s 0.9s ease-in"
      >
        <Box className="__content__body" d="flex" w="100%" flexFlow={{base: 'column wrap', md: "row nowrap"}} alignItems="center" justifyContent="space-between">
        <Container
            maxW={"2xl"}
          >
          <Text
            as="h2"
          >
            Apply here
          </Text>
          {/* <span className="fest-dates">9 - 23rd JUNE</span> */}
          </Container>
          <Container maxW={{base: '100%', md: "2xl"}} p={0}>
          <Box
            maxW={{base: '100%', md: "2xl"}}
            p={{ base: 8, md: 12 }}
            sx={{
              bg: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(7px)",
              borderRadius: "5px 30px 10px 0",
              boxShadow: "0 0 30px #00000070",
            }}
          >
            <SimpleGrid columns={{ base: 1 }} spacing={0}>
              <Stack spacing={4}>
                <Text
                  textTransform={"uppercase"}
                  fontWeight={500}
                  fontSize={{ base: "1vmin", md: "0.7vmax" }}
                  className="gradient"
                  p={0}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  <span role="img" aria-label="Yay, come join us!">
                    🎉
                  </span>{" "}
                  Join the party!{" "}
                  <span role="img" aria-label="Yay, come join us!">
                    🎉
                  </span>
                </Text>
                <Text as="h3">
                  <span>MetaFest2 needs YOU</span>
                  <span
                    className="gradient"
                    role="img"
                    aria-label="Pointing at the forms below"
                  >
                    👇
                  </span>
                </Text>
                <Text fontSize={"lg"}>
                  What is an event without amazing folks like you! People
                  who want to help organise &amp; greet, tell us about their
                  projects, teach, sing, code...we'd love to see you. Apply
                  below.
                </Text>
                <Stack spacing={4} divider={<StackDivider />}>
                  <Feature
                    iconBg={"yellow.900"}
                    text={"Speaker"}
                    call={() =>
                      setOpenSpeakerApplication(!openSpeakerApplication)
                    }
                  />
                  <Feature
                    iconBg={"green.900"}
                    text={"Contributor"}
                    call={() =>
                      setOpenContributorApplication(!openContributorApplication)
                    }
                  />
                  <Feature
                    iconBg={"purple.900"}
                    text={"Performer"}
                    call={() =>
                      setOpenPerformerApplication(!openPerformerApplication)
                    }
                  />
                  <Feature
                    iconBg={"purple.900"}
                    text={"Sponsor"}
                    call={() =>
                      setOpenSponsorApplication(!openSponsorApplication)
                    }
                  />
                </Stack>
              </Stack>
            </SimpleGrid>
          </Box>
          </Container>

        </Box>
      </Box>
      {openSpeakerApplication && (
        <>
          <Button
            position="absolute"
            bottom={{base: 10, md: 20}}
            right={6}
            colorScheme="pink"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
            size="sm"
            transition="all 0.3s 0.8s ease"
            transform={`translateY(${openSpeakerApplication ? 0 : "-70px"})`}
            onClick={() => setOpenSpeakerApplication(!openSpeakerApplication)}
            zIndex={2002}
          >
            Close form
          </Button>
          <Box
            ref={ref}
            position="absolute"
            top="12.5vh"
            left={0}
            height="75vh"
            minH="75vh"
            minW="100vw"
            sx={{
              bg: "rgba(25,0,50,0.4)",
              backdropFilter: "blur(7px)",
            }}
            boxShadow="0 0 30px rgba(0,0,0,0.8)"
            opacity={onScreen ? 1 : 0}
            transition="opacity 1.2s 0.8s ease-in-out"
            zIndex={2001}
            overflowY="scroll"
          >
            <AirtableSpeakerInstance />
          </Box>
        </>
      )}
      {openContributorApplication && (
        <>
          <Button
            position="absolute"
            bottom={{base: 10, md: 20}}
            right={6}
            colorScheme="pink"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
            size="sm"
            transition="all 0.3s 0.8s ease"
            transform={`translateY(${
              openContributorApplication ? 0 : "-70px"
            })`}
            onClick={() =>
              setOpenContributorApplication(!openContributorApplication)
            }
            zIndex={2002}
          >
            Close form
          </Button>
          <Box
            ref={ref}
            position="absolute"
            top="12.5vh"
            left={0}
            height="75vh"
            minH="75vh"
            minW="100vw"
            sx={{
              bg: "rgba(25,0,50,0.4)",
              backdropFilter: "blur(7px)",
            }}
            boxShadow="0 0 30px rgba(0,0,0,0.8)"
            opacity={onScreen ? 1 : 0}
            transition="opacity 1.2s 0.8s ease-in-out"
            zIndex={2001}
            overflowY="scroll"
          >
            <AirtableContributorInstance />
          </Box>
        </>
      )}
      {openPerformerApplication && (
        <>
          <Button
            position="absolute"
            bottom={{base: 10, md: 20}}
            right={6}
            colorScheme="pink"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
            size="sm"
            transition="all 0.3s 0.8s ease"
            transform={`translateY(${openPerformerApplication ? 0 : "-70px"})`}
            onClick={() =>
              setOpenPerformerApplication(!openPerformerApplication)
            }
            zIndex={2002}
          >
            Close form
          </Button>
          <Box
            ref={ref}
            position="absolute"
            top="12.5vh"
            left={0}
            height="75vh"
            minH="75vh"
            minW="100vw"
            sx={{
              bg: "rgba(25,0,50,0.4)",
              backdropFilter: "blur(7px)",
            }}
            boxShadow="0 0 30px rgba(0,0,0,0.8)"
            opacity={onScreen ? 1 : 0}
            transition="opacity 1.2s 0.8s ease-in-out"
            zIndex={2001}
            overflowY="scroll"
          >
            <AirtablePerformerInstance />
          </Box>
        </>
      )}
      {openSponsorApplication && (
        <>
          <Button
            position="absolute"
            bottom={{base: 10, md: 20}}
            right={6}
            colorScheme="pink"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
            size="sm"
            transition="all 0.3s 0.8s ease"
            transform={`translateY(${openSponsorApplication ? 0 : "-70px"})`}
            onClick={() => setOpenSponsorApplication(!openSponsorApplication)}
            zIndex={2002}
          >
            Close form
          </Button>
          <Box
            ref={ref}
            position="absolute"
            top="12.5vh"
            left={0}
            height="75vh"
            minH="75vh"
            minW="100vw"
            sx={{
              bg: "rgba(25,0,50,0.4)",
              backdropFilter: "blur(7px)",
            }}
            boxShadow="0 0 30px rgba(0,0,0,0.8)"
            opacity={onScreen ? 1 : 0}
            transition="opacity 1.2s 0.8s ease-in-out"
            zIndex={2001}
            overflowY="scroll"
          >
            <AirtableSponsorInstance />
          </Box>
        </>
      )}
    </Box>
  );
};

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
  // const [toggleAnim, setToggleAnim] = useState(false)

  return (
    <Box
      className="App"
      sx={{
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

export const Loader = () => {
  return <Box>Loading...</Box>;
};

export const EasterEgg = () => {
  const [toggle, setToggle] = useState(false);
  const [openClaim, setOpenClaim] = useState(false);
  const ref = useRef(null);
  const claimRef = useRef(null);
  const handleToggle = () => {
    if (typeof window !== "undefined") {
      setToggle(!toggle);
      ref.current.classList.remove("found");
    }
  };

  const claimNFT = () => {
    if (typeof window !== "undefined") {
      setOpenClaim(!openClaim);
      // setToggle(!toggle);
      // ref.current.classList.remove("found");
    }
  };
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
              <br /> For that Nova will bestow wonderment upon you! Do you wish
              to accept the gift?
              <br />
            </Text>
            <Button
              href="#"
              colorScheme="pink"
              mt={5}
              onClick={() => setOpenClaim(!openClaim)}
            >
              Claim your NFT
            </Button>
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
      {openClaim && (
        <Box
          ref={claimRef}
          position="fixed"
          top="12.5vh"
          left={0}
          height="75vh"
          minH="75vh"
          minW="100vw"
          boxShadow="0 0 30px rgba(0,0,0,0.8)"
          // opacity={onScreen ? 1 : 0}
          transition="opacity 1.2s 0.8s ease-in-out"
          zIndex={2003}
          sx={{
            bg: "rgba(25,0,50,0.4)",
            backdropFilter: "blur(7px)",
          }}
        >
          <Container maxW="2xl" height="100%" py={12} align="center">
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

export const Feature = ({ text, iconBg, call }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {/* {icon} */}
      </Flex>
      <Text fontWeight={500} fontSize={{base: '3vmin', md: '1.2vmax'}} flex={1}>
        {text}
      </Text>
      <Button onClick={() => call()} colorScheme="pink" size="sm" justifySelf="right">
        Apply
      </Button>
    </Stack>
  );
};
