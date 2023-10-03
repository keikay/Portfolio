import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Text } from "@chakra-ui/react";
import '../App.css';
const greeting = "Kay Khine Win";
const bio1 = "A mobile application developer who is passionate about learning new things.";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#FFFFFF"
  >
    {/* <img
      src={require("../images/p5.png")}
      alt="Get it on Diawi"
      style={{
        width: "120px",
        height: "120px",
        borderRadius: "full",
        boxSize: "150",
        marginX: "auto",
        marginBottom: "4px",
      }}
    /> */}

    <Text
      fontSize="35px"
      fontWeight="bold"
      mb={2}
      fontFamily="Comfortaa, sans-serif"
      style={{
        backgroundImage: "linear-gradient(45deg, #0DC185, #CB33BD)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block"
      }}//#EE74E1
    >    
      {greeting}
    </Text>
    <Text fontSize="25px" mb={4} color="#069A8E" fontFamily="Comfortaa, sans-serif" style={{
        backgroundImage: "linear-gradient(45deg, #CB33BD,#0DC185)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block"
      }}>
      {bio1}
    </Text>
    <Text fontSize="lg" mb={4} color="#1A5F7A">
      {/* {bio2} */}
    </Text>
  </FullScreenSection>
);

export default LandingSection;
