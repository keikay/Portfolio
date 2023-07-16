import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { Box, Image, Text } from '@chakra-ui/react';

const greeting = "Hello, I'm Kay Khine Win.";
const bio1 = "A mobile application developer who is passionate about learning new things.";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#FFFFFF"
  >
      <Image src="p1.png" borderRadius="full" boxSize={150} mx="auto" mb={4} />
      <Text fontSize="2xl" fontWeight="bold" mb={2} color="#005555">
        {greeting}
      </Text>
      <Text fontSize="lg" mb={4} color="#069A8E">
        {bio1}
      </Text>
      <Text fontSize="lg" mb={4} color="#1A5F7A">
        {/* {bio2} */}
      </Text>
      

  );
  </FullScreenSection>
);

export default LandingSection;
