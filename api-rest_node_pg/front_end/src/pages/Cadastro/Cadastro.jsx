import { useEffect, useState } from "react";
import styles from "./Cadastro.module.css";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [categoria, setCategoria] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editar, setEditar] = useState(null);

  const [touched, setTouched] = useState({
    nome: false,
    preco: false,
    estoque: false,
    categoria: false,
  });

  const erros = {
    nome: nome.trim() === "",
    preco: Number(preco) <= 0,
    estoque: Number(estoque) <= 0,
    categoria: categoria.trim() === "",
  };

  const formularioValidado =
    !erros.nome && !erros.preco && !erros.estoque && !erros.categoria;

  function handleBlur(campo) {
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

    if (editar) {
      await atualizar(editar, produto);
    } else {
      await criar(produto);
    }

    limparForm();
    listarTodos();
  }

  function limparForm() {
    (setNome(""),
      setPreco(""),
      setEstoque(""),
      setCategoria(""),
      setTouched({
        nome: false,
        preco: false,
        estoque: false,
        categoria: false,
      }));
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
      alert("Produto cadastrado com sucesso ✅");
      return data;
    } catch (erro) {
      alert(`Não foi possível criar o produto`, erro);
    } finally {
      setLoading(false);
    }
  }

  async function atualizar(id, dados) {
    try {
      const response = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar o produto");
      }

      const data = await response.json();

      alert("Produto atualizado com sucesso");
    } catch (erro) {
      throw new Error("Erro ao atualizar o produto", erro);
    }
  }

  function editarProduto(produto) {
    setEditar(produto.id);
    setNome(produto.nome);
    setPreco(produto.preco);
    setEstoque(produto.estoque);
    setCategoria(produto.categoria);
  }

  async function excluirProduto(id) {
    try {
      const response = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Erro ao deletar o produto ❌");
      }

      const data = response.json()
      listarTodos()

    } catch (erro) {
      throw new Error("Erro ao deletar o produto ❌", erro);
    }
  }

  function classInput(campo) {
    return erros[campo] && touched[campo] ? styles.inputErro : styles.input;
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
            className={classInput("nome")}
            type="text"
            placeholder="Digite o nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            onBlur={() => handleBlur("nome")}
          />
          {erros.nome && touched.nome && (
            <span className={styles.msgErro}>
              ⚠ O campo deve ser preenchido
            </span>
          )}
        </label>
        <label>
          Preço
          <input
            className={classInput("preco")}
            type="number"
            placeholder="Digite o preço"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            onBlur={() => handleBlur("preco")}
          />
          {erros.preco && touched.preco && (
            <span className={styles.msgErro}>
              ⚠ O campo deve ser preenchido e maior que 0
            </span>
          )}
        </label>
        <label>
          Estoque
          <input
            className={classInput("estoque")}
            type="number"
            placeholder="Digite a quantidade em estoque"
            value={estoque}
            onChange={(e) => setEstoque(e.target.value)}
            onBlur={() => handleBlur("estoque")}
          />
          {erros.estoque && touched.estoque && (
            <span className={styles.msgErro}>
              ⚠ O campo deve ser preenchido e maior que 0
            </span>
          )}
        </label>
        <label>
          Categoria
          <input
            className={classInput("categoria")}
            type="text"
            placeholder="Digite o nome da categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            onBlur={() => handleBlur("categoria")}
          />
          {erros.categoria && touched.categoria && (
            <span className={styles.msgErro}>
              ⚠ O campo deve ser preenchido
            </span>
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
            {loading && (
              <tr>
                <td>
                  <div className={styles.loading}></div>
                </td>
              </tr>
            )}

            {produtos.map((p, i) => (
              <tr key={i}>
                <td>{p.id}</td>
                <td>{p.nome}</td>
                <td>{p.preco}</td>
                <td>{p.estoque}</td>
                <td>{p.categoria}</td>
                <td>{p.criado_em}</td>
                <td onClick={() => editarProduto(p)} className={styles.editar}>
                  Editar ✏️
                </td>
                <td
                  onClick={() => excluirProduto(p.id)}
                  className={styles.excluir}
                >
                  Excluir 🗑️
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Cadastro;
