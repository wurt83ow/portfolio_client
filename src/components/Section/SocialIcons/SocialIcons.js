import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon.js";

function SocialIcons({ items, baseurl, textAfter = "" }) {
  return (
    <div className="col-md-12 socialnet_icons">
      {items.map((item) => (
        <SocialIcon key={item.id} card={item} baseurl={baseurl} />
      ))}
      <div className="socialnet_descr">
        {textAfter &&
          textAfter.split("\n").map((item, index) => (
            <React.Fragment key={`after-${index}`}>
              {item}
              <br />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default SocialIcons;
