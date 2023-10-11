import { useEffect, useState } from "react";
import styles from "./About.module.css";
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
import { FormattedMessage } from "react-intl";
import PERFIL from "../../assets/Images/perfil.jpeg";
import { Link } from "react-router-dom";

const About = () => {
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
      <div className={styles.techonologiesMovil}>
        <h2 className={styles.h2TechMovil}>
          <FormattedMessage
            id="about.tecnologies"
            defaultMessage={"Technologies"}
          />{" "}
        </h2>
        <div className={styles.imgTechnoloMovilContainer}>
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
          <div className={styles.techContainer}>
            <img src={NODE} alt="Node Icon" />
            <h3>NodeJS</h3>
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
        </div>
        <div className={styles.perfilContainerMovil}>
          <img
            src={PERFIL}
            alt="Daniel Botache Photo"
            className={styles.imgPerfilMovil}
          />
          <p className={styles.pPerfilMovil}>
            <FormattedMessage
              id="about.front"
              defaultMessage={
                "I'm passionate about technology and fine art, hailing from the city of Medellin, Colombia. I stand out because I give my best in every endeavor I undertake. I have completed specialized courses in CSS on the LinkedIn Learning platform and graduated from the Henry bootcamp located in Argentina. Additionally, I worked at a photography studio, which allowed me to develop skills with design software such as Adobe Photoshop, Adobe Premiere, and After Effects."
              }
            />{" "}
          </p>
          <Link to={"/projects"}>
            <button>All my Works</button>
          </Link>
        </div>
      </div>
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
            <FormattedMessage
              id="about.front"
              defaultMessage={
                "I'm passionate about technology and fine art, hailing from the city of Medellin, Colombia. I stand out because I give my best in every endeavor I undertake. I have completed specialized courses in CSS on the LinkedIn Learning platform and graduated from the Henry bootcamp located in Argentina. Additionally, I worked at a photography studio, which allowed me to develop skills with design software such as Adobe Photoshop, Adobe Premiere, and After Effects."
              }
            />{" "}
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
                filter: isMouseOnRight
                  ? "drop-shadow(2px 2px 5px gold)"
                  : "grayscale(100%)",
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
            <FormattedMessage
              id="about.back"
              defaultMessage={
                "I believe that anything can be programmed and optimized; one just needs to see a little further. That's why backend development is my favorite area. It's a constant challenge to logic and creativity. I have completed courses at the University of Los Andes in Java Object-Oriented Programming and data structures. Additionally, I have had the opportunity to study for a Bachelor's degree in Natural Sciences, further strengthening my analytical skills through the constant application of the scientific method."
              }
            />{" "}
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
              <h3>NodeJS</h3>
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
      <p className={styles.dangerP}>
        <FormattedMessage
          id="about.danger"
          defaultMessage={
            "*You can hover your cursor on one of the sides to learn more about me!"
          }
        />
      </p>
    </div>
  );
};

export default About;
