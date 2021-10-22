import React, { useContext } from "react";
import styles from "./Header.module.css";
import CustomContext from "../Context/CustomContext";
import Logout from "./Logout";

const Navbar = () => {
  const { isLoggedIn } = useContext(CustomContext);
  return (
    <nav>
      <ul className={styles.Navbar}>
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
