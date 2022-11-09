import { Box, Heading } from "@chakra-ui/react";
import { StyledBox } from "./theme-toggle-button";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";

export default function Loading({ isVisible }: { isVisible: Boolean }) {
  return (
    <AnimatePresence initial={false}>
      {!isVisible && (
        <StyledBox
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: "0.4", type: "easeInOut" }}
          height="110vh"
          width="100%"
          bg="#000000"
          position="absolute"
          top="0"
          zIndex="999"
          justify-content="center"
          align-items="center"
          display="flex"
        >
          <Box className="progress" m="auto">
            <Box className="progress-value"></Box>
          </Box>
        </StyledBox>
      )}
    </AnimatePresence>
  );
}
