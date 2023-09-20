import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiPhoneOutgoing } from "react-icons/bi";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Heading from "../components/Heading";
import Detail from "../components/WhyChooseUs/Detail";
import SendMessage from "../components/SendMessage";

function Contact() {
  return (
    <div>
      <Navbar />
      <Heading
        title="Let's Connect"
        breadcrumbs={[
          { text: "Home", link: "/" },
          { text: "Contact", link: "/contact" },
        ]}
      />
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-md-6 col-lg-4 mb-4"
            style={{ border: "1px solid lightgrey" }}
          >
            <Detail
              icon={<FaLocationDot />}
              title={"Visit Us"}
              text={"New York, NY 10012, US"}
            />
          </div>
          <div
            className="col-md-6 col-lg-4 mb-4"
            style={{ border: "1px solid lightgrey" }}
          >
            <Detail
              icon={<BiPhoneOutgoing />}
              title={"Call Us"}
              text={"+ 01 234 567 88"}
            />
          </div>
          <div
            className="col-md-6 col-lg-4 mb-4"
            style={{ border: "1px solid lightgrey" }}
          >
            <Detail
              icon={<MdEmail />}
              title={"Email Us"}
              text={"info@example.com"}
            />
          </div>
        </div>
      </div>

      <div
        className="container mt-5"
        style={{
          backgroundColor: "#ffef9e",
          padding: "50px",
        }}
      >
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-4">
              Leave Us a Message for Any Information
            </h1>
          </div>
          <div className="col-md-10 col-lg-8 mx-auto">
            <SendMessage />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
