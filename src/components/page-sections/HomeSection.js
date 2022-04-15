import React, { useRef } from "react";
import {
  Box,
  Button,
  Link,
  Text,
  HStack,
  useBreakpointValue
} from "@chakra-ui/react";
import { useOnScreen } from "../../utils/hooks";
import { revealRight } from "../animations";


export const HomeSection = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'lg' })


  return (
    <Box
      as="section"
      id="home"
      alignContent="center"
      justifyContent="flex-start"
    >
      <Box
        ref={ref}
        position="relative"
        className="__content"
        maxW={{base: '100%', md: "2xl"}}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.3s ease-in"

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
            overflow="visible"
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
          <span className="fest-dates">9th - 23rd JUNE</span>
        </Box>
        <Box className="__content__body">
          <Text as="p" fontWeight={300} mt={-2}>
            powered by{" "}
            <Text as="strong" className="gradient">
              MetaGame
            </Text>
          </Text>
          <Text as="p" fontSize="1.5vmax" mt={{base: 3, md: 6}} fontWeight={500}>
            A virtual festival/conference/hackathon.
          </Text>
          <Text as="p" >
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
            <Link href="#apply"><Button colorScheme="pink" size={buttonSize}>Apply</Button></Link>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};