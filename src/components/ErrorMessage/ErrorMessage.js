import React from "react";
import PropTypes from "prop-types";
import "./ErrorMessage.scss";

const ErrorMessage = ({ error }) => {
  let message = "An unknown error occurred.";

  if (error === "Failed to fetch") {
    message =
      "Sorry, the server is temporarily unavailable. Please try again later.";
  }

  return <div className="error-message">{message}</div>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
