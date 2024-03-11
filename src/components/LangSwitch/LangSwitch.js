import React, { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import "./LangSwitch.scss";

function LangSwitch() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="lang_switch">
      <div className="form_toggle">
        <label className="contactChoice item-1">
          <input
            id="fid-1"
            type="radio"
            name="radio"
            value="ru"
            checked={language === "ru"}
            onChange={handleLanguageChange}
          />
          <div className="langs">ru</div>
        </label>
        <label className="contactChoice item-2">
          <input
            id="fid-2"
            type="radio"
            name="radio"
            value="en"
            checked={language === "en"}
            onChange={handleLanguageChange}
          />
          <div className="langs">en</div>
        </label>
      </div>
    </div>
  );
}

export default LangSwitch;
