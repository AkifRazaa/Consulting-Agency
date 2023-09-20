import React from "react";
import "./Main.css";
import mainPhoto from "../../assests/images/mainPhoto.png";
import Button from "../Button";

function Main() {
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
              <Button
                text="Get Consulting"
                backgroundColor="#fad783"
                hoverColor="#eecb4c"
                marginRight={10}
              />
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
