import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderTwo}>
        <a href="/">
          <img className={styles.Image} src={logo} alt="logo" />
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
