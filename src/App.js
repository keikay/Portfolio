import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutMe";

function App() {
  return (
    <ChakraProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <AboutSection/>
          <Footer />      
        </main>   
    </ChakraProvider>
  );
}

export default App;
