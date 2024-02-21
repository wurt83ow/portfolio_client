import React from "react";
import RatingMini from "../ratingMini/ratingMini.js";

function Card({ card, isActive }) {
  console.log("8888888888888888888888", isActive);
  return (
    <div className="col-md-3">
      <div className="skills_icon skill_card">
        <img src={card.src} alt={card.alt} />
      </div>
      <h2 className="skills_card_descr">{card.alt}</h2>
      {<RatingMini rating={card.rating} isActive={isActive} />}
    </div>
  );
}

export default Card;
