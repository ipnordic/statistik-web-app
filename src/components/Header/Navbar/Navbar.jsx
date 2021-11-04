import React, { useContext } from "react";
import Context from "../../../store/Context";
import Logout from "../../Logout/Logout";
import Help from "../../Help/Help";
import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn } = useContext(Context);
  return (
    <nav>
      <ul className="NavbarContainer">
        <li>
          <Help />
        </li>
        {isLoggedIn ? (
          <li>
            <Logout />
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
