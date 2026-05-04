import "./App.css";
import Cadastro from "./pages/Cadastro/Cadastro";
import SobreNos from "./pages/About/sobrenos";
import Busca from "./pages/Busca/busca";
import Home from "./pages/Home/Home";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="logo">
          <h2>
            WISS <span>MALL</span>
          </h2>
        </div>
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

          <NavLink
            to="/busca"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Busca
          </NavLink>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/busca" element={<Busca />} />
          <Route path="/about" element={<SobreNos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
