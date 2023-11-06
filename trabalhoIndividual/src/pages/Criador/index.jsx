import React from "react";
import "./criador.css";
import Pfp from "../../img/CriadorIcon.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Criador() {
  return (
    <>
      <div className="container">
        <h1 className="tituloC">Criador do site</h1>
        <div className="profile">
          <img src={Pfp} alt="Foto do Criador" />
          <div>
            <p className="description">Igor Prata Mendes Araujo</p>
            <p className="description">
              Um simples apreciador de Breaking Bad.
            </p>
          </div>
          <div className="links-icons">
            <p className="description1">
              Email para contato: igorp.m.araujo@gmail.com
            </p>
            <a
              href="https://github.com/Igor-Arauj0"
              target="_blank"
              className="links-icons"
            >
              <FaGithub className="github" style={{ fontSize: "40px" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/igor-prata-mendes-araujo-8b5b2928b/?original_referer=https%3A%2F%2Fwww.linkedin.com%2Fin%2Figor-prata-mendes-araujo-8b5b2928b%2F"
              target="_blank"
              className="links-icons"
            >
              <FaLinkedin className="linkedin" style={{ fontSize: "40px" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
