import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.app}>
      <section className={styles.hero}>
        
        <h1 className={styles.title}>
          wiss <span>mall</span>
        </h1>

        <div className={styles.divider}>
          <div></div>
          <i className="fa-solid fa-lock"></i>
          <div></div>
        </div>

        <p className={styles.subtitle}>
          Seu shopping de presentes, novidades <br />
          e muito mais!
        </p>

        <div className={styles.cards}>
          
          <div className={styles.card}>
            <i className="fa-solid fa-phone"></i>
            <h3>Contato</h3>
            <span>Fale conosco</span>
          </div>

          <div className={styles.card}>
            <i className="fa-solid fa-user"></i>
            <h3>Sobre nós</h3>
            <span>Conheça nossa loja</span>
          </div>

          <div className={styles.card}>
            <i className="fa-solid fa-motorcycle"></i>
            <h3>Busca</h3>
            <span>Procure seu produto</span>
          </div>

          <div className={styles.card}>
            <i className="fa-solid fa-clipboard-list"></i>
            <h3>Cadastro</h3>
            <span>Crie sua conta</span>
          </div>

        </div>

        <div className={styles.scroll}>
          <i className="fa-solid fa-angle-down"></i>
          <p>role para baixo</p>
        </div>

      </section>
    </div>
  );
}

export default Home;