import React from "react";

export default function LinkForm() {
  return (
    <form className="card card-body">
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="http://someurl.com"
          name="url"
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Website name"
        />
      </div>

      <div className="form-group">
        <textarea
          name="description"
          placeholder="Write a description"
          rows="3"
          className="form-control"
        ></textarea>
      </div>

      <button className="btn btn-primary btn-block">Save</button>
    </form>
  );
}
