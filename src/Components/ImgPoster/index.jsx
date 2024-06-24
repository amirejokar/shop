import React from "react";
import "./index.css";
import poster from "./poster-final.jpg";

export default function ImagePoster() {
  return (
    <div className="image-poster-box">
      <div className="img-poster mask">
        <img src={poster} alt="khoshkele" />
      </div>
      <p className="txt-poster">lorem lorem lorem</p>
    </div>
  );
}
