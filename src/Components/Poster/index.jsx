import React from "react";
import poster1 from "./poster1.jpg";
import poster2 from "./poster2.jpg";
import "./index.css";
export default function Posters() {
  return (
    <div className="poster">
      <div className="poster-img col-6">
        <div className="img-box">
          <img src={poster1} alt="khoshkel khanom" />
          <img src={poster2} alt="khoshkel khanom" />
        </div>
      </div>
      <div className="poster-text col-6">
        <p className="txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          temporibus dolor libero pariatur exercitationem? Eveniet, ipsum facere
          est autem libero minima beatae atque maiores. Ratione delectus iure
          facere dolore nulla?
        </p>
      </div>
    </div>
  );
}
