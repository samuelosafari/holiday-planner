import PageHero from "../components/PageHero";
import TourForm from "../components/TourForm";
import TouristCard from "./../components/TouristCard";
import ReasonCard from "../components/ReasonCard";
import TouristQuestionCard from "../components/TouristQuestionCard";
import "./../components/styles/tourpage.css";
import heroImg from "./../assets/tourlisthero.jpg";
const TourList = () => {
  return (
    <div className="tourList">
      <PageHero title={"Tour List"} imgUrl={heroImg} />
      <div className="sort-tour">
        <div className="sort-tour-flex">
          <div className="sort-release boxt">
            <p>Sort by:</p>
          </div>
          <div className="sort-release__date boxt">
            <select className="sort-select">
              <option>Release Date</option>
              <option>Tour Date</option>
              <option>Title</option>
              <option>Price</option>
              <option>Popularity</option>
              <option>Rating</option>
              <option>Duration</option>
            </select>
          </div>
          <div className="sort-release__order boxt">
            <select className="sort-select">
              <option>Descending</option>
              <option>Ascending</option>
            </select>
          </div>
        </div>
      </div>
      <div className="t-flexo">
        <div className="ttttt">
          <TouristCard />
          <TouristCard />
          <TouristCard />
          <TouristCard />
        </div>
        <div className="no-flexo">
          <TourForm />
          <ReasonCard />
          <TouristQuestionCard />
        </div>
      </div>
    </div>
  );
};

export default TourList;
