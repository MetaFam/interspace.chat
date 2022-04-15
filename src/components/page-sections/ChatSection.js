import React, { useRef, useState } from "react";
import { Box, Button, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ChatInstance from "../integrations/ChatInstance";
import { useOnScreen } from "../../utils/hooks";

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
    <Box
      as="section"
      id="chat"
      justifyContent={{ base: "flex-end", lg: "inherit" }}
    >
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
          willChange={true}
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
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.5s ease-in"
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
          width="100vw"
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
