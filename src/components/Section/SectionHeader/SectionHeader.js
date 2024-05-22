import React from "react";
import PropTypes from "prop-types";

function SectionHeader({ nclass, title, text }) {
  return (
    <div className="col-md-12">
      <h2 className={`${nclass.toLowerCase()}_header section_header`}>
        {title}
      </h2>
      <h2 className={`${nclass.toLowerCase()}_descr section_descr`}>{text}</h2>
    </div>
  );
}

SectionHeader.propTypes = {
  nclass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SectionHeader;
