import React, { useContext } from "react";
import Context from "../../../store/Context";
import Logout from "../../Logout/Logout";
import Help from "../../Help/Help";
import NavbarContainer from "./UI/NavbarContainer";

const Navbar = () => {
  const { isLoggedIn } = useContext(Context);
  return (
    <NavbarContainer>
      <ul>
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
    </NavbarContainer>
  );
};

export default Navbar;
