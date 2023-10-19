import "./styles/touristQcard.css";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import bgImg from "./../assets/question-background.jpg";
const TouristQuestionCard = () => {
  return (
    <div className="q-card">
      <div className="q-card-body content">
        <div className="q-card-title">
          <h3>GET A QUESTION?</h3>
        </div>
        <p className="q-card-text">
          Do not hesitage to give us a call. We are an expert team and we are
          happy to talk to you.
        </p>
        <div className="q-email">
          <MdEmail className="icon-email" />
          <p>holidayplanners@gmail.com</p>
        </div>
        <div className="q-telphone">
          <BsFillTelephoneFill className="icon-telephone" />
          <p>+123 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default TouristQuestionCard;
