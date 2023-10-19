import "./../components/styles/tourdetail.css";
import italyImage from "./../assets/cardimage1.jpg";
import PageHero from "../components/PageHero";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsPeopleFill, BsFillPersonPlusFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import TouristQuestionCard from "../components/TouristQuestionCard";
import ReasonCard from "../components/ReasonCard";
// import vid from "./../assets/highlight-video.mp4";

const TourDetails = () => {
  return (
    <div className="tourDetails">
      <PageHero title={"Italy"} imgUrl={italyImage} />
      <div className="ttflex-tourdetails">
        <div className="tdCard">
          <div className="tourDetailsCardContainer">
            <div className="tourdetail-title">
              <h2>
                A wonderful serenity has taken possession of my entire soul
              </h2>
            </div>
            <div className="money-ball">
              <div className="moneyperperson">
                <p>$1200</p>
                <div className="line"></div>
                <p>Per Person</p>
              </div>
            </div>
          </div>
          <div className="tdetail-icons">
            <div className="detail-days tdi-container">
              <BiSolidTimeFive className="detailIcon" />
              <p>2 days</p>
            </div>
            <div className="details-people tdi-container">
              <BsPeopleFill className="detailIcon" />
              <p>6 People</p>
            </div>
            <div className="detail-person tdi-container">
              <BsFillPersonPlusFill className="detailIcon" />
              <p>18</p>
            </div>
            <div className="tdetail-location tdi-container">
              <MdLocationOn className="detailIcon" />
              <p>Greece</p>
            </div>
            <div className="detail-discovery tdi-container">
              <FaSun className="detailIcon" />
              <p>Discovery</p>
            </div>
          </div>
          <p className="tdbody-details">
            I should be incapable of drawing a single stroke at the present
            moment; and yet I feel that I never was a greater artist than now.
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams.
          </p>
          <p className="tdbody-details">
            I should be incapable of drawing a single stroke at the present
            moment; and yet I feel that I never was a greater artist than now.
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary, I throw myself down among the tall grass by the trickling
            stream; and, as I lie close to the earth, a thousand unknown plants
            are noticed by me: when I hear the buzz of the little world among
            the stalks, and grow familiar with the countless indescribable forms
            of the insects and flies, then I feel the presence of the Almighty,
            who formed us in his own image, and the breath
          </p>
          {/* <video controls width="640" height="360">
            <source
              src={require("./../assets/highlight-video.mp4")}
              type="video/mp4"
            />
          </video> */}
          <div className="tdtables">
            <div className="tdrow">
              <div className="tdDestination tdrow1">
                <h4>Destination</h4>
              </div>
              <div className="tdDestinationName tdrow1">
                <p>Greece</p>
              </div>
            </div>
            <div className="tdrow">
              <div className="tdDestination tdrow1">
                <h4>Departure</h4>
              </div>
              <div className="tdDestinationName tdrow1">
                <p>Lorem Ipsum</p>
              </div>
            </div>
            <div className="tdrow">
              <div className="tdDestination tdrow1">
                <h4>Departure Time</h4>
              </div>
              <div className="tdDestinationName tdrow1">
                <p>9:15 AM To 9:30 AM.</p>
              </div>
            </div>
            <div className="tdrow">
              <div className="tdDestination tdrow1">
                <h4>Return Time</h4>
              </div>
              <div className="tdDestinationName tdrow1">
                <p>Approximately 10:30 PM.</p>
              </div>
            </div>
            <div className="tdrow">
              <div className="tdDestination tdrow1">
                <h4>Dress Code</h4>
              </div>
              <div className="tdDestinationName tdrow1">
                <p>comfortable clothing and light jacket.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ttflexup-tourdetails">
          <div className="tdform">
            <div className="tdform-title">
              <h4>BOOK THIS TOUR</h4>
            </div>
            <form>
              <div className="tdform-grup">
                <input type="text" placeholder="Full Name*" />
              </div>
              <div className="tdform-grup">
                <input type="text" placeholder="Email*" />
              </div>
              <div className="tdform-grup">
                <input type="text" placeholder="Confirm Email*" />
              </div>
              <div className="tdform-grup">
                <input type="text" placeholder="Phone*" />
              </div>
              <div className="tdform-grup">
                <input type="date" />
              </div>
              <div className="tdform-grup">
                <input type="number" placeholder="Number Of Tickets" />
              </div>
              <div className="tdform-grup">
                <textarea
                  name=""
                  id=""
                  placeholder="Message"
                  cols="50"
                  rows="4"
                ></textarea>
              </div>
              <div className="checkbox-flex">
                <input className="form-checkbox" type="checkbox" />
                <label>Discovery</label>
              </div>
              <button className="tourform-btn tdbtn">BOOK NOW</button>
            </form>
          </div>
          <ReasonCard />
          <TouristQuestionCard />
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
