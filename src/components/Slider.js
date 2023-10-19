import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import sImg1 from "./../assets/slide1.jpg";
import sImg2 from "./../assets/slide2.jpg";
import sImg3 from "./../assets/slide3.jpg";
import "./../components/styles/slider.css";
function Slider() {
  return (
    <Carousel infiniteLoop>
      <div>
        <img src={sImg2} style={{ filter: "brightness(0.6)" }} />
        <h1 className="legend">Life Is Short and </h1>
        <div className="isit">
          <h1 className="trial-legend">The World Is Wide.</h1>
        </div>
        {/* <p className="legend">Legend 1</p> */}
        <p className="legend-description">
          A journey of a 1000 miles starts with a single step. Import the full{" "}
          <br />
          demo content with 1 click and create a head-turning website for your{" "}
          <br />
          travel agency.
        </p>
      </div>
      <div>
        <img src={sImg3} style={{ filter: "brightness(0.6)" }} />
        <h1 className="legend">Life Is Short and </h1>
        <div className="isit">
          <h1 className="trial-legend">The World Is Wide.</h1>
        </div>
        {/* <p className="legend">Legend 1</p> */}
        <p className="legend-description">
          A journey of a 1000 miles starts with a single step. Import the full{" "}
          <br />
          demo content with 1 click and create a head-turning website for your{" "}
          <br />
          travel agency.
        </p>
      </div>
      <div>
        <img src={sImg2} style={{ filter: "brightness(0.6)" }} />
        <h1 className="legend">Life Is Short and </h1>
        <div className="isit">
          <h1 className="trial-legend">The World Is Wide.</h1>
        </div>
        {/* <p className="legend">Legend 1</p> */}
        <p className="legend-description">
          A journey of a 1000 miles starts with a single step. Import the full{" "}
          <br />
          demo content with 1 click and create a head-turning website for your{" "}
          <br />
          travel agency.
        </p>
      </div>
    </Carousel>
  );
}

export default Slider;
