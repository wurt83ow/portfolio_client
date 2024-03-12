import React, { useContext } from "react";
import LanguageContext from "../../../contexts/LanguageContext.js"; // Импортируем контекст

function SocialIcon({ card, baseurl }) {
  const { language } = useContext(LanguageContext); // Используем контекст

  return (
    <a href={card.hrefs[0]} target="_blank" rel="noopener noreferrer">
      <img src={baseurl + card.src} alt={card.alt[language]} />{" "}
      {/* Используем текущий язык для alt */}
    </a>
  );
}

export default SocialIcon;
