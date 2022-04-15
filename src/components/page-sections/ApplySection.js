
import React, { useRef, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Stack,
  Container,
  SimpleGrid,
  StackDivider,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import {
  AirtableSpeakerInstance,
  AirtableContributorInstance,
  AirtablePerformerInstance,
  AirtableSponsorInstance,
} from "../integrations/AirtableInstance";
import { useOnScreen } from "../../utils/hooks";


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
        transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
        willChange={true}
      >
        <Box className="__content__body" d={{base: 'unset', md: "flex"}} w="100%" flexFlow={{base: 'column wrap', md: "row nowrap"}} alignItems="center" justifyContent="space-between">
        <Container
            maxW={{base: '100%', md: "2xl"}}
          >
          <Text
            as="h2"
          >
            Apply here
          </Text>
          {/* <span className="fest-dates">9 - 23rd JUNE</span> */}
          </Container>
          <Container maxW={{base: '100%', md: "2xl"}} p={0} mt={{base: 5, md: 0}}>
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
              <Stack spacing={{base: 2, md: 4}} >
                <Text
                  textTransform={"uppercase"}
                  fontWeight={500}
                  fontSize={{ base: "2.2vmin", md: "0.7vmax" }}
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
                <Text as="h3" mt={1}>
                  <span>MetaFest2 needs YOU</span>
                  <span
                    className="gradient"
                    role="img"
                    aria-label="Pointing at the forms below"
                  >
                    👇
                  </span>
                </Text>
                <Text as="p" >
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
            zIndex={2003}
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
            width="100vw"
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
            midth="100vw"
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
            width="100vw"
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
            width="100vw"
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

export const Feature = ({ text, iconBg, call }) => {
  const responsiveSize = useBreakpointValue({base: 'xs', md: 'sm'})
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
      <Text fontWeight={500} fontSize={{base: '2.8vmin', md: '1.2vmax'}} flex={1}>
        {text}
      </Text>
      <Button onClick={() => call()} colorScheme="pink" size={responsiveSize} justifySelf="right">
        Apply
      </Button>
    </Stack>
  );
};
