import React, { useEffect, useState } from "react";
import "./delivery.css";

export default function Delivery() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/produtos&quot")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="delivery-container">
      <h1 className="delivery-title">Delivery</h1>

      <div className="delivery-list">
        {produtos.map((item) => (
          <div className="delivery-card" key={item.id}>
            <img src={item.imagem} alt={item.nome} />
            <div className="delivery-info">
              <h2>{item.nome}</h2>
              <p>{item.descricao}</p>
              <span className="price">R$ {item.preco}</span>
              <button className="btn-order">Pedir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}