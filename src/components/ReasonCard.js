import "./styles/reason.css";
import { BiSolidChevronRight } from "react-icons/bi";
const ReasonCard = () => {
  return (
    <div className="reason-card">
      <div className="reason-card-body">
        <div className="reason-card-title">
          <h5>WHY BOOK WITH US?</h5>
        </div>
        <div className="reason-card-text">
          <BiSolidChevronRight className="reason-icon" />
          <p>Best Price Guarantee</p>
        </div>
        <div className="reason-card-text">
          <BiSolidChevronRight className="reason-icon" />
          <p>Customer care available 24/7</p>
        </div>
        <div className="reason-card-text">
          <BiSolidChevronRight className="reason-icon" />
          <p>Free Travel Insureance</p>
        </div>
        <div className="reason-card-text">
          <BiSolidChevronRight className="reason-icon" />
          <p>Hand-picked Tours & Activities</p>
        </div>
        {/* <h6 className="reason-card-subtitle ">Card subtitle</h6>
        <p className="reason-card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p> */}
      </div>
    </div>
  );
};

export default ReasonCard;
