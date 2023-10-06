import React from "react";
import styles from "./Contact.module.css";
import { useState, useRef } from "react";
import validation from "./validation";

const Contact = () => {
  const [usernameClicked, setUsernameClicked] = useState(false);
  const [passwordClicked, setPasswordClicked] = useState(false);
  const [mesaggeClicked, setMessageClicked] = useState(false);
  const inputRefUser = useRef(null);
  const inputRefPass = useRef(null);
  const inputRefMess = useRef(null);
  const handleUsernameClick = () => {
    setUsernameClicked(true);
    inputRefUser.current.focus();
  };

  const handlePasswordClick = () => {
    setPasswordClicked(true);
    inputRefPass.current.focus();
  };
  const handleMessageClick = () => {
    setMessageClicked(true);
    inputRefMess.current.focus();
  };

  const usernameDivClass = usernameClicked ? styles.clicked : "";
  const passwordDivClass = passwordClicked ? styles.clicked : "";
  const usernameLabelClass = usernameClicked ? styles.hidden : "";
  const passwordLabelClass = passwordClicked ? styles.hidden : "";
  const messageLabelClass = mesaggeClicked ? styles.hidden : "";
  const messageDivClass = mesaggeClicked ? styles.clicked : "";

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
    setErrors(
      validation({ ...userData, [event.target.id]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const [userData, setUserData] = useState({
    username: "",
    password: "",
    message: "\n",
  });

  const [errors, setErrors] = useState({});
  return (
    <div>
      <div className={styles.portalContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.container}>
            <h1 className={styles.contactH1}>Mándame un mensaje!</h1>
            <p>
              ¿Tienes una pregunta o una propuesta, quieres saludar? Adelante.
            </p>
            <div className={styles.containerInfo}>
              <div className={styles.labelContainer1}>
                <div
                  className={styles.labelContainer}
                  onClick={handlePasswordClick}
                >
                  <label className={passwordLabelClass}>Nombre</label>
                  <span
                    htmlFor="password"
                    className={`${passwordDivClass} ${styles.span}`}
                  >
                    Nombre
                  </span>
                  <input
                    ref={inputRefPass}
                    onFocus={handlePasswordClick}
                    className={passwordDivClass}
                    type="text"
                    id="password"
                    value={userData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.labelContainer1}>
                <div
                  className={styles.labelContainer}
                  onClick={handleUsernameClick}
                >
                  <label className={usernameLabelClass}>
                    Correo electrónico
                  </label>
                  <span
                    htmlFor="username"
                    className={`${usernameDivClass} ${styles.span}`}
                  >
                    Correo electrónico
                  </span>
                  <input
                    onFocus={handleUsernameClick}
                    ref={inputRefUser}
                    className={usernameDivClass}
                    type="e-mail"
                    id="username"
                    value={userData.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {errors.username && <p>{errors.username}</p>}
            <div className={styles.labelContainer1}>
              <div
                className={styles.labelContainer}
                onClick={handleMessageClick}
              >
                <label className={messageLabelClass}>Tu mensaje</label>
                <span
                  htmlFor="message"
                  className={`${messageDivClass} ${styles.span}`}
                >
                  Tu mensaje
                </span>
                <textarea
                  ref={inputRefMess}
                  onFocus={handleMessageClick}
                  className={`${messageDivClass} ${styles.inputMessage}`}
                  rows={3}
                  cols={63}
                  id="message"
                  value={userData.message}
                  onChange={handleChange}
                >
                  Holi
                </textarea>
              </div>
            </div>

            <button className={styles.button}>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;