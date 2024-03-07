import React from "react";
import BigCard from "../BigCard/BigCard.js";

function BigCards({ items, baseurl }) {
  return (
    <React.Fragment>
      {items.map((item) => (
        <BigCard key={item.id} card={item} baseurl={baseurl} />
      ))}
    </React.Fragment>
  );
}

export default BigCards;
