import React from "react";
import Headroom from "react-headroom";
import "./header.css";
import { greeting } from "../../portfolio";

function Header() {
  return (
    <Headroom>
      <header className='header'>
        <div className='logo'>
          <span className='grey-color'> &lt;</span>
          <span className='logo-name'>{greeting.username}</span>
          <span className='grey-color'>/&gt;</span>
        </div>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn'>
          <span className='navicon'></span>
        </label>
        <ul className='menu'>
          <li>
            <a href='#about-me'>About Me</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
