import "./App.css";
import Cadastro from "./pages/Cadastro/Cadastro";
import SobreNos from "./pages/About/sobrenos";
import Delivery from "./pages/Delivery/delivery";
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
            to="/delivery"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Delivery
          </NavLink>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<SobreNos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
