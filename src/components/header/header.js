import React from "react";

function Header({ title, text }) {
  return (
    <div className="col-md-12">
      <h2 className="myskills_header">{title}</h2>
      <h2 className="myskills_descr">{text}</h2>
    </div>
  );
}

export default Header;
