import styles from "./Landing.module.css";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { FormattedMessage } from "react-intl";

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
          <h2 className={styles.descriptionH2}>
            <FormattedMessage
              id="landing.title"
              defaultMessage={"Full Stack Developer"}
            />
          </h2>
          <p className={styles.descriptionP}>
            <FormattedMessage
              id="landing.description"
              defaultMessage={
                "Hello! I'm Daniel Botache, and I firmly believe that I can always improve, whether it's a product, software, and most importantly, myself. I'm willing to learn every day because it's not just a job, it's my"
              }
            />{" "}
            <span className={styles.descriptionSpan}>
              <FormattedMessage id="landing.span" defaultMessage={"passion."} />
            </span>
          </p>
          <button
            className={styles.descriptionButton}
            onClick={scrollToContact}
          >
            <FormattedMessage
              id="landing.button"
              defaultMessage={"Contact me!"}
            />
          </button>
        </div>
      </div>
      <p className={styles.mainP}>
        <FormattedMessage
          id="landing.mainp"
          defaultMessage={
            "If you believe that your project or company can improve, don't hesitate to contact me. Together, we will find the best way to achieve it!🤝"
          }
        />
      </p>
    </div>
  );
}

export default Landing;
