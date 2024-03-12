import React, { useContext } from "react";
import RatingMini from "../../RatingMini/RatingMini.js";
import "./Card.scss";
import LanguageContext from "../../../contexts/LanguageContext.js"; // Импортируем контекст

function Card({ id, card, baseurl }) {
  const { language } = useContext(LanguageContext); // Используем контекст

  return (
    <div className="col-md-3">
      <div className="skills_icon skill_card">
        <a href={card.hrefs[0]} target="_blank" rel="noopener noreferrer">
          <img src={baseurl + card.src} alt={card.alt[language]} />{" "}
          {/* Используем текущий язык для alt */}
        </a>
      </div>
      <div className="skills_card_descr">
        <a href={card.hrefs[0]} target="_blank" rel="noopener noreferrer">
          <h2>{card.alt[language]}</h2> {/* Используем текущий язык для alt */}
        </a>
      </div>
      {<RatingMini key={id} rating={card.rating} />}
    </div>
  );
}

export default Card;
