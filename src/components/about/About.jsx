import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import MySevices from "./MyServices";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Me" />
      <AboutMe />
      <Title title="My" subTitle="Services" />
      <MySevices />
    </section>
  );
};

export default About;
