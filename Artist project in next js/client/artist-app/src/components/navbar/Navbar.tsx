import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
      <div className={styles.container}>
        <div className={styles.navbar}>
          <h1>Author</h1>
          <Links />
        </div>
      </div>
  );
};

export default Navbar;
