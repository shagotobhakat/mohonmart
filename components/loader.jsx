"use client";
import React from "react";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="loading-fullscreen">
      <div className="loader-wrapper">
        <div className="loader-bg-1"></div>
        <div className="loader-bg-2"></div>
        <div className="loader"></div>
        <div className="loader-text">
          <span
            className="loader-letter">
            <Image
              src="/load.png"
              alt="MohonMart"
              width={45}
              height={45}
              style={{
                objectFit: "contain",
                marginRight: "6px",
                filter: "drop-shadow(0 0 6px #ff00aa88)",
              }}
              priority
            />
          </span>
          <span className="loader-letter">M</span>
          <span className="loader-letter">o</span>
          <span className="loader-letter">h</span>
          <span className="loader-letter">o</span>
          <span className="loader-letter">n</span>
          <span className="loader-letter">M</span>
          <span className="loader-letter">a</span>
          <span className="loader-letter">r</span>
          <span className="loader-letter">t</span>
        </div>
      </div>
    </div>
  );
}
