import React from "react";
import "./Card.css";
export default function Card({ img, txt }) {
  return (
    <div className="card m-auto col-xl-2 col-lg-2 col-md-2  col-sm-2 col-5  mt-5 ">
      <div className="mask-card">
        <img src={img} className="card-img" alt="khanom khanomi " />
      </div>
      <p class="heading">{txt}</p>
    </div>
  );
}
