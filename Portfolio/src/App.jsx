import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects.jsx";
import ContacView from "./components/Contact/ContacView";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import englishMessages from "./Lang/en-US.json";
import españolMessages from "./Lang/es-MX.json";

function App() {
  const language = useSelector((state) => state.language);
  const locale = useSelector((state) => state.locale);
  return (
    <>
      <IntlProvider
        locale={locale}
        messages={language == "en" ? englishMessages : españolMessages}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContacView />} />
        </Routes>
        <Footer />
      </IntlProvider>
    </>
  );
}

export default App;
