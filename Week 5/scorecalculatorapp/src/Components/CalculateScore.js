import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore({ Name, School, Total, Goal }) {
  const avg = Total / Goal;
  return (
    <div className="score-card">
      <h2>Student Score Details</h2>
      <p><b>Name:</b> {Name}</p>
      <p><b>School:</b> {School}</p>
      <p><b>Total:</b> {Total}</p>
      <p><b>Average:</b> {avg}</p>
    </div>
  );
}

export default CalculateScore;
