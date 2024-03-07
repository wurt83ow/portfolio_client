import React from "react";
import "./LangSwitch.scss";

function LangSwitch() {
  return (
    <div className="lang_switch">
      <div className="form_toggle">
        <label className="contactChoice item-1">
          <input
            id="fid-1"
            type="radio"
            name="radio"
            value="ru"
            defaultChecked
          />
          <div className="langs">ru</div>
        </label>
        <label className="contactChoice item-2">
          <input id="fid-2" type="radio" name="radio" value="eng" />
          <div className="langs">eng</div>
        </label>
      </div>
    </div>
  );
}

export default LangSwitch;
