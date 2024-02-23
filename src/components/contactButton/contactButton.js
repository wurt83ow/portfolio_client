import React from "react";

function ContactButton({ text }) {
  return (
    <div className="contacts_btn">
      <button data-modal>{text}</button>
    </div>
  );
}

export default ContactButton;
