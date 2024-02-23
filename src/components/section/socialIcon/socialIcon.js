import React from "react";

function SocialIcon({ card }) {
  console.log("77777777777777777777777", card);
  return (
    <a href={card.href}>
      <img src={card.src} alt={card.alt} />
    </a>
  );
}

export default SocialIcon;
