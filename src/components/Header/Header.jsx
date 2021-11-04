import React from "react";
import logo from "../../assets/logo.png";
import Navbar from "./Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="HeaderContainer">
      <div className="HeaderTwoContainer">
        <a href="/">
          <img className="ImageContianer" src={logo} alt="logo" />
        </a>
        <span>ipnordic Statistik</span>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
