import React from 'react';

function ErrorMessage({ errorMessage }) {
  return errorMessage ? (
    <p className="errorMessage">{errorMessage}</p>
  ) : null;
}

export default ErrorMessage;
