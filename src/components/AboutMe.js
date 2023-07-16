import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text } from "@chakra-ui/react";
import Card from "./Card";

const AboutSection = () => {
  return (
    <FullScreenSection isDarkBackground p={8} alignItems="flex-start" spacing={8}>
      <Heading as="h1" id="about-section" color="#537188">
        About Me
      </Heading>
      <Box
        bg="white"
        borderRadius="md"
        boxShadow="md"
        p={4}
        width="100%"
      >
        <Text fontSize="xl" color="gray.600">
          I am a passionate software developer with expertise in mobile and web application development. My goal is to create meaningful and
          user-friendly applications that provide great experiences for the users.
        </Text>
      </Box>
    </FullScreenSection>
  );
};

export default AboutSection;
