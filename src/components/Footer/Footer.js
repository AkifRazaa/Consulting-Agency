import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import footerLogo from "../../assests/images/footerLogo.png";

import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiPhoneOutgoing,
} from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaRegClock, FaLocationDot } from "react-icons/fa6";

const MOBILE_MAX_WIDTH = 767;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleSubscribeClick = () => {
    // Check if email is empty
    if (!email.trim()) {
      alert("Email is required!");
      return;
    }

    // Perform input validation
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      alert("Invalid Email!");
      return;
    }

    // If email is valid, display an alert
    alert("Subscribed successfully!");
    setEmail("");
    console.log(email);
  };

  const validateEmail = (email) => {
    // Simple email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isMobileView = window.innerWidth <= MOBILE_MAX_WIDTH;

  return (
    <>
      <section id="newsLetter" style={{ backgroundColor: "#f0efea" }}>
        <div className="container mt-5 p-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>
                Get updates by <br /> signing up for our newsletter
              </h1>
            </div>
            <div className="col-md-6">
              <div className="mt-4">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  style={{
                    padding: "10px",
                    border: `1px solid ${isEmailValid ? "#ddd" : "red"}`,
                    borderRadius: "15px",
                    marginRight: "10px",
                    width: isMobileView ? "100%" : "70%",
                  }}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(true); // Reset validation when input changes
                  }}
                />
                <Button
                  text={"Subscribe"}
                  backgroundColor="#fad783"
                  hoverColor="#eecb4c"
                  onClick={handleSubscribeClick}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MDBFooter
        className="text-center text-lg-start text-muted"
        style={{ backgroundColor: "#0e0f21" }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <Link
              to="https://www.linkedin.com/in/akifraza/"
              className="me-4 text-reset"
              target="_blank"
            >
              <BiLogoLinkedinSquare style={{ fontSize: "25px" }} />
            </Link>
            <Link
              to="https://twitter.com/AkifRazaa"
              className="me-4 text-reset"
              target="_blank"
            >
              <BiLogoTwitter style={{ fontSize: "25px" }} />
            </Link>
            <Link to="#" className="me-4 text-reset">
              <BiLogoFacebook style={{ fontSize: "25px" }} />
            </Link>

            <Link to="#" className="me-4 text-reset">
              <BiLogoInstagram style={{ fontSize: "25px" }} />
            </Link>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className=" mb-4">
                <Link>
                  <img
                    src={footerLogo}
                    alt="Logo"
                    style={{
                      width: "200px",
                      height: "70px",
                    }}
                    className="text-uppercase fw-bold mb-3"
                  />
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                <p>
                  <Link to="#" className="text-reset">
                    About
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-reset">
                    Features
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-reset">
                    Projects
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-reset">
                    Career
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Help</h6>
                <p>
                  <Link to="#" className="text-reset">
                    Customer Support
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-reset">
                    Delievery Details
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-reset">
                    Terms & Conditions
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-reset">
                    Privacy Policy
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FaLocationDot className="me-2" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MdEmail className="me-3" />
                  info@example.com
                </p>
                <p>
                  <BiPhoneOutgoing className="me-3" />+ 01 234 567 88
                </p>
                <p>
                  <FaRegClock className="me-3" /> Mon-Fri 09:00 - 05:00
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:{" "}
          <Link to="https://www.linkedin.com/in/akifraza/" target="_blank">
            <strong> Akif Raza </strong>
          </Link>
        </div>
      </MDBFooter>
    </>
  );
}
