import React from "react";
import "./section.css";

import Header from "../header/header.js";
import Card from "../card/card.js";

function Section({ title, content }) {
  return (
    <section className="my_skills">
      <div className="container">
        <div className="row">
          <Header
            title={title}
            text={content.text.split("\n").map((item, index) => (
              <React.Fragment key={index}>
                {item}
                <br />
              </React.Fragment>
            ))}
          />
        </div>
        <div className="row gx-5 skill_cards">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {content.images &&
                content.images.map((image, index) => (
                  <Card
                    key={index}
                    image={image}
                    isActive={content.isActive}
                    className={index % 2 !== 0 ? "highlight" : ""}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
