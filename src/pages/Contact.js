import "./../components/styles/contactHero.css";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import TouristQuestionCard from "./../components/TouristQuestionCard";
import ReasonCard from "./../components/ReasonCard";
import ContactLocation from "./../components/ContactLocation";
import PageHero from "../components/PageHero";
import contactImage from "./../assets/contacthero.jpg";
const Contact = () => {
  return (
    <div className="contact-page">
      <PageHero title={"Contact Us"} imgUrl={contactImage} />
      <div className="contact-flex">
        <div className="contact-form__container">
          <div className="contact-container">
            <form>
              <div className="cflex-inputs">
                <div className="cform-label__container">
                  <BsFillPersonFill className="contact-icon" />
                  <input type="text" placeholder="Full Name*" />
                </div>
                <div className="cform-label__container">
                  <MdEmail className="contact-icon" />
                  <input type="text" placeholder="Email*" />
                </div>
              </div>
              <div className="cflex-inputs">
                <div className="cform-label__container">
                  <BsFillTelephoneFill className="contact-icon" />
                  <input type="text" placeholder="Phone*" />
                </div>
                <div className="cform-label__container">
                  <FaBook className="contact-icon" />
                  <input type="text" placeholder="Service*" />
                </div>
              </div>
              <div className="cform-label__container ">
                {/* <input type="textarea" /> */}
                <textarea
                  placeholder="Message"
                  className="c-message"
                  cols="50"
                  rows="4"
                ></textarea>
              </div>
              <button className="c-btn">SUBMIT</button>
            </form>
          </div>
        </div>
        <div className="contact-cards">
          <ReasonCard className="creasoncard" />
          <TouristQuestionCard className="ctouristcard" />
        </div>
      </div>
      <ContactLocation />
    </div>
  );
};

export default Contact;
