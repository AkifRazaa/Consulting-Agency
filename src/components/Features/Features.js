import React from "react";
import Button from "../Button";
import FeaturesInfo from "./FeaturesInfo";
import "./Features.css";
import { FaRegHandshake } from "react-icons/fa";
import { BsGraphUpArrow, BsBuildingGear } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

function Features() {
  return (
    <section>
      <div className="container mt-5 p-5 box">
        <div className="row">
          <div className="col-md-6">
            <p className="featureText">Features</p>
            <h1 className="featureHeading">
              Less Accounting is trusted by thousand companies
            </h1>

            <Button
              text="Learn More"
              backgroundColor="#fad783"
              hoverColor="#eecb4c"
            />
          </div>
          <div className="col-md-3 ">
            <FeaturesInfo
              icon={<FaRegHandshake />}
              title="Business Advice"
              text="Essential formula that how a business is going to compete"
            />

            <FeaturesInfo
              icon={<BsGraphUpArrow />}
              title="Financial Advice"
              text="Essential formula that how a business is going to compete"
            />
          </div>
          <div className="col-md-3">
            <FeaturesInfo
              icon={<HiOutlineLightBulb />}
              title="Startup Business"
              text="Essential formula that how a business is going to compete"
            />

            <FeaturesInfo
              icon={<BsBuildingGear />}
              title="Risk Management"
              text="Essential formula that how a business is going to compete"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
