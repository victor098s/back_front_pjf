import { useEffect, useState } from "react";
import styles from "./Cadastro.module.css";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [categoria, setCategoria] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState({
    nome: false,
    preco: false,
    estoque: false,
    categoria: false,
  });

  const erros = {
    nome: nome.trim === "",
    preco: preco < 0,
    estoque: estoque < 0,
    categoria: categoria.trim() === "",
  };

  const formularioValidado =
    !erros.nome && !erros.preco && !erros.estoque && !erros.categoria;

  function handelBlur(campo) {
    setTouched((prev) => ({ ...prev, [campo]: true }));
  }

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
      setLoading(true);
      const response = await fetch(`http://localhost:3000/produtos`);
      if (!response.ok) {
        throw new Error(`Erro ao criar o produto !`);
      }
      const data = await response.json();
      setProdutos(data);
    } catch (erro) {
      alert(`Não foi possível mostrar os produtos !`, erro);
    } finally {
      setLoading(false);
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
    } finally {
      setLoading(false);
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
            onChange={(e) => setNome(e.target.value)}
            onblur={() => handelBlur("Nome")}
          />
          {erros.nome && touched.nome && (
            <span>⚠ O campo deve ser preenchido</span>
          )}
        </label>
        <label>
          Preço
          <input
            className={styles.input}
            type="number"
            placeholder="Digite o preço"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            onblur={() => handelBlur("preco")}
          />
          {erros.preco && touched.preco && (
            <span>⚠ O campo deve ser preenchido e maior que 0</span>
          )}
        </label>
        <label>
          Estoque
          <input
            className={styles.input}
            type="number"
            placeholder="Digite a quantidade em estoque"
            value={estoque}
            onChange={(e) => setEstoque(e.target.value)}
            onblur={() => handelBlur("estoque")}
          />
          {erros.estoque && touched.estoque && (
            <span>⚠ O campo deve ser preenchido e maior que 0</span>
          )}
        </label>
        <label>
          Categoria
          <input
            className={styles.input}
            type="text"
            placeholder="Digite o nome da categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            onblur={() => handelBlur("categoria")}
          />
          {erros.categoria && touched.categoria && (
            <span>⚠ O campo deve ser preenchido</span>
          )}
        </label>
        <input
          type="submit"
          className={styles.btnSubmit}
          placeholder="Cadastrar"
          disabled={!formularioValidado}
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
            {loading && <div className={styles.loading}></div>}

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
