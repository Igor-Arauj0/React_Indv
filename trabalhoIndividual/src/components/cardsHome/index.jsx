import React from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();

  const navigateToPage = (route) => {
    navigate(route);
    scrollPraCima();
  };

  const scrollPraCima = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="card-container" style={{ display: "flex", gap: "15px" }}>
      <div
        className="cardHome"
        style={{
          border: "1px solid black",
          margin: "10px",
          flex: "1",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#131111",
          boxShadow: "0 0 10px 5px rgba(0, 255, 0, 0.3)",
        }}
        onClick={() => navigateToPage("/enredo")}
      >
        <img
          className="card-img-top"
          src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776"
          alt="Card"
          style={{
            width: "380px",
            height: "260px",
            objectFit: "cover",
          }}
        />
        <div className="card-body" style={{ padding: "10px" }}>
          <h5 className="card-title">História</h5>
          <p className="cardHome-text">
            Conheça a história de uma das melhores, se não a melhor, série já
            feita.
          </p>
        </div>
        <div
          className="card-footer"
          style={{ borderTop: "1px solid black", padding: "10px" }}
        >
          <small className="text-muted">
            Clique no card para acessar a página.
          </small>
        </div>
      </div>

      <div
        className="cardHome"
        style={{
          border: "1px solid black",
          margin: "10px",
          flex: "1",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#131111",
          boxShadow: "0 0 10px 5px rgba(0, 255, 0, 0.3)",
        }}
        onClick={() => navigateToPage("/personagens")}
      >
        <img
          className="card-img-top"
          src="https://www.arealme.com/cover-images/which-breaking-bad-character-are-you.png"
          alt="Card"
          style={{
            width: "380px",
            height: "260px",
            objectFit: "cover",
            marginTop: "15px",
          }}
        />
        <div className="card-body" style={{ padding: "10px" }}>
          <h5 className="card-title">Personagens</h5>
          <p className="card-text">
            Descubra quais são os personagens mais importantes da série, que têm
            grande importância para a rica narrativa de Breaking Bad.
          </p>
        </div>
        <div
          className="card-footer"
          style={{ borderTop: "1px solid black", padding: "10px" }}
        >
          <small className="text-muted">
            Clique no card para acessar a página.
          </small>
        </div>
      </div>

      <div
        className="cardHome"
        style={{
          border: "1px solid black",
          margin: "10px",
          flex: "1",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#131111",
          boxShadow: "0 0 10px 5px rgba(0, 255, 0, 0.3)",
        }}
        onClick={() => navigateToPage("/criador")}
      >
        <img
          className="card-img-top"
          src="https://yt3.googleusercontent.com/Or4cjb2dtf_O5jVC4PKK5U5Bi4VSPgUw7ihkDpvdukmms5fQdlzTQhFWj3l3uVyT4qveYnhEgg=s900-c-k-c0x00ffffff-no-rj"
          alt="Card"
          style={{
            width: "360px",
            height: "260px",
            objectFit: "cover",
          }}
        />
        <div className="card-body" style={{ padding: "10px" }}>
          <h5 className="card-title">Criador</h5>
          <p className="card-text">Detalhes do criador.</p>
        </div>
        <div
          className="card-footer"
          style={{ borderTop: "1px solid black", padding: "10px" }}
        >
          <small className="text-muted">
            Clique no card para acessar a página.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Card;
