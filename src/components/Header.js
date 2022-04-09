import React, { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import MF2Logo from '../static/assets/img/mf2-logo.png'
// import MetaGameLogo from '../static/assets/img/logo.png'

const Links = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'Schedule',
    href: '#schedule',
  },
  {
    name: 'Speakers',
    href: '#speakers',
  },
  {
    name: 'CryptoVoxels',
    href: '#cryptovoxels',
  },
  {
    name: 'Contact',
    href: '#contact'
  }
  ];

const NavLink = ({ href, children }) => (
  <Link
    fontWeight={700}
    px={2}
    py={1}
    rounded={'md'}
    textShadow="0 0 10px rgba(0, 0, 0, 0.8)"
    transition="all 0.2s ease"
    _hover={{
      textDecoration: 'none',
        background:
          'linear-gradient(-90deg, #FF61E6 -29.22%, #7C56FF 107.53%)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }}
    href={href}
  color="white">
    {children}
  </Link>
);

export function SiteHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="transparent"
        position="fixed"
        px={4}
        w="100%"
        h={'100px'}
        zIndex={2000}
      >
        <Flex h={'100px'} alignItems={'center'} justifyContent={'space-between'}>

          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            />
        <HStack spacing={8} alignItems={'center'}>
        <Link href="#home" w="100px">
            <Image
              src={MF2Logo}
              alt="MetaGame Logo"
              w="100px"
              h="auto"
              transform="translateY(15px) translateX(10px)"
              />
              </Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={`desktop-${link.name}`} href={link.href}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              // className="gradient"
              colorScheme={'purple'}
              size={'lg'}
              mr={4}>
              Connect
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}