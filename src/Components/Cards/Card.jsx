import React from "react";
import "./Card.css";
export default function Card({ img, txt }) {
  return (
    <div class="card">
      <div className="mask-card">
        <img src={img} className="card-img" alt="khanom khanomi " />
      </div>
      <p class="heading">{txt}</p>
    </div>
  );
}
