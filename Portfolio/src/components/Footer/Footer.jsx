import React from "react";
import { FaCopyright } from "react-icons/fa";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.mainContainerFooter}>
      <div className="footer-content">
        <div className="footer-info">
          <p>daniel.botache@gmail.com</p>
          <p>
            DB Dev todos los derechos reservados &copy;{" "}
            {new Date().getFullYear()}
            <FaCopyright />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
