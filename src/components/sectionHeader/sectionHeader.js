import React from "react";

function SectionHeader({ nclass, title, text }) {
  return (
    <div className="col-md-12">
      <h2 className={`${nclass.toLowerCase()}_header`}>{title}</h2>
      <h2 className={`${nclass.toLowerCase()}_descr`}>{text}</h2>
    </div>
  );
}

export default SectionHeader;
