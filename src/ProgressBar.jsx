import React from 'react';

export default function ProgressBar({ progress }) {
  return (
    <div>
      <h1>Progress Bar</h1>
      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: "#007bff",
            height: "24px",
            transition: "width 0.3s ease-in-out",
          }}
        ></div>
      </div>
      <p>{progress}% Complete</p>
    </div>
  );
}
