import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer/Footer";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import OurTeam from "../components/OurTeam/OurTeam";

function About() {
  return (
    <div>
      <Navbar />
      <Heading
        title="About"
        breadcrumbs={[
          { text: "Home", link: "/" },
          { text: "About", link: "/about" },
        ]}
      />
      <AboutCompany />
      <WhyChooseUs />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default About;
