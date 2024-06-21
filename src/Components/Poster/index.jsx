import React from "react";
import "./index.css";
import poster1 from "./poster1.jpg";
import poster2 from "./poster2.jpg";
export default function Posters() {
  return (
    <div className="poster-section d-flex m-auto">
      <div class="container">
        <div data-text="name" style={{ "--r": "-15" }} class="glass">
          <img className="back-img" src={poster1} alt="khoshkel khanomi" />
        </div>
        <div data-text="name" style={{ "--r": "--r" }} class="glass">
          <img className="back-img" src={poster2} alt="khoshkel khanomi" />
        </div>
      </div>
      <div className="poster-txt col-md-5 m-auto ">
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
