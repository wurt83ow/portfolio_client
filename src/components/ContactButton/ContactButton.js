import React from "react";
import PropTypes from "prop-types";
import "./ContactButton.scss";

function ContactButton({ text }) {
  return (
    <div className="contacts_btn">
      <button data-modal>{text}</button>
    </div>
  );
}

ContactButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ContactButton;
