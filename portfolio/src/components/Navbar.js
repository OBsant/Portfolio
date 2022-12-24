import React from "react";
import { Titles } from "./Titles";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Titles title="Portfólio" />
      <div className="links">
        <a href="#container">Sobre</a>
        <a href="#container-proj">Projetos</a>
        <a href="#container-contacts">Contatos</a>
      </div>
    </div>
  );
};
