import { BiSearchAlt2, BiMenuAltRight } from "react-icons/bi";
import About from "../components/About";
import HomeForm from "../components/HomeForm";
import Slider from "../components/Slider";
import Trendingtours from "../components/Trendingtours";
import { Carousel } from "react-responsive-carousel";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <HomeForm />
      <About />
      <Trendingtours />
    </div>
  );
};

export default Home;
