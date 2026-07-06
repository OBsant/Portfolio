import React from "react";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import animation from "../LottieAnimations/animation.json";

export const ContainerProfile = () => {
  return (
    <div className="perfil-container">
      <div className="fonts">
        <div className="fonts-edit">
          <h4 className="title-small">Olá, sou Ocivaldo Bruno</h4>
          <h1 className="title-big">Desenvolvedor Outsystems</h1>
          <div className="cta-buttons">
            <a href="#container-proj" className="cta-primary">
              Ver Projetos
            </a>
            <a href="#container-contacts" className="cta-secondary">
              Contato
            </a>
          </div>
        </div>
        <Lottie animationData={animation} loop={true} className="lottie" />
      </div>
    </div>
  );
};
