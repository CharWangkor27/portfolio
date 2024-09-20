import React, { useRef, useState } from "react";
import underline_icon from "../../assets/underline_icon.png";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />

      <div className="main-nav-menu">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>

        <ul ref={menuRef} className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li>
            {" "}
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? (
              <img src={underline_icon} alt="underline icon" />
            ) : (
              <></>
            )}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => setMenu("about me")}>About Me</p>
            </AnchorLink>
            {menu === "about me" ? (
              <img src={underline_icon} alt="underline icon" />
            ) : (
              <></>
            )}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#services">
              <p onClick={() => setMenu("services")}>Services</p>
            </AnchorLink>
            {menu === "services" ? (
              <img src={underline_icon} alt="underline icon" />
            ) : (
              <></>
            )}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#projects">
              <p onClick={() => setMenu("projects")}>Projects</p>
            </AnchorLink>
            {menu === "projects" ? (
              <img src={underline_icon} alt="underline icon" />
            ) : (
              <></>
            )}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => setMenu("contact me")}>Contact Me</p>
            </AnchorLink>
            {menu === "contact me" ? (
              <img src={underline_icon} alt="underline icon" />
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p onClick={() => setMenu("contact me")}>Connect with me</p>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
