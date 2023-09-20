import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Features from "../components/Features/Features";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import OurServices from "../components/OurServices/OurServices";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Projects from "../components/Projects/Projects";
import OurTeam from "../components/OurTeam/OurTeam.js";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Features />
      <AboutCompany />
      <OurServices />
      <WhyChooseUs />
      <Projects />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default Home;
