import Image from "next/image";
import React from "react";
import heroGif from "../../public/hero.gif";

function Hero() {
  return (
    <div className="center">
      <h1>Hi, I&apos;m Patato</h1>
      <Image
        src={heroGif}
        alt="Hero Animation"
        style={{ maxWidth: "20rem", height: "auto" }}
      />
    </div>
  );
}

export default Hero;
