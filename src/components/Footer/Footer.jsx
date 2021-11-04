import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="LeftContainer">
        <img src={logo} alt="logo" />
        <span className="TextContainer">&copy; 2021 ipnordic A/S</span>
      </div>
      <div className="RightContainer">
        <a className="SocialFB" href="https://www.facebook.com/Ipnordic">
          <FaFacebook />
        </a>
        <a
          className="SocialLI"
          href="https://www.linkedin.com/company/ipnordic-a-s/"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
