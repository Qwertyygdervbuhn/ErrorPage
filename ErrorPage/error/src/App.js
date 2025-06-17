import React from "react";
import "./App.css";

export default function NotFoundPage() {
  return (
    <div
      className="background"
      style={{ backgroundImage: "url('/back404.png')" }}
    >
      <div className="background-overlay" />
      <div className="not-found-container">
        <div className="not-found-card">
          <img src="/404image.png" alt="404" className="not-found-image" />
          <h1 className="not-found-title">PAGE NOT FOUND</h1>
          <p className="not-found-subtitle">
            but we can still help you find a job 
          </p>
          <button className="not-found-button">Let’s find a job! :) </button>
        </div>
      </div>
    </div>
  );
}
