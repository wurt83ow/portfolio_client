import React, { Fragment } from "react";
import Card from "../Card/Card.js";
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

export default Cards;
