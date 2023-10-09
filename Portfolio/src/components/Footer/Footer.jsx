import React from "react";
import { FaCopyright } from "react-icons/fa";
import styles from "./Footer.module.css";
import MAIL from "../../assets/Icons/147563.svg";
import CV from "../../assets/Icons/cv.svg";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";

const Footer = () => {
  const language = useSelector((state) => state.language);
  return (
    <footer className={styles.mainContainerFooter}>
      <div className={styles.emailContainer}>
        <a
          href="mailto:daniel.botache@gmail.com"
          className={styles.emailContainer}
        >
          <img src={MAIL} alt="mail icon" className={styles.imgFooter} />
          <p>daniel.botache@gmail.com</p>
        </a>
      </div>

      <div className={styles.emailContainer}>
        <Link
          to={
            language == "en"
              ? "https://drive.google.com/file/d/11qzO0eHLv_mPEyhI8iIJ-r3f9svLa1e0/view?usp=sharing"
              : "https://drive.google.com/file/d/1-6t6os7djuIvR3BR8wM3V1q-y6ABQ3mX/view?usp=sharing"
          }
          className={styles.emailContainer}
          target="_blank"
        >
          <img src={CV} alt="cv icon" className={styles.imgFooter} />
          <p>
            <FormattedMessage id="footer.resume" defaultMessage={"My resume"} />
          </p>
        </Link>
      </div>

      <p className={styles.logoFooter}>
        <FaCopyright /> <span className={styles.spanFooter}>DB Dev </span>{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
