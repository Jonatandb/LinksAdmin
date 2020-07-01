import React from "react";
import LinkForm from "./components/LinkForm";
import Links from "./components/Links";

function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <LinkForm />
        <Links />
      </div>
    </div>
  );
}

export default App;
