import React, { useState } from "react";
import "./Projects.css";
import theme from "../../assets/theme.png";
import Projects_Data from "../../assets/Projects_Data.js";
import arrow_icon from "../../assets/arrow_icon.png";
const Projects = () => {
  const data = Projects_Data();
  const [visibleCount, setVisibleCount] = useState(3);
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Show 3 more projects
  };

  return (
    <div className="projects" id="projects">
      <div className="projects-title">
        <h1>My Latest Projects</h1>
        <img src={theme} alt="theme" />
      </div>
      <div className="projects-container">
        {data.slice(0, visibleCount).map((project, index) => {
          return (
            <div key={index} className="project-format">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div className="project-overlay">
                  <h3>{project.id}</h3>
                  <h2>{project.title}</h2>
                </div>

                <img
                  src={project.image}
                  alt="project image"
                  className="project-image"
                />
              </div>
              <a href={project.link} className="project-link">
                See This Project
              </a>
            </div>
          );
        })}
      </div>
      {visibleCount < data.length && ( // Only show "Show More" if there are more projects
        <div className="project-readmore" onClick={handleShowMore}>
          <p>Show More</p>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      )}
    </div>
  );
};

export default Projects;
