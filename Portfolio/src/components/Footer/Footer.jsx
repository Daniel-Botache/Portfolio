import React from "react";
import { FaCopyright } from "react-icons/fa";
import styles from "./Footer.module.css";
import MAIL from "../../assets/Icons/147563.svg";
import CV from "../../assets/Icons/cv.svg";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

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
              ? "https://drive.google.com/file/d/10WjYxKkEeFH9ns4y9SsRDv8dUSxpk233/view?usp=sharing"
              : "https://drive.google.com/file/d/12b04NzBIa75QDH9gviUlkYVIx8dY1Tjc/view?usp=sharing"
          }
          className={styles.emailContainer}
        >
          <img src={CV} alt="cv icon" className={styles.imgFooter} />
          <p>
            <FormattedMessage id="footer.resume" defaultMessage={"My resume"} />
          </p>
        </Link>
      </div>

      <p>
        <FaCopyright /> <span className={styles.spanFooter}>DB Dev </span>{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
