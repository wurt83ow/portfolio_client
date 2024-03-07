import React from "react";
import "./BigCard.scss";

function BigCard({ card, baseurl }) {
  return (
    <div className="row">
      <div className="col-md porfolio_card">
        <div className="portfolio_image">
          <img src={baseurl + card.src} alt={card.alt} />
        </div>
        <div className="portfolio_link">
          <a href={card.href}>{card.hrefText}</a>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
