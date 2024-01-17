import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import BackToTop from './components/BackToTop';
import Home from "./components/Home/Home";
import OurProjects from './components/OurProjects/OurProjects';

function App() {
  return (
    <div>
      <BackToTop/>
      <Home/>
      <OurProjects/>
      <AboutUs/>
    </div>
  );
}

export default App;
