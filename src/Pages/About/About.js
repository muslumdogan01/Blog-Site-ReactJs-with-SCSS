import React from "react";
import "./Style/About.css";

function About() {
  return (
    <div className="about">
      <div className="about-img">
        <img
          className="image"
          src="https://www.nestle.com.tr/sites/g/files/pydnoa471/files/styles/entity_slider_banner_image_1440_x_810/public/about-us-landing_0.jpg?h=3c933592&itok=t4UX84_P"
          alt=""
        />
        <div className="about-description">
          <h1>Hakkımızda</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
