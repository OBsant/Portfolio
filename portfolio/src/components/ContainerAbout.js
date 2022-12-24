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
                Olá, pode me chamar apenas de Bruno, sempre gostei da área de
                tecnologia desde criança, comecei a estudar seriamente na
                faculdade de Ciência da computação em 2020 e hoje almejo ser
                desenvolvedor web, e tenho o desejo de um dia conseguir
                transformar a vida das pessoas através da tecnologia, busco
                crescer juntamente com a empresa e estou sempre pronto para
                aprender novas coisas e enfrentar desafios!
              </p>
            </div>
            <h2>Tecnologias que domino:</h2>
            <div className="technologies">
              <Technologies logo={html} tech="HTML" />
              <Technologies logo={css} tech="CSS" />
              <Technologies logo={js} tech="JavaScript" />
              <Technologies logo={react} tech="ReactJS" />
              <Technologies logo={sass} tech="SASS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
