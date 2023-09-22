import React, { useState } from "react";
import "./Main.css";
import mainPhoto from "../../assests/images/mainPhoto.png";
import Button from "../Button";
import { MDBPopover, MDBPopoverHeader, MDBPopoverBody } from "mdb-react-ui-kit";

function Main() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleGetConsulting = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-3">
            <h1 className="mainHeading">We Provide Best Business Solutions</h1>
            <p className="mainParagraph">
              Establish your vision and value proposition and turn them into
              testable prototypes
            </p>
            <div className="mt-5">
              <MDBPopover
                btnChildren={
                  <Button
                    text="Get Consulting"
                    backgroundColor="#fad783"
                    hoverColor="#eecb4c"
                    onClick={handleGetConsulting}
                  />
                }
                dismiss
                style={{ borderRadius: "20px", padding: "0px" }}
              >
                <MDBPopoverHeader>
                  <strong> Consultation Booked</strong>
                </MDBPopoverHeader>
                <MDBPopoverBody>
                  Thank you for booking consultation with us. We will reach out
                  to you shortly.
                </MDBPopoverBody>
              </MDBPopover>

              <Button
                text="Learn More"
                backgroundColor="#f0efea"
                hoverColor="#ccc"
              />
            </div>
          </div>
          <div className="col-md-6 mainPhoto d-none d-md-block">
            <img src={mainPhoto} alt="Women holding an iPad" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
