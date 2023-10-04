import GITHUB from "../../assets/Icons/github.svg";
import LINKEDIN from "../../assets/Icons/linkedin.svg";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.principalContainer}>
      <div className={styles.logoContainer}>
        <h2 className={styles.logoContainer_h2}>DB Dev</h2>
      </div>
      <div className={styles.linksContainer}>
        <h3 className={styles.linksContainer_h3}>Inicio</h3>
        <h3 className={styles.linksContainer_h3}>Sobre mi</h3>
        <h3 className={styles.linksContainer_h3}>Proyectos</h3>
        <h3 className={styles.linksContainer_h3}>Contacto</h3>
        <div className={styles.iconsContainer}>
          <div className={styles.iconContainer}>
            <img src={GITHUB} alt="githubIcon" />
          </div>
          <div className={styles.iconContainer}>
            <img src={LINKEDIN} alt="linkedinIcon" />
          </div>
        </div>
        <button className={styles.langButton}>
          <h3 className={styles.langButton_h3}>ES</h3>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
