import React from "react";
import "./section.scss";

import SectionHeader from "../sectionHeader/sectionHeader.js";
import Card from "../card/card.js";

function Section({ id, nclass, title, content }) {
  const classNames = `${nclass.toLowerCase()} ${
    id % 2 === 0 ? "highlight" : ""
  }`;

  return (
    <section className={classNames}>
      <div className="container">
        <div className="row">
          <SectionHeader
            nclass={nclass}
            title={title}
            text={content.text.split("\n").map((item, index) => (
              <React.Fragment key={index}>
                {item}
                <br />
              </React.Fragment>
            ))}
          />
        </div>
        {content.cards && content.cards.length > 0 && (
          <div className={`row gx-5 ${nclass.toLowerCase()}_cards`}>
            <div className="container">
              <div className="row row-cols-1 row-cols-md-4 g-4">
                {content.cards.map((card, index) => (
                  <Card
                    key={index}
                    card={card}
                    isActive={content.isActive}
                    rating={content.rating}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;
