import React from "react";
import logo from "../../assets/logo.png";
import Navbar from "./Navbar/Navbar";
import HeaderContainer, { HeaderTwo } from "./UI/HeaderContainer";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTwo>
        <a href="/">
          <img className="ImageContianer" src={logo} alt="logo" />
        </a>
        <span>ipnordic Statistik</span>
        <Navbar />
      </HeaderTwo>
    </HeaderContainer>
  );
};

export default Header;
