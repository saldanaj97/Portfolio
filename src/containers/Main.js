import React, { Component } from "react";
import Header from "./header/Header";
import Greeting from "./greeting/Greeting";
import AboutMe from "./aboutme/AboutMe";
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
        <DeployedProjects />
        <Projects />
        <Profile />
        <Top />
      </div>
    );
  }
}
