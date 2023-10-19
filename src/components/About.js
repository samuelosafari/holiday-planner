import abtImg1 from "./../assets/abt-img.jpg";
import abtImg2 from "./../assets/abt-img2.jpg";
import "./../components/styles/about.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <div className="ab-img1 image-cadre">
          <img src={abtImg1} />
        </div>
        <div className="ab-img2 image-cadre2">
          <img src={abtImg2} />
        </div>
      </div>
      <div className="abt-description">
        <div className="about-title">
          <h4>About Us</h4>
        </div>
        <h3 className="abt-subTitle">Plan Your Trip with Us</h3>
        <div className="about-body">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic. Italic Mountains, she had a last
            view back on the skyline
          </p>
          <button className="abt-btn">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default About;
