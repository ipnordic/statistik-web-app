import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.Header}>
      <a href="http://localhost:3000">
        <img className={styles.Image} src={logo} alt="logo" />
      </a>

      <nav className={styles.Navbar}>Navbar</nav>
    </header>
  );
};

export default Header;
