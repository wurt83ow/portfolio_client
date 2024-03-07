import React from "react";

function SocialIcon({ card, baseurl }) {
  return (
    <a href={card.href}>
      <img src={baseurl + card.src} alt={card.alt} />
    </a>
  );
}

export default SocialIcon;
