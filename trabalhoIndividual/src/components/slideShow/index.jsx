import React, { useState, useEffect } from "react";
import "./slideshow.css";

const Slideshow = ({ imagens }) => {
  const [imagemAtual, setImagemAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagemAtual((imagemAtual + 1) % imagens.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imagemAtual, imagens.length]);

  return (
    <div className="slideshow-container">
      <img
        src={imagens[imagemAtual]}
        alt={`Imagem ${imagemAtual + 1}`}
        className="slideshow-imagem"
      />
    </div>
  );
};

export default Slideshow;
