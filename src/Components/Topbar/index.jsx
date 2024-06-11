import React from "react";
import topimage from "./home.jpg";
import "./index.css";

export default function Topbar() {
  return (
    <div className="d-flex justify-content-center ">
      <div className="nabar col-10 ">
        <div className="navbar-left col-2 m-auto">online shop name </div>
        <div className="navbar-center col-8 m-auto ">
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
