import React from "react";
import { FaCopyright } from "react-icons/fa";
import styles from "./Footer.module.css";
import MAIL from "../../assets/Icons/147563.svg";
import CV from "../../assets/Icons/cv.svg";
const Footer = () => {
  return (
    <footer className={styles.mainContainerFooter}>
      <div className={styles.emailContainer}>
        <img src={MAIL} alt="mail icon" className={styles.imgFooter} />
        <p>daniel.botache@gmail.com</p>
      </div>
      <div className={styles.emailContainer}>
        <img src={CV} alt="cv icon" className={styles.imgFooter} />
        <p>Mi CV</p>
      </div>
      <p>
        <FaCopyright /> <span className={styles.spanFooter}>DB Dev </span>{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
