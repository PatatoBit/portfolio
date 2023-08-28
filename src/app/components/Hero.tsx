import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="center">
      <h1>Hi, I&apos;m Pat</h1>
      <Image src="/hero.gif" alt="Hero Animation" width={200} height={200} />
    </div>
  );
}

export default Hero;
