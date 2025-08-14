import React from "react";
import Banner from "../Banner";
import Social from "../Social";
import AboutMe from "../AboutMe";
import SkillsSection from "../Skills";
import Projects from "../Project";
import ContactSection from "../ContactSection";

const Home = () => {
  return (
    <div>
      <div className="relative z-30">
        <Banner />
      </div>

      <Social />
      <AboutMe />
      <SkillsSection />
      <Projects />
      <ContactSection/>
    </div>
  );
};

export default Home;
