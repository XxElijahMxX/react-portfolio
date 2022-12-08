import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/home";
import Services from "./components/pages/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/contact me" exact element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
