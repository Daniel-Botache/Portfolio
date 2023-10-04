import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
