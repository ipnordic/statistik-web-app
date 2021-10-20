import React from "react";
import styles from "./Styles/Footer.module.css";
import logo from "../../src/assets/logo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Left}>
        <img src={logo} alt="logo" />
        <span className={styles.Text}>&copy; 2021 ipnordic A/S</span>
      </div>
      <div className={styles.Right}>
        <a className={styles.SocialFB} href="https://www.facebook.com/Ipnordic">
          <FaFacebook />
        </a>
        <a
          className={styles.SocialLI}
          href="https://www.linkedin.com/company/ipnordic-a-s/"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
