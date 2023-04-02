import React, { Component } from "react";
import Header from "./header/Header";
import Greeting from "./greeting/Greeting";
import AboutMe from "./skills/AboutMe";
import Projects from "./projects/Projects";
import Profile from "./profile/Profile";
import Top from "./topbutton/Top";
import DeployedProjects from "./deployedprojects/deployedprojects";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <AboutMe />
        <Projects />
        <DeployedProjects />
        <Profile />
        <Top />
      </div>
    );
  }
}
