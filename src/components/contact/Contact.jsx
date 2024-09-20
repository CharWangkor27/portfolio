import React from "react";
import "./Contact.css";
import theme from "../../assets/theme.png";
import mail_icon from "../../assets/mail_icon.png";
import call_icon from "../../assets/call_icon.png";
import location_icon from "../../assets/location_icon.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6982fd03-0818-4e61-82b9-343f5759e250");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
        <img src={theme} alt="theme" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Send me email</h1>
          <p>
            I'm availabe for your project, Feel free to reach out, and I'll get
            back to you as soon as possible!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail icon" className="mail-icon" />
              <p>charwangkor@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call icon" className="call-icon" />
              <p>+201554458433</p>
            </div>
            <div className="contact-detail">
              <img
                src={location_icon}
                alt="location icon"
                className="location-icon"
              />
              <p>Cairo, Egypt</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            required
            type="text"
            placeholder="Enter your name"
            name="name"
          />
          <label htmlFor="">Your Email</label>
          <input required type="email" placeholder="Enter your email" />
          <label htmlFor="">Write your message</label>
          <textarea
            required
            name="message"
            rows="8"
            placeholder="type your message here.."
          ></textarea>
          <button className="contact-submit">Send </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
