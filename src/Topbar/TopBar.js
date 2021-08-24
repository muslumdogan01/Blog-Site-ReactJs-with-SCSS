import React from "react";
import { Link } from "react-router-dom";
import "./Style/TopBar.css";

function topbar() {
  const user = true;
  return (
    <div className="topBar">
      <div className="topBar-left">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram"></i>
      </div>
      <div className="topBar-center">
        <ul className="topBar-center-List">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Write">WRİTE</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="topBar-right">
        <img
          src="https://pbs.twimg.com/profile_images/1404810765736022026/LWLJGzOs_400x400.jpg"
          alt=""
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default topbar;
