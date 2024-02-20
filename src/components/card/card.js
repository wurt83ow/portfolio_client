import React from "react";

function Card({ image, isActive }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image.src} className="card-img-top" alt={image.alt} />
        <div className="card-body">
          <p className="card-text">{image.alt}</p>
        </div>
        {isActive && (
          <div className="rating-mini">
            <span className="active"></span>
            <span className="active"></span>
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
