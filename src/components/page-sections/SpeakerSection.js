import React, { useRef } from "react";
import {
  Box,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import { useOnScreen } from "../../utils/hooks";


export const SpeakersSection = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  return (
    <Box as="section" id="speakers">
      <Box
        ref={ref}
        className="__content"
        // transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
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
          <Flex alignItems="flex-start" justifyContent="space-between" mt={5}>
            <Box flex="0 0 48%" w="48%">
              <Text as="h3" className="gradient2">
                Metaverse Week
              </Text>
              <Text>Want to take part in Metaverse Week?</Text>
              <Text>
                Find the application forms on the{" "}
                <Link href="#schedule">Schedule page</Link>
              </Text>
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
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};