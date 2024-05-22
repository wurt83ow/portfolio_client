import React, { useContext } from "react";
import PropTypes from "prop-types";
import LanguageContext from "../../../../contexts/LanguageContext.js"; // Импортируем контекст
import "./SocialIcon.scss";

function SocialIcon({ card, baseurl }) {
  const { language } = useContext(LanguageContext); // Используем контекст

  return (
    <a href={card.hrefs[0]} target="_blank" rel="noopener noreferrer">
      <img className="icon" src={baseurl + card.src} alt={card.alt[language]} />{" "}
      {/* Используем текущий язык для alt */}
    </a>
  );
}

SocialIcon.propTypes = {
  card: PropTypes.shape({
    hrefs: PropTypes.arrayOf(PropTypes.string).isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
  baseurl: PropTypes.string.isRequired,
};

export default SocialIcon;
