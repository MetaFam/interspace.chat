import React, {useRef} from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Image,
  useBreakpoint,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { BiWalletAlt } from 'react-icons/bi'

import { useDisabledGeneralNotify, useOnScreen } from "../utils/hooks";

import MF2Logo from "../static/assets/img/mf2-logo.png";
// import MetaGameLogo from '../static/assets/img/logo.png'

const Links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Schedule",
    href: "#schedule",
  },
  {
    name: "Workshops",
    href: "#workshops",
  },
  {
    name: "Speakers",
    href: "#speakers",
  },
  {
    name: "MetaFest-a-verse",
    href: "#metafest-verse",
  },
  {
    name: "Chat",
    href: "#chat",
  },
  {
    name: "Apply",
    href: "#apply",
  },
];



export function SiteHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef(null);
  const linkRef = useRef(null);
  const onScreen = useOnScreen(ref);
  const linkOnScreen = useOnScreen(linkRef)
  const disabledGenNotify = useDisabledGeneralNotify();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const screenSize = useBreakpoint()
  console.log('s',screenSize);

  const NavLink = ({ href, children, offset }) => (
    <Link
      ref={linkRef}
      fontWeight={{ base: 500, lg: 700 }}
      px={2}
      py={1}
      rounded={"md"}
      textShadow="0 0 10px rgba(0, 0, 0, 0.8)"
      opacity={!linkOnScreen ? 1 : 0}
      transform={`translate3d(${!linkOnScreen ? 0 : -200}, 0, 0)`}
      transition={`all 0.2s ${0.6 + offset}s ease`}
      _hover={{
        textDecoration: "none",
        background: "linear-gradient(-90deg, #FF61E6 -29.22%, #7C56FF 107.53%)",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      href={href}
      onClick={handleToggle}
      color="white"
    >
      {children}
    </Link>
  );


  return (
    <>
      <Box
        ref={ref}
        as="header"
        bg="transparent"
        position="fixed"
        top={0}
        px={4}
        w="100%"
        maxW="100vw"
        h={{base: '75px', md: "100px"}}
        // transform={`translate3d(0, ${onScreen ? 0 : "-70px"}, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 1s ease-in-out, opacity 0.6s 0.8s ease-in"
        zIndex={2000}
        sx={{
          a: {
            color: "white",
          },
        }}
      >
        <Flex
          h={{base: '75px', md: "100px"}}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box width={{ base: "25%" }} h="2.5rem" overflow="visible" sx={{
            d: {base: 'inline-flex', md: 'none'},
          }}>
            <Button
              onClick={handleToggle}
              sx={{
                alignSelf: "center",
                justifySelf: "right",
                position: "relative",
                flexDirection: "column",
                justifyContent: "space-around",
                overflow: 'visible',
                w: { base: "2.25rem" },
                h: { base: "2.25rem" },
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
                mx: 0,
                zIndex: 2003,
                "&:hover, &:focus,  &[data-hover]": {
                  outline: "none",
                  background: "transparent",
                  boxShadow: "none",
                },
                div: {
                  w: "100%",
                  h: "100%",
                  p: 0,
                  transition: "all 0.3s linear",
                  position: "relative",
                  transformOrigin: "1px",
                },
                "path, circle": {
                  fill: isOpen ? "transparent" : "transparent",
                  transition: "all 0.2s 0.2s ease",
                  stroke: isOpen ? "#7C56FF" : "#927CFF",
                },
                ".top-line": {
                  transition: "all 0.6s ease",
                  transform: isOpen
                    ? "rotate(-405deg) translate3d(1px, 3px, 0)"
                    : "rotate(0)",
                  transformOrigin: "center",
                },
                ".bottom-line": {
                  transition: "all 0.6s ease",
                  transform: isOpen
                    ? "rotate(405deg) translate3d(0px, -4px, 0)"
                    : "rotate(0)",
                  transformOrigin: "center",
                },
              }}
            >
              <MenuIcon2SVG toggle={isOpen} />
            </Button>
          </Box>
          <HStack spacing={8} alignItems={"center"}>
            <Link href="#home" flex={{base: 1}}>
              <Image
                src={MF2Logo}
                alt="MetaGame Logo"
                boxSize={{ base: "65px", md: "95px" }}
                objectFit="cover"
                transform={{ md: "translateY(15px) translateX(10px)" }}
                sx={{
                  transition: 'all 0.2s 0.1s ease',
                  filter: "drop-shadow(0 0 15px rgba(0,0,0,0.6))",
                  _hover: {
                    filter: "drop-shadow(0 0 15px #FF61E696)",
                  }
                }}
              />
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, i) => (
                <NavLink key={`desktop-${link.name}`} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center" justifyContent="end" width={{ base: "25%", md: 'auto' }}>
            {screenSize !== 'base' ? (
              <Button
                variant={"solid"}
                colorScheme={"purple"}
                boxShadow="0 0 10px rgba(0, 0, 0, 0.6)"
                size="sm"
                mr={0}
                onClick={disabledGenNotify}
              >
                Connect
              </Button>
            ) : (
              <IconButton
              icon={<BiWalletAlt />}
              aria-label="Connect Web3 wallet"
              flex={0}
              fontSize={{base: '12vmin', lg: "2vmax"}}
              colorScheme="ghost"
              color="#927CFF"
              onClick={disabledGenNotify}
              alignSelf="center"
              // filter="drop-shadow(0 0 15px #FF61E6)"
            />
            )}
          </Flex>
        </Flex>

        {/* {isOpen ? ( */}
          <Box
            display={{ base: "flex", md: "none" }}
            position="fixed"
            top={0}
            left={0}
            w="100%"
            minW="100%"
            minH="100vh"
            alignItems="center"
            justifyContent="center"
            p={5}
            pt="100px"
            bg="linear-gradient(0deg, rgba(41,2,80,0.1) 0%, rgba(25,0,50,0.5) 40%)"
            backdropFilter="blur(7px)"
          transition="transform 0.3s 0.1s ease, opacity 0.3s 0.2s"
          boxShadow="0 0 15px #00000070"

          opacity={isOpen ? 1 : 0}
            transform={`translate3d(0, ${isOpen ? 0 : '-100vh'}, 0)`}
            zIndex={-1}
          >
            <Stack as={"nav"} spacing={4} height="auto">
              {Links.map((link) => (
                <NavLink key={`mobile-${link.name}`} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        {/* ) : null} */}
      </Box>
    </>
  );
}

export const MenuIcon2SVG = ({ toggle }) => (
  <Box>
    <Box
      as="svg"
      w={{ base: "100%", xl: "2.5rem", "4xl": "2.9rem" }}
      h="100%"
      overflow="visible"
      transition="transform 0.5s ease"
      transform={toggle ? "rotate(-90deg)" : "rotate(0)"}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 48 48"
    >
      <path
        d="M46.8937 23.64C46.8937 36.4827 36.4827 46.8937 23.64 46.8937C10.7973 46.8937 0.386262 36.4827 0.386262 23.64C0.386262 10.7973 10.7973 0.386262 23.64 0.386262C36.4827 0.386262 46.8937 10.7973 46.8937 23.64Z"
        className="circle"
        stroke="white"
        strokeOpacity={1}
        strokeWidth={4}
      />
      <path
        d="M32.6262 20.7609L13.8833 20.7612"
        className="top-line"
        stroke="white"
        strokeWidth={4}
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
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Box>
  </Box>
);
