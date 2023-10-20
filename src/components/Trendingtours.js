import React from "react";
import "./../components/styles/trendingtours.css";
import { Carousel } from "react-responsive-carousel";
import TouristCard from "./TouristCard";
function Trendingtours() {
  return (
    <div className="trending-container">
      <div className="trending-title">
        <h4>Amazing Tours</h4>
      </div>
      <h2 className="trending-subtitle">
        Trending, <span>Best Selling Tours</span> And Fun Destinations
      </h2>
      <Carousel
        autoPlay
        infiniteLoop
        centerMode
        centerSlidePercentage={50}
        showArrows={false}
        showStatusS={false}
        emulateTouch={true}
        interval={2000}
      >
        <TouristCard />
        <TouristCard />
        <TouristCard />
        <TouristCard />
        <TouristCard />
        <TouristCard />
        <TouristCard />
      </Carousel>
    </div>
  );
}

export default Trendingtours;
