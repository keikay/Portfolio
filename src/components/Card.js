import { Heading, HStack, Image, Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, detail, imageSrc, url }) => {
  return (
    <Box
    bg="white"
    borderRadius="md"
    boxShadow="md"
    p={4}
    display="flex"
    flexDirection={{ base: "column", md: "row" }}
    alignItems={{ base: "center", md: "flex-start" }}
    width="100%"
   // maxWidth="900px"
    height="auto"
  >
    <Image src={imageSrc} alt={title} maxH={350} maxW="100%" objectFit="cover" />
    <Box ml={{ base: 0, md: 4 }}>
      <Heading as="h3" fontSize="lg" my={4} color="gray.700">
        {title}
      </Heading>
      <Text color="gray.700" my={4}>
        {description}
      </Text>
      <Text color="gray.600" my={4}>
        {detail}
      </Text>
      <br></br>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={require("../images/play-store.png")}
          alt="Get it on Play Store"
          style={{ width: "120px", height: "50px" }}
        />
      </a>
    </Box>
  </Box>
  );
};

export default Card;