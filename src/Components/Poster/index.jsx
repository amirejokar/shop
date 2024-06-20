import React from "react";
import "./index.css";
import poster1 from "./poster1.jpg";
import poster2 from "./poster2.jpg";
export default function Posters() {
  return (
    <div class="container">
      <div data-text="name" style={{ "--r": "-15" }} class="glass">
        <img className="back-img" src={poster1} alt="khoshkel khanomi" />
      </div>
      <div data-text="name" style={{ "--r": "--r" }} class="glass">
        <img className="back-img" src={poster2} alt="khoshkel khanomi" />
      </div>
    </div>
  );
}
