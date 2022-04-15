import React, {useRef} from "react";
import {
  Box,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useOnScreen } from "../utils/hooks";
// import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import OctopusImg from "../static/assets/img/octopus.png";
// import MetaGameLogo from '../static/assets/img/logo.png'

export function SiteFooter() {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  return (
      <Box
        ref={ref}
        as="footer"
        bg="transparent"
        position="absolute"
        bottom={0}
        left={0}
        px={4}
        w="100vw"
        h={{base: '60px', md: "100px"}}
        // transform={{md: `translate3d(0, ${onScreen ? 0 : "70px"}, 0)`}}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
        zIndex={2000}
        sx={{
          a: {
            color: "white",
          },
        }}
      >
        <Image
          src={OctopusImg}
          boxSize={{base: '90px', md: "150px"}}
          position="absolute"
          bottom={0}
          left={{base: "calc(50% - 45px)", md: "calc(50% - 75px)"}}
        />
        <Flex h={"100px"} alignItems={"center"} justifyContent={"center"}>
          <Box className="gradient2">
            <Text textShadow="none" ><span role="img" aria-label="Octopus mascot">🐙</span> &copy; 2022 MetaFam <span role="img" aria-label="Octopus mascot">🐙</span> <Link href="https://metagame.wtf" isExternal>metagame.wtf</Link> <span role="img" aria-label="Octopus mascot">🐙</span></Text>
          </Box>
        </Flex>
      </Box>
  );
}

export const MenuIcon2SVG = ({ toggle }) => (
  <Box>
    <Box
      as="svg"
      w={{ base: "2.25rem", xl: "2.5rem", "4xl": "2.9rem" }}
      position="absolute"
      ml={0.5}
      mt={0.5}
      left={0}
      bottom={0}
      top={0}
      transition="transform 0.5s ease"
      transform={toggle ? "rotate(-90deg)" : "rotate(0)"}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 48 48"
    >
      <path
        d="M46.8937 23.64C46.8937 36.4827 36.4827 46.8937 23.64 46.8937C10.7973 46.8937 0.386262 36.4827 0.386262 23.64C0.386262 10.7973 10.7973 0.386262 23.64 0.386262C36.4827 0.386262 46.8937 10.7973 46.8937 23.64Z"
        stroke="white"
        strokeOpacity={0.9}
        strokeWidth={1}
      />
      <path
        d="M32.6262 20.7609L13.8833 20.7612"
        className="top-line"
        stroke="white"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={
          toggle
            ? "M32.6258 27.5447L13.8835 27.5447"
            : "M26.7258 27.5447L13.8835 27.5447"
        }
        className="bottom-line"
        stroke="white"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Box>
  </Box>
);
