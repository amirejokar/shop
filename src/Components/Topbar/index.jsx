import React from "react";
import topimagedesktop from "./home.jpg";
import topimagemd from './home-md.jpg'
import topimagesm from './home-sm.jpg'
import "./index.css";
import { IoMenu } from "react-icons/io5";
export default function Topbar() {
  return (
    <div className="d-flex justify-content-center ">
      <div className="nabar col-10 ">
        <div className="navbar-left col-lg-3 col-md-3 col-12 m-auto fs-lg-1 fs-md-2 fs-sm-3 fs-3">
          <div className="menu-section px-sm-4 px-5" >
            online shop name
            <div>
              <IoMenu className="fs-1 d-block d-md-none" />
            </div>
          </div>
        </div>
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
          className="header-img col-12 d-none d-lg-block"
          src={topimagedesktop}
          alt="khoshkel khanom"
        />
        <img
          className="header-img col-12 d-none d-md-block d-lg-none"
          src={topimagemd}
          alt="khoshkel khanom"
        />
        <img
          className="header-img col-12 d-block d-sm-block d-md-none d-lg-none "
          src={topimagesm}
          alt="khoshkel khanom"
        />
      </div>
    </div>
  );
}
