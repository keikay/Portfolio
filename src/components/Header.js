import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:kkw19.win@gmail.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/kay-khine-win/",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const headerRef = useRef(null);

  const handleClick = (e, anchor) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const headerStyles = {
    transform: visible ? "translateY(0)" : "translateY(-200px)",
    transition: "transform 0.3s ease-in-out",
  };

  const gradientBackground = {
    background: "linear-gradient(45deg, #00CED1, #00BFFF)",
    // Adjust the gradient colors as needed
  };

  return (
    // <Box
    //   position="fixed"
    //   top={0}
    //   left={0}
    //   right={0}
    //   zIndex={999}
    //   transformY={0}
    //   transitionProperty="transform"
    //   transitionDuration=".3s"
    //   transitionTimingFunction="ease-in-out"
    //   style={{
    //     background: "linear-gradient(45deg, #74EBD5, #D0BFFF)",

    //   }}
    // >
      <Box color="white" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          style={{
            background: "linear-gradient(45deg, #3EECAC,#8F14C7)" //#D0BFFF//#CCA4F7
          }}
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social) => (
                <a key={social.url} href={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                href="/#projects-section"
                onClick={(e) => handleClick(e, "projects")}
                style={{ fontWeight: "bold" }} // Add this style for bold font
              >
                Projects
              </a>
              <a
                href="/#about-section"
                onClick={(e) => handleClick(e, "about")}

                //href="/#skills-section"
                //onClick={(e) => handleClick(e, "skills")}
                style={{ fontWeight: "bold"}} 
              >
                About Me
              </a>
            </HStack>

          </nav>
        </HStack>
      </Box>
   
  );
};

export default Header;
