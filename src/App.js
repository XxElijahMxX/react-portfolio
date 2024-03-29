import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" exact element={<Resume />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/contact me" exact element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
