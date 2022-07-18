import Intro from "./components/Header/Intro";
import About from "./components/about/About";
import ProjectList from "./components/Project_List/Project.list";
import Contact from "./components/Footer/Contact";

const App = () => {
  return (
  <div>
    <Intro/>
    <About/>
    <ProjectList/>
    <Contact/>
  </div>
  );
};

export default App;
