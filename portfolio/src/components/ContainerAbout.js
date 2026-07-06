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
import outsystems from "../img/outsystems.png";
import cshap from "../img/csharp.png";
import sql from "../img/sql.png";
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
                Desenvolvedor OutSystems com mais de 2 anos de experiência combinada em OutSystems 11 e OutSystems Developer Cloud (ODC). 
                Atuou no desenvolvimento de aplicações corporativas web e mobile, do levantamento de requisitos ao deploy em produção, 
                incluindo integrações via REST e SOAP APIs e sustentação técnica. Conhecimento complementar em JavaScript, TypeScript, 
                Python, React.js, Next.js, C# e SQL. Perfil autônomo, com facilidade de adaptação a novos ambientes e times, e foco em 
                entregar soluções alinhadas aos objetivos do negócio. 
              </p>
            </div>
            <h2>Tecnologias que domino:</h2>
            <div className="technologies">
              <Technologies logo={outsystems} tech="OutSystems" />
              <Technologies logo={cshap} tech="C#" />
              <Technologies logo={react} tech="ReactJS" />
              <Technologies logo={ts} tech="TypeScript" />
              <Technologies logo={js} tech="JavaScript" />
              <Technologies logo={sass} tech="SASS" />
              <Technologies logo={css} tech="CSS" />
              <Technologies logo={html} tech="HTML" />
              <Technologies logo={sql} tech="SQL" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
