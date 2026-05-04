import styles from "./home.module.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div className={styles.app}>
     
      <section className={styles.hero}>
        <h1>
          wiss <span>mall</span>
        </h1>

        <div className={styles.divider}>
          <div></div>
          <i className={styles.fa-solidfa-lock}></i>
          <div></div>
        </div>

        <p>
          Seu shopping de presentes, novidades <br />e muito mais!
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <i className={styles.fa-solidfa-phone}></i>
            <h3>contato</h3>
            <span>Fale conosco</span>
          </div>

          <div className={styles.card}>
            <i className={styles.fa-solidfa-user}></i>
            <h3>sobre nos</h3>
            <span>Conheça nossa loja</span>
          </div>

          <div className={styles.card}>
            <i className={styles.fa-solidfa-motorcycle}></i>
            <h3>delivery</h3>
            <span>Receba em casa</span>
          </div>

          <div className={styles.card}>
            <i className={styles.fa-solidfa-clipboard-list}></i>
            <h3>cadastro</h3>
            <span>Crie sua conta</span>
          </div>
        </div>

        <div className={styles.scroll}>
          <i className={styles.fa-solidfa-angle-down}></i>
          <p>role para baixo</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
