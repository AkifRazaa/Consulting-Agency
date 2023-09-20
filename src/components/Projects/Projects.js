import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard.js";
import Button from "../Button";
import { projectsData } from "./info";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("Business Advice");

  // Function to handle category button click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <section>
      <div className="text-center mt-5">
        <p className="projectText">Project & Case Studies</p>
        <h1 className="projectHeading mx-auto">
          Let's Look <br /> Our Global Projects
        </h1>
      </div>

      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center "
          style={{
            margin: "50px 5px",
            borderTop: "2px solid lightgrey",
            borderBottom: "2px solid lightgrey",
          }}
        >
          <div className="col-md-3 mt-4 mb-4 d-flex justify-content-center align-items-center">
            <Button
              text="Business Advice"
              backgroundColor="white"
              hoverColor="#eecb4c"
              onClick={() => handleCategoryClick("Business Advice")}
            />
          </div>
          <div className="col-md-3 mt-4 mb-4 d-flex justify-content-center align-items-center">
            <Button
              text="Startup Advice"
              backgroundColor="white"
              hoverColor="#eecb4c"
              onClick={() => handleCategoryClick("Startup Advice")}
            />
          </div>
          <div className="col-md-3 mt-4 mb-4 d-flex justify-content-center align-items-center">
            <Button
              text="Financial Advice"
              backgroundColor="white"
              hoverColor="#eecb4c"
              onClick={() => handleCategoryClick("Financial Advice")}
            />
          </div>
          <div className="col-md-3 mt-4 mb-4 d-flex justify-content-center align-items-center">
            <Button
              text="Risk Management"
              backgroundColor="white"
              hoverColor="#eecb4c"
              onClick={() => handleCategoryClick("Risk Management")}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {activeCategory &&
            projectsData[activeCategory].map((project, index) => (
              <div className="col-md-6 mb-5" key={index}>
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  date={project.date}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
