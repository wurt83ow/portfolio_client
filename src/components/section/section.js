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
              <React.Fragment key={index}>
                {item}
                <br />
              </React.Fragment>
            ))}
          />
        </div>

        <div className={`row ${nclass.toLowerCase()}_cards`}>
          <div className="container">
            {content.cards && content.cards.length > 0 && (
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
            )}
            {content.bigCards &&
              content.bigCards.length > 0 &&
              content.bigCards.map((bigCard, index) => (
                <BigCard key={index} card={bigCard} />
              ))}
          </div>
          {content.socialIcons && content.socialIcons.length > 0 && (
            <div className="col-md-12 socialnet_icons">
              {content.socialIcons.map((socialIcon, index) => (
                <SocialIcon key={index} card={socialIcon} />
              ))}
            </div>
          )}
        </div>

        {content.textAfter && (
          <div className="socialnet_descr">
            {content.textAfter.split("\n").map((item, index) => (
              <React.Fragment key={index}>
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
