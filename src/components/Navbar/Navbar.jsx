import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-container">
        {/* LOGO */}
        <div className="nav-logo">DANI HUB</div>

        {/* CENTER LINKS */}
        <div className="nav-center">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT BUTTON */}
        <a href="/resume.pdf" download className="resume-btn">
          Resume
        </a>
      </div>
    </nav>
  );
}
