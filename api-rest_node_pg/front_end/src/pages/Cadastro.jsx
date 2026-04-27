import { useEffect, useState } from "react";
import styles from "./Cadastro.module.css";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [categoria, setCategoria] = useState("");
  const [produtos, setProdutos] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const produto = {
      nome,
      preco: Number(preco),
      estoque: Number(estoque),
      categoria,
    };

    const produtoCriado = await criar(produto);
    setProdutos([...produtos, produtoCriado]);

    (setNome(""), setPreco(""), setEstoque(""), setCategoria(""));
  }

  async function listarTodos() {
    try {
      const response = await fetch(`http://localhost:3000/produtos`);
      if (!response.ok) {
        throw new Error(`Erro ao criar o produto !`);
      }
      const data = await response.json();
      setProdutos(data);
    } catch (erro) {
      alert(`Não foi possível mostrar os produtos !`, erro);
    }
  }

  async function criar(dados) {
    try {
      const response = await fetch(`http://localhost:3000/produtos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
      if (!response.ok) {
        throw new Error(`Erro ao criar o produto !`);
      }

      const data = await response.json();
      return data;
    } catch (erro) {
      alert(`Não foi possível criar o produto`, erro);
    }
  }

  useEffect(() => {
    listarTodos();
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.titulo}>Cadastre um Produto</h1>
        <label>
          Nome
          <input
            className={styles.input}
            type="text"
            placeholder="Digite o nome"
            value={nome}
            required
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label>
          Preço
          <input
            className={styles.input}
            type="number"
            placeholder="Digite o preço"
            value={preco}
            required
            onChange={(e) => setPreco(e.target.value)}
          />
        </label>
        <label>
          Estoque
          <input
            className={styles.input}
            type="number"
            placeholder="Digite a quantidade em estoque"
            value={estoque}
            required
            onChange={(e) => setEstoque(e.target.value)}
          />
        </label>
        <label>
          Categoria
          <input
            className={styles.input}
            type="text"
            placeholder="Digite o nome da categoria"
            value={categoria}
            required
            onChange={(e) => setCategoria(e.target.value)}
          />
        </label>
        <input
          type="submit"
          className={styles.btnSubmit}
          placeholder="Cadastrar"
        />
      </form>
      <section>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Estoque</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {produtos.map((p, i) => (
              <tr key={i}>
                <td>{p.id}</td>
                <td>{p.nome}</td>
                <td>{p.preco}</td>
                <td>{p.estoque}</td>
                <td>{p.categoria}</td>
                <td>{p.criado_em}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Cadastro;
