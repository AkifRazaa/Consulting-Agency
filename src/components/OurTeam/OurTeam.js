import React, { useState, useEffect } from "react";
import "./OurTeam.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Teamcard from "./Teamcard";
import { consultingTeam } from "./teamInfo";

function OurTeam() {
  // Define the number of slides to show
  const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());

  // Calculate the number of slides to show based on screen width
  function calculateSlidesToShow() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 992) {
      return 3;
    } else if (screenWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  }

  // Update slidesToShow when the window is resized
  useEffect(() => {
    function handleResize() {
      const newSlidesToShow = calculateSlidesToShow();
      setSlidesToShow(newSlidesToShow);
    }

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Settings for the Slider component
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <section id="ourTeam">
      <div className="container mt-5 p-5">
        <p className="ourTeamText">Meet Our Team</p>
        <h1 className="ourTeamHeading">
          Experience <br /> Team Members
        </h1>

        <div className="container">
          <Slider {...sliderSettings}>
            {consultingTeam.map((teamMember, index) => (
              <div key={index}>
                <div className="row">
                  <div className="col-md-4">
                    <Teamcard
                      image={teamMember.image}
                      name={teamMember.name}
                      role={teamMember.role}
                    />
                  </div>
                </div>
              </div>
            ))}{" "}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
