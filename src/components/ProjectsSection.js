import React from "react";
import FullScreenSection from "./FullScreenSection";
import {Heading, Box } from "@chakra-ui/react";


// const projects = [
//   {
//     title: "The Breakfast Club Android App",
//     description: 
//       "Project Description: Kotlin Jetpack, Firebase, Glide, and HttpClient",
//       detail: "The app integrates HttpClient, a widely-used library for making HTTP requests in communication with external APIs, allowing the app to fetch data such as menu details and prices. The app incorporates Firebase's Realtime Database for storing and managing user data including order items. It also uses Glide for the process of loading and displaying menu images.",
//       getImageSrc: () => require("../images/a.png"),
//     url: "https://rb.gy/9w7ly"
//   },
//   {
//     title: "The Breakfast Club iOS App",
//     description: 
//     "Project Description: SwiftUI, Firebase, Glide",
//     detail:
//       "By leveraging SwiftUI for intuitive UI development, Firebase for secure user data storage, Glide for seamless image loading, and HttpClient for API integration, this restaurant iOS app project delivers a comprehensive solution for restaurant owners and customers. ",
//       getImageSrc: () => require("../images/a.png"),
//   }
// ];

const ProjectsSection = () => {
  return (
    
    <FullScreenSection
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}>
      <Heading as="h1" id="projects-section" color={"#005555"}>
     Feature Projects
      </Heading>
      <Box
  bg="white"
  borderRadius="md"
  boxShadow="md"
  p={4}
  display="flex"
  flexDirection={{ base: "column", md: "row" }}
  alignItems={{ base: "center", md: "flex-start" }}
  width="100%"
  height="auto"
>
   
<div>
  <img
      src={require("../images/register.png")}
      alt="Order"
      style={{ maxWidth: "100%", height: "auto", marginRight: "30px" }}    />
  </div>
  <div>
    <img
      src={require("../images/order.png")}
      alt="Order"
      style={{ maxWidth: "100%", height: "auto", marginLeft: "30px" }}    />
  </div>
  <table>
    <tr>
    <td>
      <div style={{ marginLeft: "50px" }}>
      <Heading as="h3" color={"#4C4C6D"}>
      The Breakfast Club Android App
      </Heading>
      </div>
    </td>
  </tr>
  <tr>
    <td>
    <div style={{ marginLeft: "50px" }}>
  <p style={{ fontSize: "18px", color: "#069A8E" }}>Project Description: Kotlin Jetpack, Firebase, Glide, HttpClient</p>
</div>

    </td>
  </tr>
  <tr style={{ height: "20px" }}> 
    <td></td>
  </tr>
  <tr>
  <td>
    <div style={{ marginLeft: "50px", color: "#001C30" }}>
      <p>
        The app integrates HttpClient, a widely-used library for making HTTP requests in communication with
        external APIs, allowing the app to fetch data such as menu details and prices. The app incorporates
        Firebase's Realtime Database for storing and managing user data including order items. It also uses Glide
        for the process of loading and displaying menu images.
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
    <a href="https://rb.gy/9w7ly" target="_blank" rel="noopener noreferrer">

      <img
        src={require("../images/play-store.png")}
        alt="Get it on Play Store"
        style={{ width: "120px", height: "50px" }}
      />
      </a>
    </div>
  </td>
</tr>
</table>
</Box>


<Box
  bg="white"
  borderRadius="md"
  boxShadow="md"
  p={4}
  display="flex"
  flexDirection={{ base: "column", md: "row" }}
  alignItems={{ base: "center", md: "flex-start" }}
  width="100%"
  height="auto"
>
   

  <table>
    <tr>
    <td>
      <div >
      <Heading as="h3" color={"#4C4C6D"}>
      The Breakfast Club iOS App
      </Heading>
      </div>
    </td>
  </tr>
  <tr>
    <td>
    <div >
  <p style={{ fontSize: "18px", color: "#1B9C85" }}>Project Description: SwiftUI, Firebase, CoreData</p>
</div>

    </td>
  </tr>
  <tr style={{ height: "20px" }}> 
    <td></td>
  </tr>
  <tr>
  <td>
    <div style={{color: "#212A3E" }}>
      <p>
      The Breakfast Club restaurant provides an application for users with a convenient way to order their favorite meals. 
This iOS food order app utilizes UserDefault, CoreData, Firebase, and API integration to deliver a user-friendly and efficient food ordering experience. 
The synchronization between local and remote data and real-time updates will ensure that users have access to the latest menus.

      </p>
    </div>
  </td>
</tr>
<tr></tr>
<tr>
  <td>
    <div style={{ marginTop: "30px", color: "#001C30" }}>
    <a href="https://i.diawi.com/CcsBRj" target="_blank" rel="noopener noreferrer">
      <img
        src={require("../images/diawi.png")}
        alt="Get it on Diawi"
        style={{ width: "120px", height: "50px" }}
      />
      </a>
    </div>
  </td>
</tr>
</table>
<div>
  <img
      src={require("../images/1.png")}
      alt="Order"
      style={{ maxWidth: "100%", height: "auto", marginRight: "30px" }}    />
  </div>
  <div>
    <img
      src={require("../images/2.png")}
      alt="Order"
      style={{ maxWidth: "100%", height: "auto", marginLeft: "30px" }}    />
  </div>
  
</Box>

<Box
  bg="white"
  borderRadius="md"
  boxShadow="md"
  p={4}
  display="flex"
  flexDirection={{ base: "column", md: "row" }}
  alignItems={{ base: "center", md: "flex-start" }}
  width="100%"
  height="auto"
>

<div>
  <img
      src={require("../images/3.png")}
      alt="Order"
      style={{ maxWidth: "100%", height: "auto", marginRight: "30px" }}    />
  </div>
  <div>
    <img
      src={require("../images/4.png")}
      alt="Order"
      style={{ maxWidth: "100%", height: "auto", marginLeft: "30px" }}    />
  </div>
  <div>
    <img
      src={require("../images/5.png")}
      alt="Order"
      style={{ maxWidth: "100%", height: "auto", marginLeft: "30px" }}    />
  </div>
</Box>

 {/* {projects.map((project) => (
    
  <Card
    key={project.title}
    title={project.title}
    description={project.description}
    detail={project.detail}
    imageSrc={project.getImageSrc()}
    url={project.url}
  />
))}


    */}
    </FullScreenSection>
  );
};

export default ProjectsSection;



