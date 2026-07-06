import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p>&copy; {year} Ocivaldo Bruno</p>
    </div>
  );
};
