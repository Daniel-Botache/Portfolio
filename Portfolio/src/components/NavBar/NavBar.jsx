import styles from "./NavBar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  scrolledAboutGlobal,
  changeLanguage,
  changeLocale,
} from "../../Redux/actions";
import { FormattedMessage } from "react-intl";

function NavBar() {
  const language = useSelector((state) => state.language);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChangeLanguage = () => {
    if (language == "en") {
      dispatch(changeLocale("es-MX"));
      dispatch(changeLanguage("es"));
    } else {
      dispatch(changeLanguage("en"));
      dispatch(changeLocale("en-US"));
    }
  };

  const scrollToAbout = () => {
    dispatch(scrolledAboutGlobal(true));
    if (location.pathname === "/") {
      const aboutElement = document.getElementById("about");
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");

      const aboutElement = document.getElementById("about");
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={styles.principalContainer}>
      <div className={styles.logoContainer}>
        <Link to={"/"}>
          <h2 className={styles.logoContainer_h2}>
            <span className={styles.spanH2}>DB </span> Dev
          </h2>
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <Link to={"/"}>
          <h3 className={styles.linksContainer_h3}>
            <FormattedMessage id="nav.home" defaultMessage={"Home"} />
          </h3>
        </Link>

        <h3 className={styles.linksContainer_h3} onClick={scrollToAbout}>
          <FormattedMessage id="nav.about" defaultMessage={"About"} />
        </h3>

        <Link to={"/projects"}>
          <h3 className={styles.linksContainer_h3}>
            <FormattedMessage id="nav.work" defaultMessage={"My work"} />
          </h3>
        </Link>
        <Link to={"/contact"}>
          <h3 className={styles.linksContainer_h3}>
            <FormattedMessage id="nav.contact" defaultMessage={"Contact"} />
          </h3>
        </Link>
        <div className={styles.iconsContainer}>
          <Link to={"https://github.com/Daniel-Botache"}>
            <div className={styles.iconContainer}>
              <svg
                className={styles.navBarIcon}
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path d="M 24 4 C 19.963209 4 16.192498 5.2011807 13.046875 7.2636719 A 1.50015 1.50015 0 1 0 14.691406 9.7714844 C 17.365783 8.0179755 20.556791 7 24 7 C 33.406292 7 41 14.593708 41 24 C 41 26.707746 40.36968 29.257322 39.248047 31.525391 A 1.5001887 1.5001887 0 0 0 41.9375 32.855469 C 43.257867 30.185538 44 27.174254 44 24 C 44 12.972292 35.027708 4 24 4 z M 15.800781 13.076172 C 14.472781 15.202172 15.273563 17.527813 15.726562 18.507812 C 14.637562 19.788813 14 21.334 14 23 C 14 26.78 17.280547 29.939391 21.685547 30.775391 C 20.376547 31.448391 19.399609 32.67225 19.099609 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043156 38.12245 7 31.665102 7 24 C 7 21.314402 7.6195896 18.783427 8.7246094 16.529297 A 1.50015 1.50015 0 0 0 7.4492188 14.351562 A 1.50015 1.50015 0 0 0 6.03125 15.208984 C 4.7302698 17.862854 4 20.851598 4 24 C 4 35.027708 12.972292 44 24 44 C 28.472909 44 32.618147 42.525863 35.951172 40.039062 A 1.5009817 1.5009817 0 1 0 34.15625 37.632812 C 32.617628 38.780793 30.876119 39.662932 29 40.240234 L 29 35.136719 C 29 33.228719 27.902453 31.591391 26.314453 30.775391 C 30.719453 29.939391 34 26.78 34 23 C 34 21.426 33.423406 19.961609 32.441406 18.724609 C 32.883406 17.356609 33.371219 14.953172 32.199219 13.076172 C 29.948219 13.076172 28.469672 14.622797 27.763672 15.591797 C 26.601672 15.213797 25.333 15 24 15 C 22.667 15 21.398328 15.213797 20.236328 15.591797 C 19.530328 14.622797 18.052781 13.076172 15.800781 13.076172 z" />
              </svg>
            </div>
          </Link>

          <Link
            to={
              "https://www.linkedin.com/in/daniel-felipe-botache-zuluaga-desarrollador-full-stack/"
            }
          >
            <div className={styles.iconContainer}>
              <svg
                className={styles.navBarIcon}
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                {" "}
                <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z" />
              </svg>
            </div>
          </Link>
        </div>
        <button className={styles.langButton} onClick={handleChangeLanguage}>
          <h3 className={styles.langButton_h3}>
            <FormattedMessage id="nav.button" defaultMessage={"En"} />
          </h3>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
