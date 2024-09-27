import React, { useState } from "react";
import "./Hero.css";
import profile_picture from "../../assets/profile picture.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/resume.pdf";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profile_picture} alt="profile_picture" />
      <h1>
        Hi, I'm <span>Char Wangkor</span>, an aspiring Full-Stack Web Developer
        and Data Analyst based in Cairo.
      </h1>
      <p>
        Full-Stack Web Developer focusing on Python (Django) and React JS, with
        additional proficiency in Java, TypeScript, and C++. Also developing
        skills as a Data Analyst with experience in Python for data analysis and
        visualization.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resume} target="_blank" rel="noopener noreferrer" download>
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
