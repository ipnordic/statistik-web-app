import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "./Header.module.css";
import CustomContext from "../Context/CustomContext";

const Navbar = () => {
  const { isLoggedIn } = useContext(CustomContext);
  return (
    <nav>
      <ul className={styles.Navbar}>
        {!isLoggedIn ? (
          <li>
            <Link to="/">
              <Button variant="contained">Statistik</Button>
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
