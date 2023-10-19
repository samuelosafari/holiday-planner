import "./styles/contactlocation.css";
import { ImLocation2 } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const offices = [
  {
    officeName: "INDIA OFFICE",
    officeStreet: "54, Beside Shoping Mall, Gujarat.",
    officePhone: "+123 456 7890",
    officeEmail: "holidayplanners@gmail.com",
    id: 1,
  },
  {
    officeName: "USA OFFICE",
    officeStreet: "888 S Greenville, TX 75081, United States.",
    officePhone: "+123 456 7890",
    officeEmail: "holidayplanners@gmail.com",
    id: 2,
  },
  {
    officeName: "VICTORIA OFFICE",
    officeStreet: "Main Street, Victoria 8007.",
    officePhone: "+123 456 7890",
    officeEmail: "holidayplanners@gmail.com",
    id: 3,
  },
];

const ContactLocation = () => {
  return (
    <>
      <div className="location-contact">
        {offices.map((office) => (
          <div className="trial-contact" key={office.id}>
            <div className="location-title">
              <h4>{office.officeName}</h4>
            </div>
            <div className="location-street">
              <div className="street c-location">
                <div className="street-icon street-icon">
                  <ImLocation2 className="cIcon" />
                </div>
                <div className="street-name">
                  <p>{office.officeStreet}</p>
                </div>
              </div>
              <div className="street-phone c-location">
                <div className="street-icon-phone street-icon">
                  <BsTelephoneFill className="cIcon" />
                </div>
                <div className="street-name-phone">
                  <p>{office.officePhone}</p>
                </div>
              </div>
              <div className="street-email c-location">
                <div className="street-icon-email street-icon">
                  <MdAlternateEmail className="cIcon" />
                </div>
                <div className="street-name-email">
                  <p>{office.officeEmail}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <p className="map-container">
          <iframe
            src="https:www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5327263231097!2d30.088148373610515!3d-1.9394623366860038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4b136305%3A0xfa7ecaf4c40f3383!2skLab!5e0!3m2!1sen!2srw!4v1697365032417!5m2!1sen!2srw"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </p>
      </div>
    </>
    // <div className="location-contact">
    //   <div className="location-title">
    //     <h4>INDIA OFFICE</h4>
    //   </div>
    //   <div className="location-street">
    //     <div className="street c-location">
    //       <div className="street-icon street-icon">
    //         <ImLocation2 className="cIcon" />
    //       </div>
    //       <div className="street-name">
    //         <p>54, Beside Shoping Mall, Gujarat.</p>
    //       </div>
    //     </div>
    //     <div className="street-phone c-location">
    //       <div className="street-icon-phone street-icon">
    //         <BsTelephoneFill className="cIcon" />
    //       </div>
    //       <div className="street-name-phone">
    //         <p>+123 456 7890</p>
    //       </div>
    //     </div>
    //     <div className="street-email c-location">
    //       <div className="street-icon-email street-icon">
    //         <MdAlternateEmail className="cIcon" />
    //       </div>
    //       <div className="street-name-email">
    //         <p>holidayplanners@gmail.com</p>
    //       </div>
    //     </div>
    //   </div>
    //   <p>
    //     <iframe
    //       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5327263231097!2d30.088148373610515!3d-1.9394623366860038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4b136305%3A0xfa7ecaf4c40f3383!2skLab!5e0!3m2!1sen!2srw!4v1697365032417!5m2!1sen!2srw"
    //       width="600"
    //       height="450"
    //       style={{ border: "0" }}
    //       allowfullscreen=""
    //       loading="lazy"
    //       referrerpolicy="no-referrer-when-downgrade"
    //     ></iframe>
    //   </p>
    // </div>
  );
};

export default ContactLocation;
