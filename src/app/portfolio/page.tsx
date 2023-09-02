import React from "react";
import Activities from "@/components/portfolio/Activities";
import Certificates from "@/components/portfolio/Certificates";
import Projects from "@/components/portfolio/Projects";

function page() {
  return (
    <main className="wrapper">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Pat&apos;s Portfolio</h1>
        <p>I’m now going to tell you how great of a person I am</p>
      </div>

      <h3>Projects</h3>

      <Projects />

      <h3>Activities</h3>

      <Activities />

      <h3>Certificates</h3>

      <Certificates />
    </main>
  );
}

export default page;
