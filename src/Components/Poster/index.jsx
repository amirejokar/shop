import React from "react";
import "./index.css";
import poster1 from "./poster1.jpg";
import poster2 from "./poster2.jpg";
export default function Posters() {
  return (
    <div className="poster-section d-md-flex d-sm-block  ">
      <div className="container justify-content-center m-auto col-xl-5 col-lg-3 col-md-5 col-sm-12 mb-sm-4 mb-4 ">
        <div data-text="name" style={{ "--r": "-15" }} className="glass">
          <img className="back-img" src={poster1} alt="khoshkel khanomi" />
        </div>
        <div data-text="name" style={{ "--r": "--r" }} className="glass">
          <img className="back-img" src={poster2} alt="khoshkel khanomi" />
        </div>
      </div>
      <div className="poster-txt  mx-3 col-xl-6 col-lg-6 col-md-4 col-sm-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        mollitia odio optio autem incidunt laudantium animi ipsum eligendi sequi
        nisi deleniti cupiditate vero repellendus voluptate alias, quasi, quis
        porro architecto.
        upiditate vero repellendus voluptate alias, quasi, quis
        porro architecto.upiditate vero repellendus voluptate alias, quasi, quis
        porro architecto.
      </div>
    </div>
  );
}
