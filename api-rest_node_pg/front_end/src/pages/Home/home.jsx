import "./home.css";

function App() {
  return (
    <div className="app">

      <header>
        <div className="logo">
          wiss <span>mall</span>
        </div>

        <nav>
          <a href="#">sobre nos</a>
          <a href="#">delivery</a>
          <a href="#">cadastro</a>
          <a href="#" className="btn">contato</a>
        </nav>
      </header>

      <section className="hero">

        <h1>
          wiss <span>mall</span>
        </h1>

        <div className="divider">
          <div></div>
          <i className="fa-solid fa-lock"></i>
          <div></div>
        </div>

        <p>
          Seu shopping de presentes, novidades <br />
          e muito mais!
        </p>

        <div className="cards">

          <div className="card">
            <i className="fa-solid fa-phone"></i>
            <h3>contato</h3>
            <span>Fale conosco</span>
          </div>

          <div className="card">
            <i className="fa-solid fa-user"></i>
            <h3>sobre nos</h3>
            <span>Conheça nossa loja</span>
          </div>

          <div className="card">
            <i className="fa-solid fa-motorcycle"></i>
            <h3>delivery</h3>
            <span>Receba em casa</span>
          </div>

          <div className="card">
            <i className="fa-solid fa-clipboard-list"></i>
            <h3>cadastro</h3>
            <span>Crie sua conta</span>
          </div>

        </div>

        <div className="scroll">
          <i className="fa-solid fa-angle-down"></i>
          <p>role para baixo</p>
        </div>

      </section>
    </div>
  );
}

export default App;