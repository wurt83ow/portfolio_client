import React from "react";

function Card({ image, isActive }) {
  console.log("8888888888888888888888", isActive);
  return (
    <div className="col-md-3">
      <div className="skills_icon skill_card">
        <img src={image.src} alt={image.alt} />
      </div>
      <h2 className="skills_card_descr">{image.alt}</h2>
      {isActive && (
        <div className="rating-mini">
          <span className="active"></span>
          <span className="active"></span>
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
}

export default Card;
