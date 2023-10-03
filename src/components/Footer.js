import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
    backgroundColor="transparent" // Set the background color to transparent
  >
    <footer style={{ backgroundImage: "linear-gradient(45deg, #74EBD5, #D0BFFF)" }}>

      <Flex
        margin="0 auto"
        px={12}
        color="white"
        justifyContent="center"
        alignItems="center"
        maxWidth="1024px"
        height={16}
      >
        <p style={{ fontWeight: "bold", color: "#322653" }}>Kay Khine Win • © 2023</p>      </Flex>
    </footer>
  </Box>
  
  );
};
export default Footer;
