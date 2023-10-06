import styles from "./Landing.module.css";
import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

function Landing() {
  const scrollToContact = () => {
    const aboutElement = document.getElementById("contact");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div>
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
        <div className={styles.infoContainer}>
          <div className={styles.logoContainer}>
            <div className={styles.nameContainer}>
              <h1 className={styles.nameH1}>D</h1>
              <div className={styles.h4Container}>
                <h4 className={styles.nameH4_name}>aniel</h4>
              </div>
            </div>
            <div className={styles.lastNameContainer}>
              <h1 className={styles.nameH1}>B</h1>
              <div className={styles.h4Container}>
                <h4 className={`${styles.nameH4_lastName}`}>otache</h4>
              </div>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.descriptionH2}>Desarrollador Full Stack</h2>
            <p className={styles.descriptionP}>
              Hola! Creo firmemente que siempre puedo mejorar, ya sea un
              producto, un software y sobre todo, a mí mismo. Estoy dispuesto a
              aprender todos los dias porque no es solamente un trabajo, es mi{" "}
              <span className={styles.descriptionSpan}>pasión.</span>
            </p>
            <button
              className={styles.descriptionButton}
              onClick={scrollToContact}
            >
              Contáctame!
            </button>
          </div>
        </div>
        <p className={styles.mainP}>
          ¡Si crees que tu proyecto o empresa puede mejorar, no dudes en
          contactarme, juntos encontraremos la mejor manera de lograrlo! 🤝
        </p>
      </div>
    </div>
  );
}

export default Landing;
