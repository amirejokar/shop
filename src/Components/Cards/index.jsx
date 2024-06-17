import React from "react";
import "./index.css";
import Card from "./Card";
import model1 from "./model1.png";
import model2 from "./model2.png";
import model3 from "./model3.png";
export default function Cards() {
  const cardsData = [
    { id: "1", img: model1, txt: "Popular this month" },
    { id: "3", img: model3, txt: "Popular this month" },
    { id: "2", img: model2, txt: "Popular this month" },
    { id: "3", img: model3, txt: "Popular this month" },
  ];
  return (
    <div className="cards-box row px-2">
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
    </div>
  );
}
