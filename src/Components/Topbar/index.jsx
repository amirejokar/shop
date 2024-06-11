import React from "react";
import topimage from "./home.jpg";
import "./index.css";

export default function Topbar() {
  return (
    <div className="d-flex justify-content-center ">
      <div className="nabar col-10 ">
        <div className="navbar-left col-lg-2 col-md-3 m-auto fs-lg-1 fs-md-2 fs-sm-3 fs-3">online shop name </div>
        <div className="navbar-center col-lg-8 col-md-9 m-auto d-none d-lg-flex d-md-flex col-8 m-auto ">
          <ul className="navbar-center-content m-aut">
            <li>all products</li>
            <li className="active-item">product 1</li>
            <li>product 2</li>
            <li>product 3</li>
          </ul>
        </div>
      </div>
      <div className="mask col-12">
        <img
          className="header-img col-12"
          src={topimage}
          alt="khoshkel khanom"
        />
      </div>
    </div>
  );
}
