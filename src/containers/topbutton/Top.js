import React from "react";
import "./Top.scss";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Other browsers
  }

  function scrollFunction() {
    const topBtn = document.getElementById("topButton");
    if (!topBtn) return;

    if (window.scrollY > 20) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  window.onload = function () {
    scrollFunction();
  };

  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
