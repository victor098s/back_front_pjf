import React, { useState } from "react";
import "./sobrenos.css";

const SobreNos = () => {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dados = { nome, mensagem };

    try {
      await fetch("http://localhost:3000/contato&quot"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      };

      alert("Mensagem enviada com sucesso!");

      setNome("");
      setMensagem("");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  return (
    <div className="container">
      <h1>Sobre Nós</h1>

      <section className="sobre">
        <h2>Quem somos</h2>
        <p>
          

Somos uma empresa dedicada a area de alimentos, focada em seus produtos, respeito no dia a dia. Nosso objetivo é ajudar pessoas a adquirir seus alimentos, por meio de um valor justo e barato.


        </p>
      </section>

      <section className="sobre">
        <h2>Nossa missão</h2>
        <p>     

Ser referência no ramo de produtos.



Produtos de qualidade, frescos e baratos.


        </p>
      </section>

      <section className="contato">
        <h2>Entre em contato</h2>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="wiss mall"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <textarea
            placeholder="Sua mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />

          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default SobreNos;

