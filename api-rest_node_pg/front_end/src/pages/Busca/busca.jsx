import React, { useState, useEffect } from "react";
import "./busca.css";

export default function Busca() {
  const [query, setQuery] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [sugestoes, setSugestoes] = useState([]);

  // Simulação de API (pode trocar por fetch real)
  const listaProdutos = [
    "iPhone 13",
    "iPhone 14",
    "Samsung Galaxy S23",
    "Notebook Dell",
    "Notebook Gamer",
    "Teclado Mecânico",
    "Mouse Gamer",
    "Fone Bluetooth",
    "Smart TV 50 polegadas",
    "Cadeira Gamer"
  ];

  useEffect(() => {
    if (query.length === 0) {
      setSugestoes([]);
      return;
    }

    const resultados = listaProdutos.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    setSugestoes(resultados);
  }, [query]);

  const handleBuscar = () => {
    setProdutos(sugestoes);
    setSugestoes([]);
  };

  const handleSugestaoClick = (item) => {
    setQuery(item);
    setProdutos([item]);
    setSugestoes([]);
  };

  return (
    <div className="busca-container">
      <h1>Busca de Produtos</h1>

      <div className="barra-busca">
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleBuscar}>Buscar</button>

        {sugestoes.length > 0 && (
          <ul className="sugestoes">
            {sugestoes.map((item, index) => (
              <li key={index} onClick={() => handleSugestaoClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="resultados">
        {produtos.length > 0 ? (
          produtos.map((produto, index) => (
            <div key={index} className="card-produto">
              <h3>{produto}</h3>
              <p>Descrição do produto...</p>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </div>
    </div>
  );
}