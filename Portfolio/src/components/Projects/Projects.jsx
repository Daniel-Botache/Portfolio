import styles from "./Projects.module.css";
import VEHIBUY from "../../assets/Images/vehibuy.png";
import TAIAPP from "../../assets/Images/taiapp.png";
import RAM from "../../assets/Images/rickandmorty.png";
import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.particlesContainer}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "bottom-left",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 0.5,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 70,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 0.1, max: 1 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <h1 className={styles.mainH1}>Proyectos</h1>
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
          <Link to={"https://vehibuy-rho.vercel.app/"}>
            <button>Visitar →</button>
          </Link>
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
          <Link to={"https://github.com/Daniel-Botache/Countries-app"}>
            <button>Visitar →</button>
          </Link>
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
          <Link to={"https://github.com/Daniel-Botache/Rick-and-Morty-Apps"}>
            <button>Visitar →</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
