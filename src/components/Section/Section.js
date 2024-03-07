import React from "react";
import "./Section.scss";

import SectionHeader from "./SectionHeader/SectionHeader.js";
import Cards from "./Cards/Cards.js";
import BigCards from "./BigCards/BigCards.js";
import SocialIcons from "./SocialIcons/SocialIcons.js";

function Section({ id, nclass, title, content, baseurl }) {
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
                {content.iclass === "cards" && (
                  <Cards items={content.items} baseurl={baseurl} />
                )}
                {content.iclass === "bigCards" && (
                  <BigCards items={content.items} baseurl={baseurl} />
                )}
                {content.iclass === "socialIcons" && (
                  <SocialIcons
                    items={content.items}
                    baseurl={baseurl}
                    textAfter={content.textAfter}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
