import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Titles } from "./Titles";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

export const ContainerContacts = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-contacts" id="container-contacts">
      <div data-aos="zoom-in">
        <Titles title="Contatos" />
        <div className="container-contacts-links">
          <div className="card-contact">
            <h1 className="icon">
              <AiFillLinkedin />
            </h1>

            <a href="https://www.linkedin.com/in/ocsantos/" target="blank">
              Linkedin
            </a>
          </div>
          <div className="card-contact">
            <h1 className="icon">
              <AiFillGithub />
            </h1>
            <a href="https://github.com/OBsant" target="blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
