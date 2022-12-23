import React from "react";
import "./App.scss";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
