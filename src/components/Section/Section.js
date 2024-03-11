import React from "react";
import "./Section.scss";

import SectionHeader from "./SectionHeader/SectionHeader.js";
import Cards from "./Cards/Cards.js";
import SocialIcons from "./SocialIcons/SocialIcons.js";
import Projects from "./Projects/Projects.js";

function Section({ id, nclass, title, content, baseurl }) {
  const classNames = `${nclass.toLowerCase()} ${
    id % 2 === 1 ? "highlight" : ""
  }`;

  console.log(classNames);
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
              <React.Fragment>
                {content.iclass === "cards" && (
                  <Cards items={content.items} baseurl={baseurl} />
                )}
                {content.iclass === "projects" &&
                  (console.log("77777777777777777777777777", content.items) || (
                    <Projects content={content} />
                  ))}
                {content.iclass === "socialIcons" && (
                  <SocialIcons
                    items={content.items}
                    baseurl={baseurl}
                    textAfter={content.textAfter}
                  />
                )}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
