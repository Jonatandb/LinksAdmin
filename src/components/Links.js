import React from "react";
import LinkForm from "./LinkForm";

export default function Links() {
  const addOrEditLink = () => {
    console.log("addOrEditLink():", "New Link!");
  };

  return (
    <div>
      <LinkForm addOrEditLink={addOrEditLink} />
      <h1>Links</h1>
    </div>
  );
}
