import React from "react";
import styles from "./Styles/Footer.module.css";
import logo from "../../src/assets/logo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterLeft}>
        <img src={logo} alt="logo" />
        <span className={styles.FooterText}>&copy; 2021 ipnordic A/S</span>
      </div>
      <div className={styles.FooterRight}>
        <a
          className={styles.FooterRightSocialFB}
          href="https://www.facebook.com/Ipnordic"
        >
          <FaFacebook />
        </a>
        <a
          className={styles.FooterRightSocialLI}
          href="https://www.linkedin.com/company/ipnordic-a-s/"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
