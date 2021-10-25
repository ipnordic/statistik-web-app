import React, { useContext } from "react";
import styles from "./Header.module.css";
import CustomContext from "../Context/CustomContext";
import Logout from "./Logout";
import Help from "./Help";

const Navbar = () => {
  const { isLoggedIn } = useContext(CustomContext);
  return (
    <nav>
      <ul className={styles.Navbar}>
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
