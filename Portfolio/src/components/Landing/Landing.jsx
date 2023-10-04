import styles from "./Landing.module.css";

function Landing() {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.logoContainer}>
            <div className={styles.nameContainer}>
              <h1 className={styles.nameH1}>D</h1>
              <h4 className={styles.nameH4}>aniel</h4>
            </div>
            <div className={styles.lastNameContainer}>
              <h1 className={styles.nameH1}>B</h1>
              <h4 className={styles.nameH4}>otache</h4>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.descriptionH2}>Desarrollador Full Stack</h2>
            <p className={styles.descriptionP}>
              Soy un inconformista por excelencia creo firmemente que siempre
              puedo mejorar,ya sea un producto, un software, y sobre todo, a mí
              mismo, estoy dispuesto a aprender todos los dias porque no es
              solamente un trabajo, la programación y el diseño son mi pasión.
            </p>
            <button>Contáctame!</button>
          </div>
        </div>
        <p>
          ¡Si crees que tu proyecto o empresa puede mejorar, no dudes en
          contactarme, juntos encontraremos la mejor manera de lograrlo! 🤝
        </p>
      </div>
    </div>
  );
}

export default Landing;
