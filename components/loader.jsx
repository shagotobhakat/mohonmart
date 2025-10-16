"use client";
import React from "react";

export default function LoadingScreen() {
  return (
    <div className="loading-fullscreen">
      <div className="loader-wrapper">
        <div className="loader-bg-1"></div>
        <div className="loader-bg-2"></div>
        <div className="loader"></div>

        <div className="loader-text">
          <span className="loader-letter">L</span>
          <span className="loader-letter">o</span>
          <span className="loader-letter">a</span>
          <span className="loader-letter">d</span>
          <span className="loader-letter">i</span>
          <span className="loader-letter">n</span>
          <span className="loader-letter">g</span>
        </div>
      </div>
    </div>
  );
}
