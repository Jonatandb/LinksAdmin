import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import { db } from "../firebase";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function Links() {
  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

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
    if (currentId === "") {
      await db.collection("links").doc().set(linkObject);
      toast.success("Link added successfully!", {});
    } else {
      await db.collection("links").doc(currentId).update(linkObject);
      toast.info("Link updated successfully!", {});
      setCurrentId("");
    }
  };

  const onDeleteLink = async (id) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      await db.collection("links").doc(id).delete();
      toast.info("Link deleted successfully!", {});
    }
  };

  return (
    <div className="col">
      <div className="col-lg-12 p-2">
        <LinkForm {...{ addOrEditLink, currentId, links }} />
      </div>
      <div className="col-lg-12 p-2">
        {links.map((link) => (
          <div className="card mb-1" key={link.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5>{link.name}</h5>
                <div>
                  <i
                    className="material-icons text-danger"
                    onClick={() => onDeleteLink(link.id)}
                    style={{ cursor: "pointer" }}
                  >
                    close
                  </i>
                  <i
                    className="material-icons text-primary"
                    onClick={() => setCurrentId(link.id)}
                    style={{ cursor: "pointer" }}
                  >
                    create
                  </i>
                </div>
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
