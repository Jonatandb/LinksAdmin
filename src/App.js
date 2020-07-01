import React from "react";
import Links from "./components/Links";
import MainTitle from "./components/MainTitle";

function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <MainTitle />
        <Links />
      </div>
    </div>
  );
}

export default App;
