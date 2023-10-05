import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import imagen from "../../assets/Images/PortafolioFinalColor.png";
import JS from "../../assets/Icons/Unofficial_JavaScript_logo_2.svg";
import TS from "../../assets/Icons/Typescript_logo_2020.svg";
import REACT from "../../assets/Icons/React-icon.svg";
import REDUX from "../../assets/Icons/redux.svg";
import CSS from "../../assets/Icons/CSS3_logo.svg";
import HTML from "../../assets/Icons/HTML5_Badge.svg";
import NODE from "../../assets/Icons/nodejs-icon.svg";
import SEQUELIZE from "../../assets/Icons/sequelize-svgrepo-com.svg";
import POSTGRES from "../../assets/Icons/postgresql.svg";
import EXPRESS from "../../assets/Icons/express-svgrepo-com.svg";
import GIT from "../../assets/Icons/Git_icon.svg";
import ImageCard from "./imageCard";
const Projects = () => {
  const [isMouseOnLeft, setIsMouseOnLeft] = useState(true);
  const [isMouseOnRight, setIsMouseOnRight] = useState(false);
  const handleMouseMove = (e) => {
    // Detecta si el cursor está en la parte izquierda (menos de la mitad del ancho)
    setIsMouseOnLeft(e.clientX < window.innerWidth / 4);
    setIsMouseOnRight(e.clientX < (window.innerWidth * 3) / 4);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.principalContainer}>
      <div className={styles.imagesContainer}>
        <div
          className={styles.projectsFrontContainer}
          style={{
            transform: isMouseOnLeft ? "   scale(100%)" : "",
            visibility: isMouseOnLeft ? "" : "hidden",

            transition: "1.5s",
          }}
        >
          <p>
            Soy Daniel Botache un apasionado por la tecnología y el buen arte,
            de la ciudad de Medellín-Colombia me destaco porque doy lo mejor de
            mi en cada acto que realizo; he completado cursos especializados en
            CSS en la plataforma Linkedin Learning y soy graduado del bootcamp
            Henry ubicado en Argentina, además de ello trabajé en un estudio
            fotográfico que me permitió desarrollar habilidades con software de
            diseño tales como Adobe Photoshop, Adobe Premiere y After Effects.{" "}
          </p>
        </div>
        <div className={styles.FrontContainer}>
          <h2
            style={{
              visibility: isMouseOnRight ? "" : "hidden",
              transition: "0.5s",
            }}
          >
            Front End
          </h2>
          <div
            className={`${styles.techContainerMain} `}
            style={{
              width: isMouseOnLeft ? "80%" : "",
              transform: isMouseOnLeft ? "translateX(40%)" : "",
              height: isMouseOnLeft ? "30vh" : "",
              marginTop: isMouseOnLeft ? "30vh" : "",
              visibility: isMouseOnRight ? "" : "hidden",
              transition: "0.5s",
            }}
          >
            <div className={`${styles.techContainer} `}>
              <img src={JS} alt="JavaScript Icon" />
              <h3>JavaScript</h3>
            </div>
            <div className={`${styles.techContainer} `}>
              <img src={TS} alt="TypeScript Icon" />
              <h3>TypeScript</h3>
            </div>
            <div className={`${styles.techContainer} `}>
              <img src={REACT} alt="React Icon" />
              <h3>React</h3>
            </div>
            <div className={`${styles.techContainer} `}>
              <img src={REDUX} alt="Redux Icon" />
              <h3>Redux</h3>
            </div>
            <div className={`${styles.techContainer}`}>
              <img src={CSS} alt="Css Icon" />
              <h3>CSS</h3>
            </div>
            <div className={`${styles.techContainer} `}>
              <img src={HTML} alt="Html Icon" />
              <h3>HTML</h3>
            </div>
          </div>
        </div>
        <div className={styles.imageContainerColor}>
          <div className={styles.imageContainerColorFilter}>
            <img
              src={imagen}
              alt="Daniel-Botache-Image"
              className={styles.imageColor}
              style={{
                filter: isMouseOnRight ? "grayscale(0%)" : "grayscale(100%)",
                // Mueve la imagen y el filtro hacia la izquierda o derecha según la posición del mouse
                transform: isMouseOnLeft
                  ? "translateX(60%)"
                  : isMouseOnRight
                  ? "translateX(0%)"
                  : "translateX(-60%)",
                transition: "2s",
              }}
            />
          </div>
        </div>
        <div
          className={styles.projectsBackContainer}
          style={{
            transform: isMouseOnRight ? "" : "scale(100%)",
            visibility: isMouseOnRight ? "hidden" : "",

            transition: "1s",
          }}
        >
          <p>
            Creo que cualquier cosa puede ser programada y optimizada, solo hay
            que ver un poco más allá, por eso el backend es mi área preferida,
            es un desafío constante a la lógica y la creatividad; tengo cursos
            realizados en la universidad de los Andes en POO en{" "}
            <span className={styles.pSpan}>Java</span> y estuctura de datos,
            además he tenido la oportunidad de estudiar licenciatura en ciencias
            naturales fortaleciendo aún mas mis habilidades analíticas gracias a
            la aplicación constante del método científico.{" "}
          </p>
        </div>
        <div className={styles.BackContainer}>
          <h2
            style={{
              visibility: isMouseOnLeft ? "hidden" : "",
              transition: "0.5s",
            }}
          >
            Back End
          </h2>
          <div
            className={`${styles.techContainerMain} `}
            style={{
              width: isMouseOnRight ? "" : "80",
              transform: isMouseOnRight ? "" : "translateX(-30%)",
              height: isMouseOnRight ? "" : "30vh",
              marginTop: isMouseOnRight ? "" : "30vh",
              visibility: isMouseOnLeft ? "hidden" : "",
              transition: "0.5s",
            }}
          >
            <div className={styles.techContainer}>
              <img src={NODE} alt="Node Icon" />
              <h3>Node.js</h3>
            </div>
            <div className={styles.techContainer}>
              <img src={SEQUELIZE} alt="Sequelize Icon" />
              <h3>Sequelize</h3>
            </div>
            <div className={styles.techContainer}>
              <img src={POSTGRES} alt="Postgresql Icon" />
              <h3>PostgreSQL</h3>
            </div>
            <div className={styles.techContainer}>
              <img src={EXPRESS} alt="Express Icon" />
              <h3>Express</h3>
            </div>
            <div className={`${styles.techContainer} `}>
              <img src={GIT} alt="Git Icon" className={styles.gitImg} />
              <h3>Git</h3>
            </div>
            <div className={styles.techContainer}>
              <img src={TS} alt="TypeScript Icon" />
              <h3>TypeScript</h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.imageColorFiltered}
        style={{
          width: isMouseOnLeft ? "0%" : "",
          transition: "2s",
        }}
      />
    </div>
  );
};

export default Projects;
