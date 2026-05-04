import styles from "./home.module.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className={styles.app}>

      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>
          wiss <span>mall</span>
        </div>

        <nav className={styles.nav}>
          <NavLink to="/sobre">sobre nos</NavLink>
          <NavLink to="/delivery">delivery</NavLink>
          <NavLink to="/cadastro">cadastro</NavLink>
          <NavLink to="/contato" className={styles.contatoBtn}>
            contato
          </NavLink>
        </nav>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        
        <h1 className={styles.title}>
          wiss <span>mall</span>
        </h1>

        {/* LINHA + CADEADO */}
        <div className={styles.divider}>
          <div className={styles.line}></div>

          {/* ícone (usa font awesome no index.html) */}
          <i className="fa-solid fa-lock"></i>

          <div className={styles.line}></div>
        </div>

        <p className={styles.subtitle}>
          Seu shopping de presentes, novidades <br />
          e muito mais!
        </p>

        {/* CARDS */}
        <div className={styles.cards}>

          <div className={styles.card}>
            <i className="fa-solid fa-phone"></i>
            <h3>contato</h3>
            <span>Fale conosco</span>
          </div>

          <div className={styles.card}>
            <i className="fa-solid fa-user"></i>
            <h3>sobre nos</h3>
            <span>Conheça nossa loja</span>
          </div>

          <div className={styles.card}>
            <i className="fa-solid fa-motorcycle"></i>
            <h3>delivery</h3>
            <span>Receba em casa</span>
          </div>

          <div className={styles.card}>
            <i className="fa-solid fa-clipboard-list"></i>
            <h3>cadastro</h3>
            <span>Crie sua conta</span>
          </div>

        </div>

        {/* SCROLL */}
        <div className={styles.scroll}>
          <i className="fa-solid fa-angle-down"></i>
          <p>role para baixo</p>
        </div>

      </section>
    </div>
  );
}

export default Home;