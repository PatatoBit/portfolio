import Image from "next/image";
import React from "react";

import pfp from "../../public/patfp.jpg";

import styles from "./components.module.scss";

function About() {
  return (
    <div className={`wrapper ${styles.wrapper}`}>
      <div>
        <p className="sub">20:51:14 - GMT+7 (Thailand)</p>

        <span>
          <h2>Pat</h2>
          <p>(Chayapat Pakham)</p>
        </span>

        <p>
          I’m a web developer, gamer, artist and a student from Thailand 🇹🇭.
        </p>

        <p>
          I’m into creating fun stuffs that I think matters to at least one
          person in the world.
        </p>

        <p className="sub">&gt; 15.14124 Years old</p>
        <p className="sub">&gt; he / him</p>
      </div>

      <Image
        src={pfp}
        alt="Patato"
        style={{ maxWidth: "15rem", height: "auto", borderRadius: "50%" }}
      />
    </div>
  );
}

export default About;
