import React from "react";
import PropTypes from "prop-types";
import "./RatingMini.scss";

function RatingMini({ rating }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="active"></span>);
      } else {
        stars.push(<span key={i}></span>);
      }
    }
    return stars;
  };

  return <div className="rating-mini">{renderStars()}</div>;
}

RatingMini.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingMini;
