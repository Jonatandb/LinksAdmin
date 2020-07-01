import React from "react";
import LinkForm from "./LinkForm";
import { db } from "../firebase";

export default function Links() {
  const addOrEditLink = async (linkObject) => {
    await db.collection("links").doc().set(linkObject);
  };

  return (
    <div>
      <LinkForm addOrEditLink={addOrEditLink} />
      <h1>Links</h1>
    </div>
  );
}
