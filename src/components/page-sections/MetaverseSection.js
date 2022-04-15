import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  CryptovoxelsHQInstance,
  CryptovoxelsJobFairInstance,
} from "../integrations/CryptovoxelsInstance";
import { useOnScreen } from "../../utils/hooks";


export const MetaverseSection = () => {
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
          willChange={true}
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
          willChange={true}
          onClick={() => setOpenFair(!openFair)}
          zIndex={2002}
        >
          Close Fair
        </Button>
      )}
      <Box
        ref={ref}
        className="__content"
        maxW={{base: '100%', md: "2xl"}}
        // transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
        willChange={true}
        zIndex={openHQ || openFair ? 0 : 2001}
      >
        <Box className="__content__body--no-firstof" textAlign="right" mt={6}>
          <Text as="h2">MetaFest-a-verse</Text>
          <Text className="gradient">
            The MetaFest Booth: MetaFam's HQ in the Metaverse.
          </Text>
          <Text>
            From scavenger hunts to gigs, come explore our virtual HQ!{" "}
          </Text>

          <Button colorScheme="ghost" onClick={() => setOpenHQ(!openHQ)}>
            Open the booth
          </Button>
          <Text>
            <span className="gradient">
              Web3 JobFair: Seeking honor and glory in the most meaningful
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