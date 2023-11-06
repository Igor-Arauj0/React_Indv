import imgFooter from "../../img/iconF.png";
import "./footer.css";

function Footer() {
  return (
    <>
      <img src={imgFooter} className="icone" />
      <br />
      <a
        href="https://www.netflix.com/title/70143836"
        target="_blank"
        className="recommend"
      >
        Assista Breaking bad
      </a>
      <p className="disclaimer">Todos os direitos reservados.</p>
      <p className="disclaimer">©AMC 1984 - 2023 </p>
    </>
  );
}

export default Footer;
