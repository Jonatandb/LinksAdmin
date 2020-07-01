import React, { useState } from "react";

export default function LinkForm() {
  const initialState = {
    name: "",
    url: "",
    description: "",
  };

  const [values, setValues] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Http://www.url.com"
          name="url"
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <textarea
          name="description"
          placeholder="Write a description"
          rows="3"
          className="form-control"
          onChange={handleInputChange}
        ></textarea>
      </div>

      <button className="btn btn-primary btn-block">Save</button>
    </form>
  );
}
