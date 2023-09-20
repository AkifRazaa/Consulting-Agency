import React from "react";
import "./AboutCompany.css";
import meetingPic from "../../assests/images/meeting.jpg";
import Button from "../Button";

function AboutCompany() {
  return (
    <section>
      <div className="container mt-5 p-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 text-center mb-4">
            <img
              src={meetingPic}
              alt="Team members doing a meeting"
              className="meetingPicStyle "
            />
          </div>
          <div className="col-md-6 ">
            <p className="aboutCompanyText ">About Company</p>
            <h1 className="aboutCompanyHeading">
              We Are Business Consulting & Credit Repair Experts
            </h1>

            <p className="aboutCompanyParagraph">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>

            <p className="aboutCompanyParagraph mb-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <Button
              text="Learn More"
              backgroundColor="#f0efea"
              hoverColor="#ccc"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
