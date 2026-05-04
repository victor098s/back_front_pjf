import "./App.css";
import Cadastro from "./pages/Cadastro/Cadastro";
import SobreNos from "./pages/About/sobrenos";
import Delivery from "./pages/Delivery/delivery";
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

        <NavLink
          to="/delivery"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Delivery
        </NavLink>
      </div>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/about" element={<SobreNos />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>

      <footer>&Copy, Todos os direitos reservados </footer>
    </BrowserRouter>
  );
}

export default App;
