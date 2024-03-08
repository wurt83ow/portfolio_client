import React from "react";
import "./RatingMini.scss";

function RatingMini({ rating, isActive }) {
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

  return isActive && <div className="rating-mini">{renderStars()}</div>;
}

export default RatingMini;