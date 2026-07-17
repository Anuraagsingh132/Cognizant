import React from "react";
import CohortDetails from "./Components/CohortDetails";

function App() {
  return (
    <div>
      <h1>Cohort Dashboard</h1>
      <CohortDetails name="Java FSE" status="ongoing" />
      <CohortDetails name="DotNet" status="completed" />
    </div>
  );
}

export default App;
