import React from "react";
import "./section.scss";

import SectionHeader from "./sectionHeader/sectionHeader.js";
import Card from "./card/card.js";
import BigCard from "./bigCard/bigCard.js";
import SocialIcon from "./socialIcon/socialIcon.js";

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
            text={content.textBefore.split("\n").map((item, index) => (
              <React.Fragment key={`before-${index}`}>
                {item}
                <br />
              </React.Fragment>
            ))}
          />
        </div>

        <div className={`row ${nclass.toLowerCase()}_cards`}>
          <div className="container">
            {content.items && content.items.length > 0 && (
              <div className="row row-cols-1 row-cols-md-4 g-4">
                {content.items.map((item, _) => {
                  const key = `${item.iclass}-${item.id}`;
                  switch (content.iclass) {
                    case "cards":
                      return (
                        <Card
                          key={key}
                          id={item.id}
                          card={item}
                          isActive={content.isActive}
                          rating={content.rating}
                        />
                      );
                    case "bigCards":
                      return <BigCard key={key} card={item} />;
                    case "socialIcons":
                      return (
                        // <div className="col-md-12 socialnet_icons">
                        <SocialIcon key={key} card={item} />
                        // </div>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            )}
          </div>
        </div>

        {content.textAfter && (
          <div className="socialnet_descr">
            {content.textAfter.split("\n").map((item, index) => (
              <React.Fragment key={`after-${index}`}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;
