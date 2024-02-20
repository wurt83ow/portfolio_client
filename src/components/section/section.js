import React from "react";
import "./section.css";

import Header from "../header/header.js";
import Card from "../card/card.js";

function Section({ title, content }) {
  return (
    <section className="my_skills">
      <div className="container">
        <div className="row">
          <Header title={title} text={content.text} />
        </div>
        <div className="row gx-5 skill_cards">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {content.images &&
                content.images.map((image, index) => (
                  <Card key={index} image={image} isActive={content.isActive} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
