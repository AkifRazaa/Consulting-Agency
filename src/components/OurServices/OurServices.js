import React from "react";
import "./OurServices.css";
import OurServiceCard from "./OurServiceCard";
import Button from "../Button";

function OurServices() {
  return (
    <section id="ourServices">
      <div className="container mt-5 p-5">
        <p className="ourServiesText">Our Services</p>
        <h1 className="ourServicesHeading">
          We Provide The Best Service For Consulting
        </h1>

        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-3">
              <OurServiceCard
                title="Business Advice"
                text="View a summary of all your customers over the last month. View a summary of all your customers over the last month."
              />
            </div>
            <div className="col-md-3 mb-3">
              <OurServiceCard
                title="Startup Advice"
                text="View a summary of all your customers over the last month. View a summary of all your customers over the last month."
              />
            </div>
            <div className="col-md-3 mb-3">
              <OurServiceCard
                title="Financial Advice"
                text="View a summary of all your customers over the last month. View a summary of all your customers over the last month."
              />
            </div>
            <div className="col-md-3 mb-3">
              <OurServiceCard
                title="Risk Management"
                text="View a summary of all your customers over the last month. View a summary of all your customers over the last month."
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <Button
              text="Browse Services"
              backgroundColor="#fad783"
              hoverColor="#eecb4c"
            />
          </div>

          <div
            className="row"
            style={{
              margin: "50px 5px ",
              borderTop: "2px solid lightgrey",
              borderBottom: "2px solid lightgrey",
            }}
          >
            <div className="col-md-3 text-center">
              <h1>
                <u>500</u>
              </h1>
              <p>Happy Clients</p>
            </div>
            <div className="col-md-3 text-center">
              <h1>
                <u>2000+</u>
              </h1>
              <p>Development Hours</p>
            </div>
            <div className="col-md-3 text-center">
              <h1>
                <u>100+</u>
              </h1>
              <p>Projects</p>
            </div>
            <div className="col-md-3 text-center">
              <h1>
                <u>10+</u>
              </h1>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
