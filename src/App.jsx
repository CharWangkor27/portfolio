import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/aboutMe/AboutMe";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
