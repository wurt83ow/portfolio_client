import React from "react";

function SocialIcon({ card }) {
  return (
    <a href={card.href}>
      <img src={card.src} alt={card.alt} />
    </a>
  );
}

export default SocialIcon;
