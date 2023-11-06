import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import HomeInd from "./pages/home";
import Personagens from "./pages/personagensPrincipais";
import Enredo from "./pages/Enredo";
import Criador from "./pages/Criador";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeInd />}></Route>
        <Route path="/enredo" element={<Enredo />}></Route>
        <Route path="/personagens" element={<Personagens />}></Route>
        <Route path="/criador" element={<Criador />}></Route>
        <Route path="*" element={<h1>Pagina não encontrada</h1>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
