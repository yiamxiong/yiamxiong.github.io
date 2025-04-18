import React from "react";
import "./Button.scss";

export default function Button({ text, href, onClick }) {
  if (onClick) {
    return (
      <button className="main-button" onClick={onClick}>
        {text}
      </button>
    );
  }

  return (
    <a className="main-button" href={href}>
      {text}
    </a>
  );
}
