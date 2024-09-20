import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
import user_icon from "../../assets/user_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            Full-Stack Web Developer focusing on Python (Django) and React JS,
            with additional proficiency in Java, TypeScript, and C++
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-top-right-email">
            <img src={user_icon} alt="user_icon" />
            <input type="email" placeholder="enter your email" />
          </div>
          <div className="footer-subscribe">Subscriber</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="foot-bottom-left">
          &copy; Char Wangkor. All Rights Reserved
        </p>

        <div className="footer-bottom-right">
          <p>Term of Sevices</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
