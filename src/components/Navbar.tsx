import React from "react";
import ThemeSelector from "./ThemeSelector";

import styles from "./components.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <ul className={styles.navList}>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/portfolio">
          <li>Portfolio</li>
        </Link>

        <Link href="/contacts">
          <li>Contacts</li>
        </Link>

        <ThemeSelector />
      </ul>
    </nav>
  );
}

export default Navbar;
