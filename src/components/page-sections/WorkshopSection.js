import React, { useRef } from "react";
import {
  Box,
  Link,
  Text,
} from "@chakra-ui/react";
import { useOnScreen } from "../../utils/hooks";


export const WorkshopsSection = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  return (
    <Box as="section" id="workshops">
      <Box
        ref={ref}
        className="__content"
        maxW={{base: '100%', md: "2xl"}}
        // transform={`translate3d(${onScreen ? 0 : "-70px"}, 0, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.4s ease-in-out, opacity 0.6s 0.3s ease-in"
      >
        <Text as="h2">Workshops</Text>
        <Box className="__content__body">
          <p>Welcome to a week of pretty sweet workshops...</p>
          <Box>
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
            <Text fontSize="xxs">
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
            <Text fontSize="xxs">
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
