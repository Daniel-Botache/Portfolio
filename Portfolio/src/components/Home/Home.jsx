import React from "react";
import About from "../About/About.jsx";
import Landing from "../Landing/Landing";
import Contact from "../Contact/Contact.jsx";
import { useDispatch, useSelector } from "react-redux";
import { scrolledAboutGlobal, scrolledHomeGlobal } from "../../Redux/actions";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const scrolled = useSelector((state) => state.scrolled);
  const scrolledHome = useSelector((state) => state.scrolledHome);
  useEffect(() => {
    if (scrolled == true) {
      setTimeout(() => {
        const aboutElement = document.getElementById("about");
        if (aboutElement) {
          aboutElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
    dispatch(scrolledAboutGlobal(false));
    dispatch(scrolledHomeGlobal(false));
  }, [scrolled]);

  useEffect(() => {
    if (scrolledHome == true) {
      setTimeout(() => {
        const aboutElement2 = document.getElementById("home");
        if (aboutElement2) {
          aboutElement2.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
    dispatch(scrolledAboutGlobal(false));
    dispatch(scrolledHomeGlobal(false));
  }, [scrolledHome]);
  return (
    <div>
      <div id="home">
        <Landing />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
