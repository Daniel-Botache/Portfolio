import styles from "./Projects.module.css";
import VEHIBUY from "../../assets/Images/vehibuy.png";
import TAIAPP from "../../assets/Images/taiapp.png";
import RAM from "../../assets/Images/rickandmorty.png";
import React from "react";

const Projects = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainH1}>Projectos</h1>
      <div className={styles.projectContainer}>
        <div className={styles.imgContainer}>
          <img src={VEHIBUY} alt="Vehibuy Image" className={styles.img} />
        </div>
        <div className={styles.infoContainer}>
          <h2 className={styles.infoH2}>VehiBuy</h2>
          <p>
            <span>
              E-commerce para compra y venta de vehículos de alta gama
            </span>
          </p>
          <button>Visitar →</button>
        </div>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.imgContainer}>
          <img src={TAIAPP} alt="Taiapp Image" className={styles.img} />
        </div>
        <div className={styles.infoContainer}>
          <h2 className={styles.infoH2}>TAIApp</h2>
          <p>
            <span>
              App para obtener y crear información de paises y actividades
              turisticas que se pueden realizar en él.
            </span>
          </p>
          <button>Visitar →</button>
        </div>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.imgContainer}>
          <img src={RAM} alt="RickandMortyapp Image" className={styles.img} />
        </div>
        <div className={styles.infoContainer}>
          <h2 className={styles.infoH2}>Rick And Morty App</h2>
          <p>
            <span>
              App para obtener tarjetas con los personajes de Rick and Morty,
              agregarlas a favoritos y obtener su información
            </span>
          </p>
          <button>Visitar →</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
