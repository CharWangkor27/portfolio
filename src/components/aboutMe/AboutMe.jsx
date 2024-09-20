import React, { useState } from "react";
import "./AboutMe.css";
import theme from "../../assets/theme.png";
import profile_picture from "../../assets/profile picture.jpeg";
import arrow_icon from "../../assets/arrow_icon.png";
import skills_data from "../../assets/skills_data";

const AboutMe = () => {
  const skills = skills_data();

  const [visibleSkills, setVisibleSkills] = useState(3);

  const handleShowMore = () => {
    setVisibleSkills((prevVisible) => prevVisible + 3); // Show 3 more skills each time
  };

  return (
    <div className="about-me" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="about-theme" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_picture} alt="profile-picture" />
        </div>
        <div className="about-right">
          <div className="about-paragraph">
            <p>
              I am Char Wangkor, a recent graduate from the Faculty of Computer
              Science and Artificial Intelligence at Cairo University,
              specializing in Information Systems.{" "}
            </p>
            <p>
              I have a strong interest in software development and data science,
              and I am continuously honing my skills to contribute effectively
              in these industries. My goal is to leverage my technical knowledge
              to create impactful solutions and grow as a professional in the
              tech field.
            </p>
          </div>
          <div className="about-skills">
            <h2>Programming Language Skills</h2>
            {skills.slice(0, visibleSkills).map((skill, index) => (
              <div className="about-skill" key={index}>
                <p>{skill.name}</p>
                <hr style={{ width: skill.width }} />
              </div>
            ))}

            {visibleSkills < skills.length && (
              <div className="more-skills" onClick={handleShowMore}>
                <p>Show More</p>
                <img src={arrow_icon} alt="arrow icon" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+ </h1>
          <p>YEARS CODING EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+ </h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+ </h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
