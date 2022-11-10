import { Box, Heading } from "@chakra-ui/react";
import { StyledBox } from "./theme-toggle-button";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import useSound from "use-sound";
import { useState } from "react";
declare module "*.mp3";
export default function EnterPage({ isVisible }: { isVisible: Boolean }) {
  const [play] = useSound("/sound/enterbtn.mp3");
  play();
  const [Hidden, setHidden] = useState(isVisible);
  const hide = () => {
    setHidden(true);
    play();
  };
  return (
    <AnimatePresence initial={false}>
      {!Hidden && (
        <StyledBox
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: "0.4", type: "easeInOut" }}
          height="100vh"
          width="100%"
          bg="#000000"
          position="absolute"
          top="0"
          zIndex="2"
          justify-content="center"
          align-items="end"
          display="flex"
        >
          <Box m="auto" textAlign={"center"}>
            <StyledBox
              className="hvr-underline-from-center"
              mt="50%"
              animate={{
                textShadow: `0px 0px 0px transparent`,
              }}
              whileHover={{
                textShadow: `0 0 0 #fafafa86, 0 0 2px #fafafa86, 0 0 2px #fafafa68, 0 0 2px #fafafa68, 0 0 2px #fafafa68, 0 0 2px #fafafa68, 0 0 2px #fafafa68`,
                cursor: "pointer",
              }}
              transition={{
                duration: "1",
                ease: "easeInOut",
              }}
            >
              <Heading
                transition="0.2s linear"
                fontSize="72px"
                fontFamily="spaceage"
                onClick={() => hide()}
              >
                Y
              </Heading>
            </StyledBox>
            <StyledBox mt="95%">
              <Heading fontSize="lg" mb="50px" fontWeight={"hairline"}>
                This website uses audio to enhance your experience.
              </Heading>
              <Heading fontSize="sm" fontWeight={"thin"}>
                {new Date().getFullYear()} Yukon Cybernetics. All rights
                reserved.
              </Heading>
            </StyledBox>
          </Box>
        </StyledBox>
      )}
    </AnimatePresence>
  );
}