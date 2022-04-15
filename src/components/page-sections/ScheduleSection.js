import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CalendarIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import CalendarInstance from "../integrations/CalendarInstance";
import { useDisabledMobileNotify, useOnScreen } from "../../utils/hooks";


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
      sx={{
        '.week': {
          mb: 5
        }
      }}
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
            {/* <Image
              src={MindBlownImg}
              boxSize="20px"
              objectFit="cover"
              d="inline"
            /> */}
          </Text>
          <Box mt={5}>
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
                size={"sm"}
                mt={5}
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
          width="100vw"
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