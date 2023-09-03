// ErrorMessage.js
import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
      {message}
    </div>
  );
};

export default ErrorMessage;
