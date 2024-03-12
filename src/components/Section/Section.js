import React, { useContext } from "react";
import "./Section.scss";
import LanguageContext from "../../contexts/LanguageContext.js";

import SectionHeader from "./SectionHeader/SectionHeader.js";
import Cards from "./Cards/Cards.js";
import SocialIcons from "./SocialIcons/SocialIcons.js";
import Projects from "./Projects/Projects.js";

function Section({ id, nclass, title, content, baseurl }) {
  const { language } = useContext(LanguageContext);
  const classNames = `${nclass.toLowerCase()} ${
    id % 2 === 1 ? "highlight" : ""
  }`;

  // Преобразуем nclass в строку, подходящую для использования в качестве id
  const sectionId = `section-${nclass.toLowerCase().replace(/\s+/g, "-")}`;

  // Проверяем, что content.textBefore определен
  const textBefore = content.textBefore ? content.textBefore[language] : "";

  return (
    <section id={sectionId} className={classNames}>
      <div className="container">
        <div className="row">
          <SectionHeader
            nclass={nclass}
            title={title[language]}
            text={
              textBefore
                ? textBefore.split("\n").map((item, index) => (
                    <React.Fragment key={`before-${index}`}>
                      {item}
                      <br />
                    </React.Fragment>
                  ))
                : null
            }
          />
        </div>

        <div className={`row ${nclass.toLowerCase()}_cards`}>
          <div className="container">
            {content.items && content.items.length > 0 && (
              <React.Fragment>
                {content.iclass === "cards" && (
                  <Cards items={content.items} baseurl={baseurl} />
                )}
                {content.iclass === "projects" && (
                  <Projects content={content} />
                )}
                {content.iclass === "socialIcons" && (
                  <SocialIcons
                    items={content.items}
                    baseurl={baseurl}
                    textAfter={
                      content.textAfter ? content.textAfter[language] : ""
                    }
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
