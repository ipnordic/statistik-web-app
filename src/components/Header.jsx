import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>
        <img className={styles.Image} src={logo} alt="logo" />
      </div>
      <nav className={styles.Navbar}>Navbar</nav>
    </header>
  );
};

export default Header;
