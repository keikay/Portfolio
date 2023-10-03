import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text } from "@chakra-ui/react";
import Card from "./Card";

const AboutSection = () => {
  return (
    <FullScreenSection isDarkBackground p={8} alignItems="flex-start" spacing={8}>
      <Heading as="h1" id="about-section" style={{
        backgroundImage: "linear-gradient(45deg,  #2BFF88,#B721FF)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block", padding: "10px"
      }}>
        About Me
      </Heading>
      <Box
        bg="black"
        borderRadius="md"
        boxShadow="md"
        p={4}
        width="100%"
      >
        <Text color="white" fontSize="lg" > I am a software application developer with a background in both corporate company and freelance work environments.
          I am a good team player and passionate about continuously learning new things.
        </Text>
        <br />
        <Text color="#0DC185" fontSize="xl" fontWeight="bold" style={{
          backgroundImage: "linear-gradient(45deg,  #00DBDE,#EE74E1)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          display: "inline-block"
        }}>
Education        </Text>
        <br></br><br></br>
        <a>Master of Computer Science</a>
        <br></br>
        <a>University of Computer Studies, Mandalay</a>

        <br></br>
       
        <br />
        <Text color="#0DC185" fontSize="xl" fontWeight="bold" style={{
          backgroundImage: "linear-gradient(45deg,  #00DBDE,#EE74E1)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          display: "inline-block"
        }}>
          Professional Development
        </Text>
        <br></br><br></br>

        <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/5GC9PZHKXBW8" class="underlined-link">Google UX Design</a>
        <br></br>
        <br></br>
       
        <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/7PSHKE47H3EK" class="underlined-link">Google Cybersecurity</a><br></br> <br></br>

        <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/FPXDPSFVQXBV" class="underlined-link">Google Project Management</a><br></br> <br></br>

        <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/TKKJGYGTQ633" class="underlined-link">Fintech Innovations</a> <br></br> <br></br>
        <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/X9WMF2QB5RBV" class="underlined-link">Meta Android Developer</a><br></br> <br></br>

<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/JZT9P2LP4DKW" class="underlined-link">Meta iOS Developer</a><br></br> <br></br>

<a href="https://graduation-api.udacity.com/api/certificate/REU2QU96/download" class="underlined-link">Android Developer Nanodegree</a> <br></br> <br></br>

      </Box>

    </FullScreenSection>
  );
};

export default AboutSection;
