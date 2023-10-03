import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text, HStack } from "@chakra-ui/react";


const SkillsSection = () => {
  return (
    <FullScreenSection isDarkBackground p={8} alignItems="flex-start" spacing={8}>
      <Heading as="h1" id="skills-section"  style={{
        backgroundImage: "linear-gradient(45deg,  #2BFF88,#B721FF)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block", padding: "10px"
      }}>
        Skills
      </Heading>
      <Box
        bg="white"
        borderRadius="md"
        boxShadow="md"
        p={4}
        width="100%"
      >
        
        <Heading id="projects-section" style={{
        backgroundImage: "linear-gradient(45deg, #2BFF88,#B721FF)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block", padding: "10px", fontSize: "24px" 
      }}>
        Swift
      </Heading>
      <Text color="black"  padding= "10px">
      For iOS devices, I write code in Swift. My expertise in Swift allows me to create seamless user experiences and robust applications for the iOS ecosystem.        </Text>
        {/* <HStack spacing={8}>
              <a
                href="/#projects-section"
                style={{ fontWeight: "bold", color: "red"}} 
              >
                Projects
              </a>
               <a href=""
                style={{ fontWeight: "bold", color: "red"}} 
                >
                Skills
              </a>
            </HStack> */}
            <Heading id="projects-section" style={{
        backgroundImage: "linear-gradient(45deg, #2BFF88,#B721FF)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block", padding: "10px", fontSize: "24px" 
      }}>
        Kotlin
      </Heading>
      <Text color="black" padding= "10px">
      For the Android platform, I build android applications using Kotlin that deliver a superior user experience and maintainability.       
       </Text>
       
      
  
      <Heading style={{
        backgroundImage: "linear-gradient(45deg, #2BFF88,#B721FF)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block", padding: "10px", fontSize: "20px" 
      }}>
       HTML,CSS
      </Heading>
      <Heading style={{
        backgroundImage: "linear-gradient(45deg, #2BFF88,#B721FF)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block", padding: "10px", fontSize: "20px" 
      }}>
        React.js
      </Heading>
      <Heading id="projects-section" style={{
        backgroundImage: "linear-gradient(45deg, #2BFF88,#B721FF)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block", padding: "10px", fontSize: "20px" 
      }}>
        Figma
      </Heading>
      <Text color="black" padding= "10px">
      I use HTML, CSS, React.js, and using Figma for design. I am a passionate software developer with expertise in mobile and web application development.
        </Text>
      </Box>
    </FullScreenSection>
  );
};

export default SkillsSection;
