import React, { useContext } from "react";
import LanguageContext from "../../../contexts/LanguageContext.js"; // Импортируем контекст

function SocialIcon({ card, baseurl }) {
  const { language } = useContext(LanguageContext); // Используем контекст

  return (
    <a href={card.href}>
      <img src={baseurl + card.src} alt={card.alt[language]} />{" "}
      {/* Используем текущий язык для alt */}
    </a>
  );
}

export default SocialIcon;
