import React from "react";
import RatingMini from "../../ratingMini/ratingMini.js";

function Card({ id, card, isActive, baseurl }) {
  return (
    <div className="col-md-3">
      <div className="skills_icon skill_card">
        <img src={baseurl + card.src} alt={card.alt} />
      </div>
      <h2 className="skills_card_descr">{card.alt}</h2>
      {<RatingMini key={id} rating={card.rating} isActive={isActive} />}
    </div>
  );
}

export default Card;
