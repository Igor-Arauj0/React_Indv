import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./input.css";

export default function InputSearchBar({
  personagens,
  setPersonagensFiltrados,
}) {
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const handleMudancaInput = (e) => {
    setTermoPesquisa(e.target.value);
  };

  const handlePesquisa = () => {
    const resultado = personagens.filter((personagem) =>
      personagem.toLowerCase().includes(termoPesquisa.toLowerCase())
    );

    setPersonagensFiltrados(resultado);
  };

  const handleTeclaPress = (e) => {
    if (e.key === "Enter") {
      handlePesquisa();
    }
  };

  return (
    <div className="barra-pesquisa">
      <input
        type="text"
        placeholder="Pesquise o nome do personagem!"
        value={termoPesquisa}
        onChange={handleMudancaInput}
        onKeyDown={handleTeclaPress}
      />
      <button onClick={handlePesquisa}>
        <FaSearch />
      </button>
    </div>
  );
}
