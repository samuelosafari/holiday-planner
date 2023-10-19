import cardImg from "./../assets/cardimage1.jpg";
import "./styles/card.css";
import { Link } from "react-router-dom";

import { BiSolidTime } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
const TouristCard = () => {
  const styles = { width: "30.3rem" };
  return (
    <div className="card" style={styles}>
      <img src={cardImg} className="card-img-top" alt="" />
      <div className="country-badge">Rwanda</div>
      <div className="card-body">
        <h5 className="card-title">
          Holiday Planners is a World Leading Online Tour Booking Platform
        </h5>
        <p className="card-text">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia,...
        </p>
        <div className="duration">
          <div className="duration-days">
            <BiSolidTime className="clock" />
            <div className="days">
              <p>Duration</p>
              <p>Days</p>
            </div>
          </div>
          <div className="group-size">
            <BsPeopleFill className="grouped-people" />
            <div className="group-people">
              <p>Group Size</p>
              <p>6 People</p>
            </div>
          </div>
        </div>
        <div className="pricing-tours">
          <p>$1200</p>
          <Link to="/tourdetail" className="book-btn">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristCard;
