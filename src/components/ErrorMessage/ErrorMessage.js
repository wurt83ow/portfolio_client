import React from "react";
import "./ErrorMessage.scss";

const ErrorMessage = ({ error }) => {
  let message = "An unknown error occurred.";

  if (error === "Failed to fetch") {
    message =
      "Sorry, the server is temporarily unavailable. Please try again later.";
  }

  return <div className="error-message">{message}</div>;
};

export default ErrorMessage;
