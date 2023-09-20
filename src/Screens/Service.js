import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Heading from "../components/Heading";
import OurServices from "../components/OurServices/OurServices";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Projects from "../components/Projects/Projects";

function Service() {
  return (
    <div>
      <Navbar />

      <Heading
        title="Service"
        breadcrumbs={[
          { text: "Home", link: "/" },
          { text: "Service", link: "/service" },
        ]}
      />

      <WhyChooseUs />
      <OurServices />
      <Projects />

      <Footer />
    </div>
  );
}

export default Service;
