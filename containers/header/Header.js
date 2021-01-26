import React from "react";
import Headroom from "react-headroom";
import "./header.css";
import {greeting, socialMediaLinks} from "../../portfolio";

function Header() {
    return (
    <Headroom>
        <header className="header">
            <a href="" className="logo">
                <span className="grey-color"> &lt;</span>
                <span className="logo-name">{greeting.username}</span>
                <span className="grey-color">/&gt;</span>
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
            </label>
            <ul className="menu">
                <li>
                    <a href="#skills">About Me</a>
                </li>
                <li>
                    <a href={socialMediaLinks.github}>Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
            </ul>
        </header>
    </Headroom>
    );
}

export default Header;
