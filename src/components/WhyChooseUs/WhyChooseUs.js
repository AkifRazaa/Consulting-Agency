import React from "react";
import "./WhyChooseUs.css";
import Detail from "./Detail";
import { FaRegThumbsUp } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { CgIfDesign } from "react-icons/cg";
import { GiArtificialIntelligence } from "react-icons/gi";
import DiscussionPic from "../../assests/images/discussion.jpg";

function WhyChooseUs() {
  return (
    <section>
      <div className="container mt-5 p-5">
        <div className="row">
          <div className="col-md-6">
            <p className="whyChooseUsText">Why Choose Us</p>
            <h1 className="whyChooseUsHeading">
              Reasons Why We Are The Best Business Consulting Agency
            </h1>

            <Detail
              icon={<FaRegThumbsUp />}
              title="Process Excellence"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />

            <Detail
              icon={<GoCommentDiscussion />}
              title="Strategic Planning"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />

            <Detail
              icon={<CgIfDesign />}
              title="Experiance Design"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />

            <Detail
              icon={<GiArtificialIntelligence />}
              title="Artificial Intelligence"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
          </div>
          <div className="col-md-6 mt-4 d-flex justify-content-end align-items-center ">
            <img
              src={DiscussionPic}
              alt="Two people discussing something"
              className="whyChooseUsImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
