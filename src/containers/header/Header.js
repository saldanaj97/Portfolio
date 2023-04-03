import React from "react";
import Headroom from "react-headroom";
import "./header.css";
import { greeting } from "../../portfolio";

function Header() {
  return (
    <Headroom>
      <header className='header'>
        <div className='logo'>
          <span className='logo-arrow'> &lt;</span>
          <span className='logo-name'>{greeting.username}</span>
          <span className='logo-arrow'>/&gt;</span>
        </div>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn'>
          <span className='navicon'></span>
        </label>
        <ul className='menu'>
          <li>
            <a href='#about-me'>Goals</a>
          </li>
          <li>
            <a href='#deployed-projects'>Projects</a>
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
