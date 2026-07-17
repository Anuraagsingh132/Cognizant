import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore Name="John" School="XYZ" Total={280} Goal={3} />
    </div>
  );
}

export default App;
