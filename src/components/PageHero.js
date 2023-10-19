// import imgpage from "../assets/tourlist.jpg";
import imggg from "./../assets/tourlisthero.jpg";
import "./styles/pagehero.css";
const PageHero = ({ title, imgUrl }) => {
  console.log(imgUrl);
  return (
    <div
      class="hero-page-img"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${imgUrl})`,
      }}
    >
      <div className="hero-text">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PageHero;
