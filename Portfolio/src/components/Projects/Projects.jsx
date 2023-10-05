import React, { useEffect, useRef, useState } from "react";
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
            className={`${styles.techContainer} `}
            style={{
              visibility: isMouseOnLeft
                ? "hidden"
                : isMouseOnRight
                ? ""
                : "hidden",
              transition: "0.5s",
            }}
          >
            <img src={JS} alt="JavaScript Icon" />
            <h3>JavaScript</h3>
          </div>
          <div
            className={`${styles.techContainer} `}
            style={{
              visibility: isMouseOnLeft
                ? "hidden"
                : isMouseOnRight
                ? ""
                : "hidden",
              transition: "0.5s",
            }}
          >
            <img src={TS} alt="TypeScript Icon" />
            <h3>TypeScript</h3>
          </div>
          <div
            className={`${styles.techContainer} `}
            style={{
              visibility: isMouseOnLeft
                ? "hidden"
                : isMouseOnRight
                ? ""
                : "hidden",
              transition: "0.5s",
            }}
          >
            <img src={REACT} alt="React Icon" />
            <h3>React</h3>
          </div>
          <div
            className={`${styles.techContainer} `}
            style={{
              visibility: isMouseOnLeft
                ? "hidden"
                : isMouseOnRight
                ? ""
                : "hidden",
              transition: "0.5s",
            }}
          >
            <img src={REDUX} alt="Redux Icon" />
            <h3>Redux</h3>
          </div>
          <div
            className={`${styles.techContainer}`}
            style={{
              visibility: isMouseOnLeft
                ? "hidden"
                : isMouseOnRight
                ? ""
                : "hidden",
              transition: "0.5s",
            }}
          >
            <img src={CSS} alt="Css Icon" />
            <h3>CSS</h3>
          </div>
          <div
            className={`${styles.techContainer} `}
            style={{
              visibility: isMouseOnLeft
                ? "hidden"
                : isMouseOnRight
                ? ""
                : "hidden",
              transition: "0.5s",
            }}
          >
            <img src={HTML} alt="Html Icon" />
            <h3>HTML</h3>
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
            className={styles.techContainer}
            style={{
              visibility: isMouseOnLeft
                ? "hidden"
                : isMouseOnRight
                ? ""
                : "hidden",
              transition: "0.5s",
            }}
          >
            <img src={NODE} alt="Node Icon" />
            <h3>Node.js</h3>
          </div>
          <div
            className={styles.techContainer}
            style={{
              visibility: isMouseOnLeft
                ? "hidden"
                : isMouseOnRight
                ? ""
                : "hidden",
              transition: "0.5s",
            }}
          >
            <img src={SEQUELIZE} alt="Sequelize Icon" />
            <h3>Sequelize</h3>
          </div>
          <div
            className={styles.techContainer}
            style={{
              visibility: isMouseOnLeft
                ? "hidden"
                : isMouseOnRight
                ? ""
                : "hidden",
              transition: "0.5s",
            }}
          >
            <img src={POSTGRES} alt="Postgresql Icon" />
            <h3>PostgreSQL</h3>
          </div>
          <div
            className={styles.techContainer}
            style={{
              visibility: isMouseOnLeft
                ? "hidden"
                : isMouseOnRight
                ? ""
                : "hidden",
              transition: "0.5s",
            }}
          >
            <img src={EXPRESS} alt="Express Icon" />
            <h3>Express</h3>
          </div>
          <div
            className={`${styles.techContainer} `}
            style={{
              visibility: isMouseOnLeft
                ? "hidden"
                : isMouseOnRight
                ? ""
                : "hidden",
              transition: "0.5s",
            }}
          >
            <img src={GIT} alt="Git Icon" className={styles.gitImg} />
            <h3>Git</h3>
          </div>
          <div
            className={styles.techContainer}
            style={{
              visibility: isMouseOnLeft
                ? "hidden"
                : isMouseOnRight
                ? ""
                : "hidden",
              transition: "0.5s",
            }}
          >
            <img src={TS} alt="TypeScript Icon" />
            <h3>TypeScript</h3>
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
      <div className={styles.projectsFrontContainer}>
        <div className={styles.imgProjectsFrontContainer}></div>
      </div>
    </div>
  );
};

export default Projects;
