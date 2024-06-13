/* eslint-disable no-unreachable */
import React from "react";
import topimagedesktop from "./home.jpg";
import topimagemd from "./home-md.jpg";
import topimagesm from "./home-sm.jpg";
import "./index.css";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handelOpenMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="d-flex justify-content-center ">
      <div
        className={`nabar${
          scrolled
            ? " navbar-after-scroll col-10"
            : " navbar-befor-scroll col-12"
        }`}
      >
        <div className="navbar-left col-lg-3 col-md-3 col-12 m-auto fs-lg-1 fs-md-2 fs-sm-3 fs-3">
          <div className="menu-section px-sm-4 px-5">
            online shop name
            <div>
              {!open ? (
                <IoMenu
                  onClick={handelOpenMenu}
                  className=" menu-icone fs-1 d-block d-md-none"
                />
              ) : (
                <IoMdClose
                  onClick={handelOpenMenu}
                  className=" menu-icone fs-1 d-block d-md-none"
                />
              )}
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
      {open && (
        <div className="open-menu col-6">
            <IoMdClose onClick={handelOpenMenu} className="icone-open-menu" />
          <ul className="">
            <li className="d-flexr">all products</li>
            <li>product 1</li>
            <li>product 2</li>
            <li>product 3</li>
          </ul>
        </div>
      )}
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
