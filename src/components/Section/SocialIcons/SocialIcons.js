import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon.js";

function SocialIcons({ items, baseurl, textAfter = "" }) {
  return (
    <div className="row  ">
      <div className="col-md-4 socialnet_icons">
        {items.map((item) => {
          return <SocialIcon key={item.id} card={item} baseurl={baseurl} />;
        })}
      </div>

      {textAfter &&
        textAfter.split("\n").map((item, index) => (
          <div className="socialnet_descr" key={`after-${index}`}>
            {item}
            <br />
          </div>
        ))}
    </div>
  );
}

export default SocialIcons;
