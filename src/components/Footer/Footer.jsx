import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import FooterContainer, { FooterLeft, FooterRight } from "./UI/FooterContainer";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <img src={logo} alt="logo" />
        <span className="TextContainer">&copy; 2021 ipnordic A/S</span>
      </FooterLeft>
      <FooterRight>
        <a className="facebook" href="https://www.facebook.com/Ipnordic">
          <FaFacebook />
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/company/ipnordic-a-s/"
        >
          <FaLinkedin />
        </a>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
