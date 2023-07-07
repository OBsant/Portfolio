import React from "react";
import { Titles } from "./Titles";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
//imgs
import pic from "../img/foto.jpg";
import html from "../img/html.png";
import css from "../img/cssIcon.png";
import js from "../img/js.png";
import react from "../img/reactIcon.png";
import sass from "../img/sass.png";
import ts from "../img/typescript.png";
import { Technologies } from "./Technologies";

export const ContainerAbout = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container" id="container">
      <div data-aos="zoom-in">
        <Titles title="Sobre mim" />
        <div className="container-about">
          <img src={pic} alt="pic" className="pic" />
          <div className="container-about-elements">
            <div className="about">
              <p>
                Olá, pode me chamar apenas de Bruno, Sou um programador
                Front-End com experiência em JavaScript, TypeScript, HTML e CSS.
                Tenho habilidades no desenvolvimento de aplicações web usando
                React.js para projetos pessoais e acadêmicos. Procuro novas
                oportunidades para expandir minhas habilidades e contribuir em
                projetos desafiadores.
              </p>
            </div>
            <h2>Tecnologias que domino:</h2>
            <div className="technologies">
              <div className="stack1">
                <Technologies logo={react} tech="ReactJS" />
                <Technologies logo={ts} tech="TypeScript" />
                <Technologies logo={js} tech="JavaScript" />
              </div>
              <div className="stack2">
                <Technologies logo={sass} tech="SASS" />
                <Technologies logo={css} tech="CSS" />
                <Technologies logo={html} tech="HTML" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
