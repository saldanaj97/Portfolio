import React, { Component } from "react";
import Header from "./header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import SkillProgress from "./skillprogress/SkillProgress";
import Projects from "./projects/Projects";
import Achievement from "./achievement/Achievement";
import Profile from "./profile/Profile";
import Top from "./topbutton/Top";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <SkillProgress />
        <Projects />
        {/* <Achievement /> */}
        <Profile />
        <Top />
      </div>
    );
  }
}
