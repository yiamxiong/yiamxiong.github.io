import React, { useContext } from "react";
import "./AcademicsHeader.scss";
import { StyleContext } from "../../contexts/StyleContext";

export default function AcademicsHeader() {
  const { isDark } = useContext(StyleContext);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`academics-header ${isDark ? "dark-mode" : "light-mode"}`}>
      <nav className="academics-nav">
        <a onClick={() => scrollToSection("programming")}>Programming</a>
        <a onClick={() => scrollToSection("data")}>Data</a>
        <a onClick={() => scrollToSection("reporting")}>Reporting</a>
        <a onClick={() => scrollToSection("business")}>Business</a>
        <a href="/#/">Back to Home</a>
      </nav>
    </header>
  );
}
