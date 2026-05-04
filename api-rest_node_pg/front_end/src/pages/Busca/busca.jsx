import React, { useState, useEffect } from "react";
import styles from "./Busca.module.css";
import { FaSearch } from "react-icons/fa";

const Busca = () => {
  const [busca, setBusca] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);

  // BUSCAR DADOS DA API
  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
        setFiltrados(data);
      })
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  // FILTRO
  useEffect(() => {
    const resultado = produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(busca.toLowerCase())
    );
    setFiltrados(resultado);
  }, [busca, produtos]);

  return (
    <div className={styles.page}>

      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1>Busca de Produtos</h1>

          <div className={styles.inputGroup}>
            <FaSearch className={styles.icon} />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div className={styles.resultados}>
            {filtrados.length > 0 ? (
              filtrados.map((produto) => (
                <div key={produto.id} className={styles.item}>
                  <strong>{produto.nome}</strong>
                  <span>R$ {produto.preco}</span>
                </div>
              ))
            ) : (
              <p>Nenhum produto encontrado</p>
            )}
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        © Copy, Todos os direitos reservados
      </footer>
    </div>
  );
};

export default Busca;