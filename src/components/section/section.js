import React from "react";
import "./section.css";

import Header from "../header/header.js";
import Card from "../card/card.js";

function Section({ id, nclass, title, content }) {
  const classNames = `${nclass.toLowerCase()} ${
    id % 2 === 0 ? "highlight" : ""
  }`;

  console.log("77777777777777777777777777777777777777777777", classNames);
  return (
    <section className={classNames}>
      <div className="container">
        <div className="row">
          <Header
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
        {content.images && content.images.length > 0 && (
          <div className={`row gx-5 ${nclass.toLowerCase()}_cards`}>
            <div className="container">
              <div className="row row-cols-1 row-cols-md-4 g-4">
                {content.images.map((image, index) => (
                  <Card key={index} image={image} isActive={content.isActive} />
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
