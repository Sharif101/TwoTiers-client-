import React from "react";
import "./Error.css";

const Error = () => {
  let title = "Shutter Up -Error";
  document.title = title;
  return (
    <div>
      <div className="error">
        <div className="container">
          <p>
            HTTP: <span>404</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
