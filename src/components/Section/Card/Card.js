import React from "react";
import RatingMini from "../../RatingMini/RatingMini.js";
import "./Card.scss";

function Card({ id, card, baseurl }) {
  return (
    <div className="col-md-3">
      <div className="skills_icon skill_card">
        <img src={baseurl + card.src} alt={card.alt} />
      </div>
      <h2 className="skills_card_descr">{card.alt}</h2>
      {<RatingMini key={id} rating={card.rating} />}
    </div>
  );
}

export default Card;
