import React from "react";
import About from "../About/About.jsx";
import Landing from "../Landing/Landing";
import Contact from "../Contact/Contact.jsx";
import { useDispatch, useSelector } from "react-redux";
import { scrolledAboutGlobal } from "../../Redux/actions";
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
  }, [scrolled]);

  useEffect(() => {
    if (scrolledHome == true) {
      setTimeout(() => {
        const aboutElement = document.getElementById("home");
        if (aboutElement) {
          aboutElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
    dispatch(scrolledAboutGlobal(false));
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
