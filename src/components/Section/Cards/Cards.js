import React from "react";
import PropTypes from "prop-types";
import Card from "./Card/Card.js";
import "./Cards.scss";
function Cards({ items, baseurl }) {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          card={item}
          rating={item.rating}
          baseurl={baseurl}
        />
      ))}
    </div>
  );
}

Cards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  baseurl: PropTypes.string.isRequired,
};

export default Cards;
