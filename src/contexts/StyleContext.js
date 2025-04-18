// src/contexts/StyleContext.js
import React, { useState, createContext, useEffect } from "react";

const StyleContext = createContext();

const StyleProvider = ({ children }) => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("isDark");
    return saved !== null ? JSON.parse(saved) : prefersDark;
  });

  const changeTheme = () => setIsDark((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <StyleContext.Provider value={{ isDark, changeTheme }}>
      {children}
    </StyleContext.Provider>
  );
};

export { StyleProvider, StyleContext };
