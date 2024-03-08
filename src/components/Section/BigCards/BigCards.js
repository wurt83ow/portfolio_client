import React from "react";
import BigCard from "../BigCard/BigCard.js";

function BigCards({ items, baseurl }) {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {items.map((item) => (
        <BigCard key={item.id} card={item} baseurl={baseurl} />
      ))}
    </div>
  );
}

export default BigCards;
