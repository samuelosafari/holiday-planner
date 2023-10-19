import { BiSearchAlt2, BiMenuAltRight } from "react-icons/bi";
import About from "../components/About";
import HomeForm from "../components/HomeForm";
import Slider from "../components/Slider";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <HomeForm />
      <About />
    </div>
  );
};

export default Home;
