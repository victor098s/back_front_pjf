import "./App.css";
import Cadastro from "./pages/Cadastro/Cadastro";
import SobreNos from "./pages/About/sobrenos";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Loja</h1>
      </header>

      <div className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/cadastro"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Cadastro
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Sobre nós
        </NavLink>
      </div>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/about" element={<SobreNos />} />
      </Routes>

      <footer>&Copy, Todos os direitos reservados </footer>
    </BrowserRouter>
  );
}

export default App;
