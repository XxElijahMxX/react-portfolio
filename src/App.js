import Intro from "./components/Header/Intro";
import About from "./components/about/About";
import ProjectList from "./components/Project_List/Project.list";
import Contact from "./components/Footer/Contact";
import Navigation from "./components/Navigation/Nav";
import Resume from "./components/Resume/Res";

const App = () => {
  return (
  <div>
    <Navigation/>
    <Intro/>
    <About/>
    <Resume/>
    <ProjectList/>
    <Contact/>
  </div>
  );
};

export default App;
