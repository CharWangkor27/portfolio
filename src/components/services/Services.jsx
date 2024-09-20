import React, { useState } from "react";
import "./Services.css";
import theme from "../../assets/theme.png";
import Service_Data from "../../assets/Service_Data";
import arrow_icon from "../../assets/arrow_icon.png";

const Services = () => {
  const [expanded, setExpanded] = useState(null);
  const data = Service_Data();
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Show two more services
  };

  const handleReadMore = (id) => {
    setExpanded(expanded === id ? null : id);
  };
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme} alt="theme_pattern" />
      </div>
      <div className="services-container">
        {data.slice(0, visibleCount).map((service, index) => (
          <div key={index} className="services-format">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h3>{service.id < 10 ? `0${service.id}` : service.id}</h3>
              <h2>{service.name}</h2>
            </div>
            <p className={expanded === service.id ? "expanded" : "collapsed"}>
              {service.desc}
            </p>
            <div
              className="services-readmore"
              onClick={() => handleReadMore(service.id)}
            >
              <p>{expanded === service.id ? "Show Less" : "Read More"}</p>
              <img
                src={arrow_icon}
                alt="arrow"
                className={expanded === service.id ? "rotate" : ""}
              />
            </div>
          </div>
        ))}
      </div>
      {visibleCount < data.length && (
        <div className="more-services" onClick={handleShowMore}>
          <p>Show More</p>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      )}
    </div>
  );
};

export default Services;
