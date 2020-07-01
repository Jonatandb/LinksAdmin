import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import { db } from "../firebase";

export default function Links() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = () => {
    const docs = [];
    db.collection("links").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };

  const addOrEditLink = async (linkObject) => {
    await db.collection("links").doc().set(linkObject);
  };

  return (
    <div className="col">
      <div className="col-lg-12 p-2">
        <LinkForm addOrEditLink={addOrEditLink} />
      </div>
      <div className="col-lg-12 p-2">
        {links.map((link) => (
          <div className="card mb-1" key={link.id}>
            <div className="card-body">
              <h4>{link.name}</h4>
              <p>{link.description}</p>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                Go to Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
