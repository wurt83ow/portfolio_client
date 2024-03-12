import React, { useContext } from "react";
import SocialIcon from "../SocialIcon/SocialIcon.js";
import "./SocialIcons.scss";
import LanguageContext from "../../../contexts/LanguageContext.js"; // Импортируем контекст

function SocialIcons({ items, baseurl, textAfter = {} }) {
  const { language } = useContext(LanguageContext); // Используем контекст

  // Проверяем, что textAfter определен
  const textAfterContent = textAfter[language] || "";

  return (
    <div className="row">
      <div className="col-md-4 socialnet_icons">
        {items.map((item) => {
          return <SocialIcon key={item.id} card={item} baseurl={baseurl} />;
        })}
      </div>

      {textAfterContent &&
        textAfterContent.split("\n").map((item, index) => (
          <div className="socialnet_descr" key={`after-${index}`}>
            {item}
            <br />
          </div>
        ))}
    </div>
  );
}

export default SocialIcons;
