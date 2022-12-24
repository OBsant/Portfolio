import React from "react";

export const Technologies = ({ logo, tech }) => {
  return (
    <div className="tecnology">
      <img src={logo} alt="logo" className="logos" />
      <p>{tech}</p>
    </div>
  );
};
