import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import { db } from "../firebase";

export default function Links() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = () => {
    db.collection("links").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };

  const addOrEditLink = async (linkObject) => {
    await db.collection("links").doc().set(linkObject);
  };

  const onDeleteLink = async (id) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      await db.collection("links").doc(id).delete();
    }
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
              <div className="d-flex justify-content-between">
                <h5>{link.name}</h5>
                <i
                  className="material-icons text-danger"
                  onClick={() => onDeleteLink(link.id)}
                >
                  close
                </i>
              </div>
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
