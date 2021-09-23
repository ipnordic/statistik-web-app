import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "./Header.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.Navbar}>
        <li>
          <Link to="/">
            <Button variant="contained">Home</Button>
          </Link>
        </li>
        {/* <li>
          <Link to="/login">
            <Button variant="contained">Login</Button>
          </Link>
        </li> */}
        <li>
          <Link to="/statistik">
            <Button variant="contained">Statistik</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
