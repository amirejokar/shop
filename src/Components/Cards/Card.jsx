import React from "react";
import './Card.css'
import model2 from './model1.png'
export default function Card() {
  return (
    <div class="card">
      <img src={model2} className="card-img" alt="khanom khanomi " />
      <p class="heading">Popular this month</p>
    </div>
  );
}
