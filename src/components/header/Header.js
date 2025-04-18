import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";

import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="dark-menu header">
      <a href="/" className="logo">
        <span className="grey-color"> &lt;</span>
        <span className="logo-name">{greeting.username}</span>
        <span className="grey-color">&gt;</span>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn" style={{ color: "white" }}>
        <span className="navicon navicon-dark"></span>
      </label>
      <ul className="dark-menu menu">
        {viewSkills && (
          <li>
            <a
              className="nav-link"
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              Skills
            </a>
          </li>
        )}
        <li className="nav-item">
          <a className="nav-link" href="/#/data-analyst-academics">
            Data Analyst Academics
          </a>
        </li>
        {viewExperience && (
          <li>
            <a
              className="nav-link"
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
              }}
            >
              Work Experiences
            </a>
          </li>
        )}
        {viewOpenSource && (
          <li>
            <a
              className="nav-link"
              href="#opensource"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("opensource");
              }}
            >
              Open Source
            </a>
          </li>
        )}
        {viewAchievement && (
          <li>
            <a
              className="nav-link"
              href="#achievements"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("achievements");
              }}
            >
              Achievements
            </a>
          </li>
        )}
        {viewBlog && (
          <li>
            <a
              className="nav-link"
              href="#blogs"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("blogs");
              }}
            >
              Blogs
            </a>
          </li>
        )}
        {viewTalks && (
          <li>
            <a
              className="nav-link"
              href="#talks"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("talks");
              }}
            >
              Talks
            </a>
          </li>
        )}
        {viewResume && (
          <li>
            <a
              className="nav-link"
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("resume");
              }}
            >
              Resume
            </a>
          </li>
        )}
        <li>
          <a
            className="nav-link"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
