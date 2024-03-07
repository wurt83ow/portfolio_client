import React, { Fragment } from "react";
import Card from "../Card/Card.js";

function Cards({ items, baseurl }) {
  return (
    <React.Fragment>
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          card={item}
          isActive={item.isActive}
          rating={item.rating}
          baseurl={baseurl}
        />
      ))}
    </React.Fragment>
  );
}

export default Cards;
