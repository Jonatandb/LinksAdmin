import React from "react";

export default function MainTitle() {
  return (
    <div className="col-lg-12 d-flex justify-content-center">
      <img
        src={process.env.PUBLIC_URL + "/LinksAdminLogo192.png"}
        alt="LinksAdmin Logo"
        width="25px"
        height="25px"
      />
      <h5>LinksAdmin by Jonatandb</h5>
    </div>
  );
}
