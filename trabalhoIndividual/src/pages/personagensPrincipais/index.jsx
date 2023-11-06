import React from "react";
import { useState } from "react";
import "./personagens.css";
import InputSearchBar from "../../components/inputPesquisa";

export default function Personagens() {
  const personagens = [
    "Walter White",
    "Jesse Pinkman",
    "Skyler White",
    "Hank Schrader",
    "Saul Goodman",
    "Gustavo Fring",
    "Mike Ehrmantraut",
    "Marie Schrader",
    "Tuco Salamanca",
    "Walter JR",
    //  mais personagens
    "Lydia Rodarte-Quayle",
    "Todd Alquist",
    "Jack Welker",
    "Jane Margolis",
    "Skinny Pete",
    "Badger",
    "Gale Boetticher",
    "Andrea Cantillo",
    "Hector Salamanca",
    "Steve Gomez",
  ];

  const classesDeBannerPorPersonagem = {
    "Walter White": "banner-1",
    "Jesse Pinkman": "banner-2",
    "Skyler White": "banner-3",
    "Hank Schrader": "banner-4",
    "Saul Goodman": "banner-5",
    "Gustavo Fring": "banner-6",
    "Mike Ehrmantraut": "banner-7",
    "Marie Schrader": "banner-8",
    "Tuco Salamanca": "banner-9",
    "Walter JR": "banner-10",
    "Lydia Rodarte-Quayle": "banner-11",
    "Todd Alquist": "banner-12",
    "Jack Welker": "banner-13",
    "Jane Margolis": "banner-14",
    "Skinny Pete": "banner-15",
    Badger: "banner-16",
    "Gale Boetticher": "banner-17",
    "Andrea Cantillo": "banner-18",
    "Hector Salamanca": "banner-19",
    "Steve Gomez": "banner-20",
  };

  const [personagensFiltrados, setPersonagensFiltrados] = useState(personagens);
  const [indiceInicial, setIndiceInicial] = useState(0);
  const [indiceFinal, setIndiceFinal] = useState(10);

  const mostrarProximaPagina = () => {
    setIndiceInicial(indiceInicial + 10);
    setIndiceFinal(indiceFinal + 10);
  };

  const mostrarPaginaAnterior = () => {
    setIndiceInicial(indiceInicial - 10);
    setIndiceFinal(indiceFinal - 10);
  };

  return (
    <>
      <h1 className="tituloP">Personagens</h1>
      <InputSearchBar
        personagens={personagens}
        setPersonagensFiltrados={setPersonagensFiltrados}
      />
      <div className="personagens-cards-container">
        <div className="cards-content">
          {personagensFiltrados
            .slice(indiceInicial, indiceFinal)
            .map((personagem, index) => (
              <div
                key={index}
                className={`card ${classesDeBannerPorPersonagem[personagem]}`}
              >
                {personagem}
              </div>
            ))}
        </div>
      </div>
      <div className="pagination-buttons">
        <div className="pagination-button">
          {indiceInicial > 0 && (
            <button onClick={mostrarPaginaAnterior}>Página Anterior</button>
          )}
        </div>
        <div className="pagination-button">
          {indiceFinal < personagensFiltrados.length && (
            <button onClick={mostrarProximaPagina}>Próxima Página</button>
          )}
        </div>
      </div>
    </>
  );
}
