import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";


const ProjectsSection = () => {
  return (

    <FullScreenSection
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}>
      <Heading as="h1" id="projects-section" style={{
        backgroundImage: "linear-gradient(45deg, #CB33BD,#3EECAC)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block", padding: "10px"
      }}>
        Feature Projects
      </Heading>



      <Box
        bg="black"
        borderRadius="md"
        boxShadow="md"
        p={4}
        display="flex"
        flexDirection={{ base: "column", md: "column" }}
        alignItems={{ base: "center", md: "flex-start" }}
        width="100%"
        height="auto"
      >
        <Box
          display="flex"
          flexDirection="row" // Display images horizontally
          justifyContent="space-between" // Adjust spacing between images as needed
          style={{ marginBottom: "20px" }}
        >
          <div>
            <img
              // src={require("../images/home.png")}
              src={require("../images/ik1.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div>
            <img
              //  src={require("../images/grammarlist.png")}
              src={require("../images/ik2.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div>
            <img
              // src={require("../images/search.png")}
              src={require("../images/ik4.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div>
            <img
              // src={require("../images/grammardetail.png")}
              src={require("../images/ik3.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </Box>

        <Box
          display="flex"
          flexDirection="column" // Display text content vertically
          marginTop={{ base: "20px", md: 0 }} // Adjust margin as needed
          color="#001C30"
        >
          <div>
            <table>
              <tr>
                <td>
                  <div style={{ marginLeft: "50px" }}>
                    <Text fontSize="25px" mb={4} color="#069A8E" fontFamily="Comfortaa, sans-serif" fontWeight={"bold"} style={{
                      backgroundImage: "linear-gradient(45deg, #CB33BD,#0DC185)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      display: "inline-block"
                    }}>
                      Kei Japanese Grammar Learning iOS App
                    </Text>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style={{ marginLeft: "50px" }}>
                    <p style={{ fontSize: "18px", color: "#0DC185" }}>Project Description: SwiftUI, Firestore</p>
                  </div>

                </td>
              </tr>
              <tr style={{ height: "20px" }}>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div style={{ marginLeft: "50px", color: "#0DC185" }}>
                    <p> Kei iOS application is designed to facilitate japanese grammar learning for Myanmar students. 
                    The app's user interface is built using SwiftUI, ensuring a native and responsive design that adapts to various iOS devices.
                      Firestore is used as the backend database to store and synchronize data in real-time.
                    </p>
                  </div>
                </td>
              </tr>
              <tr style={{ height: "20px" }}>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div style={{ marginLeft: "50px", color: "#001C30" }}>
                    <a href="https://apps.apple.com/app/id6458788615" target="_blank" rel="noopener noreferrer">

                      <img
                        src={require("../images/appstore.png")}
                        alt="Get it on App Store"
                        style={{ width: "160px", height: "100px" }}
                      />
                    </a>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </Box>

      </Box>

      //Kei Android
      <Box
        bg="black"
        borderRadius="md"
        boxShadow="md"
        p={4}
        display="flex"
        flexDirection={{ base: "column", md: "column" }}
        alignItems={{ base: "center", md: "flex-start" }}
        width="100%"
        height="auto"
      >
        <Box
          display="flex"
          flexDirection="row" // Display images horizontally
          justifyContent="space-between" // Adjust spacing between images as needed
          style={{ marginBottom: "20px" }}>
          <div style={{ marginRight: "10px" }}>
            <img
              src={require("../images/rk1.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div style={{ marginRight: "10px" }}>
            <img
              src={require("../images/rk2.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div style={{ marginRight: "10px" }}>
            <img
              src={require("../images/rk3.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div style={{ marginRight: "10px" }}>
            <img
              src={require("../images/rk4.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </Box>

        <Box
          display="flex"
          flexDirection="column" // Display text content vertically
          marginTop={{ base: "20px", md: 0 }} // Adjust margin as needed
          color="#001C30"
        style={{ marginBottom: "20px" }}>
          <div>
            <table>
              <tr>
                <td>
                  <div style={{ marginLeft: "50px" }}>
                    <Text fontSize="25px" mb={4} color="#069A8E" fontFamily="Comfortaa, sans-serif" fontWeight={"bold"} style={{
                      backgroundImage: "linear-gradient(45deg, #CB33BD,#0DC185)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      display: "inline-block"
                    }}>
                      Kei Japanese Grammar Learning Android App
                    </Text>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style={{ marginLeft: "50px" }}>
                    <p style={{ fontSize: "18px", color: "#0DC185" }}>Project Description: Kotlin, Firestore</p>
                  </div>

                </td>
              </tr>
              <tr style={{ height: "20px" }}>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div style={{ marginLeft: "50px", color: "#0DC185" }}>
                    <p>
                    The app's user interface is constructed with Jetpack Compose, guaranteeing a native and adaptive design that adjusts 
                    seamlessly to different Android devices. Firebase Firestore serves as the backend database,
                     facilitating real-time data storage and synchronization.
                  

                    </p>
                  </div>
                </td>
              </tr>
              <tr></tr>


              {/* <tr>
                <td>
                  <div style={{ marginLeft: "50px", color: "#001C30" }}>
                    <a href="https://play.google.com/store/apps/details?id=com.kkw.kei" target="_blank" rel="noopener noreferrer">

                      <img
                        src={require("../images/play-store.png")}
                        alt="Get it on Play Store"
                        style={{ width: "180px", height: "70px" }}
                      />
                    </a>
                  </div>
                </td>
              </tr> */}
            </table>
          </div>
        </Box>

      </Box>



//Breakfast iOS
      <Box
        bg="black"
        borderRadius="md"
        boxShadow="md"
        p={4}
        display="flex"
        flexDirection={{ base: "column", md: "column" }}
        alignItems={{ base: "center", md: "flex-start" }}
        width="100%"
        height="auto"
      >
        <Box
          display="flex"
          flexDirection="row" // Display images horizontally
          justifyContent="space-between" // Adjust spacing between images as needed
          style={{ marginBottom: "20px" }}>
          <div>
            <img
              src={require("../images/ib1.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div>
            <img
              src={require("../images/ib2.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div>
            <img
              src={require("../images/ib3.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div>
            <img
              src={require("../images/ib4.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </Box>

        <Box
          display="flex"
          flexDirection="column" // Display text content vertically
          marginTop={{ base: "20px", md: 0 }} // Adjust margin as needed
          color="#001C30"
        >
          <div>
            <table>
              <tr>
                <td>
                  <div style={{ marginLeft: "50px" }}>
                    <Text fontSize="25px" mb={4} color="#069A8E" fontFamily="Comfortaa, sans-serif" fontWeight={"bold"} style={{
                      backgroundImage: "linear-gradient(45deg, #CB33BD,#0DC185)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      display: "inline-block"
                    }}>
                      The Breakfast Club food ordering iOS App
                    </Text>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style={{ marginLeft: "50px" }}>
                    <p style={{ fontSize: "18px", color: "#0DC185" }}>Project Description: SwiftUI, Firebase, CoreData</p>
                  </div>

                </td>
              </tr>
              <tr style={{ height: "20px" }}>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div style={{ marginLeft: "50px", color: "#0DC185" }}>
                    <p>
                      The Breakfast Club iOS food order app utilizes UserDefault, CoreData, Firebase, and API integration to deliver a user-friendly food ordering experience. 
                      The synchronization between local and remote data and real-time updates will ensure that users have access to the latest menus. 
                      For the sake of my portfolio, I opted to use a public API instead of the client's API. You may access test beta versions through Diawi.
                    </p>
                  </div>
                </td>
              </tr>
              {/* <tr>
                <td>
                  <div style={{ marginLeft: "50px", marginTop: "30px", color: "#001C30" }}>
                    <a href="https://i.diawi.com/v6ctVo" target="_blank" rel="noopener noreferrer">
                      <img
                        src={require("../images/diawi.png")}
                        alt="Get it on Diawi"
                        style={{ width: "100px", height: "50px" }}
                      />
                    </a>
                  </div>
                </td>
              </tr> */}
            </table>
          </div>
        </Box>

      </Box>


    
//Breakfast Android
      <Box
        bg="black"
        borderRadius="md"
        boxShadow="md"
        p={4}
        display="flex"
        flexDirection={{ base: "column", md: "column" }}
        alignItems={{ base: "center", md: "flex-start" }}
        width="100%"
        height="auto"
      >
        <Box
          display="flex"
          flexDirection="row" // Display images horizontally
          justifyContent="space-between" // Adjust spacing between images as needed
          style={{ marginBottom: "20px" }} >
          <div style={{ marginRight: "10px" }}>
            <img
              src={require("../images/rab1.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div style={{ marginRight: "10px" }}>
            <img
              src={require("../images/rab2.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div style={{ marginRight: "10px" }}>
            <img
              src={require("../images/rab3.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div style={{ marginRight: "10px" }}>
            <img
              src={require("../images/rab4.png")}
              alt="Order"
              style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </Box>

        <Box
          display="flex"
          flexDirection="column" // Display text content vertically
          marginTop={{ base: "20px", md: 0 }} // Adjust margin as needed
          color="#001C30"
        >
          <div>
            <table>
              <tr>
                <td>
                  <div style={{ marginLeft: "50px" }}>
                    <Text fontSize="25px" mb={4} color="#069A8E" fontFamily="Comfortaa, sans-serif" fontWeight={"bold"} style={{
                      backgroundImage: "linear-gradient(45deg, #CB33BD,#0DC185)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      display: "inline-block"
                    }}>
                      The Breakfast Club Food Ordering Android App
                    </Text>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style={{ marginLeft: "50px" }}>
                    <p style={{ fontSize: "18px", color: "#0DC185" }}>Project Description: Kotlin Jetpack, Firebase, Glide, and HttpClient</p>
                  </div>

                </td>
              </tr>
              <tr style={{ height: "20px" }}>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div style={{ marginLeft: "50px", color: "#0DC185" }}>
                    <p>
                    The app integrates HttpClient in communication with external APIs to fetch data such as menu details, 
                    images and prices. The app incorporates Firebase's Realtime Database for storing and managing user data 
                    including order items. It also uses Glide for the process of loading and displaying menu images.  For the sake of my portfolio, I opted to use a public API instead of the client's API. 
                    </p>
                  </div>
                </td>
              </tr>
              <tr></tr>
              {/* <tr>
                <td>
                <div style={{ marginLeft: "50px", color: "#001C30" }}>
                    <a href="https://rb.gy/9w7ly" target="_blank" rel="noopener noreferrer">

                      <img
                        src={require("../images/play-store.png")}
                        alt="Get it on Play Store"
                        style={{ width: "180px", height: "70px" }}
                      />
                    </a>
                  </div>
                </td>



              </tr>
              */}
            </table>
          </div>
        </Box>

      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;



