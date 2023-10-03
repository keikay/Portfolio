import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutMe";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <ChakraProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <AboutSection/>
         {/* <SkillsSection/> */}
          <Footer />      
        </main>   
    </ChakraProvider>
  );
}

export default App;
