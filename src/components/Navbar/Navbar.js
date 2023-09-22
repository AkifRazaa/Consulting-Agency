import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLogo from "../../assests/images/navLogo.png";
import Button from "../Button";
import "./Navbar.css";

import { MDBPopover, MDBPopoverHeader, MDBPopoverBody } from "mdb-react-ui-kit";

function Navbar() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleGetConsulting = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg sticky">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={navLogo} alt="Logo" className="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto me-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/service">
                Service
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </div>

            <MDBPopover
              btnChildren={
                <Button
                  text="Get Consulting"
                  backgroundColor="#fad783"
                  hoverColor="#eecb4c"
                  onClick={handleGetConsulting}
                />
              }
              style={{ borderRadius: "20px", padding: "0px" }}
            >
              <MDBPopoverHeader>
                <strong> Consultation Booked</strong>
              </MDBPopoverHeader>
              <MDBPopoverBody>
                Thank you for booking consultation with us. We will reach out to
                you shortly.
              </MDBPopoverBody>
            </MDBPopover>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
