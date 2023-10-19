import "./../components/styles/tourForm.css";
import { BiSearch, BiSolidCalendar } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

const TourForm = () => {
  return (
    <div className="form-container">
      <div className="form-title">
        <h5 className="f-title">FIND YOUR TOUR</h5>
      </div>
      <form>
        <div className="form-collection">
          <div className="tourFormGroupe">
            <BiSearch className="tform-icons" />
            <input type="text" placeholder="Search Tour" />
          </div>
          <div className="tourFormGroupe">
            <IoLocationSharp className="tform-icons" />
            <input type="text" placeholder="Where To" />
          </div>
          <div className="tourFormGroupe">
            <BiSolidCalendar className="tform-icons" />
            <select>
              <option>Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <label>Duration</label>
          <div className="tourFormGroupe">
            <select>
              <option>Any</option>
              <option>1 Day Tour</option>
              <option>2-4 Day Tour</option>
              <option>5-7 Day Tour</option>
              <option>7+ Day Tour</option>
            </select>
          </div>
          <div className="form-flex">
            <label className="price-input">Min Price</label>
            <div className="tourFormGroupe">
              <input type="number" placeholder="0" />
            </div>
            <label className="price-input">Max Price</label>
            <div className="tourFormGroupe">
              <input type="number" placeholder="100" />
            </div>
          </div>
          <div className="tourFormGroup">
            <div className="checkbox-flex">
              <input className="form-checkbox" type="checkbox" />
              <label>Cultural</label>
            </div>
            <br />
            <div className="checkbox-flex">
              <input className="form-checkbox" type="checkbox" />
              <label>Adventure</label>
            </div>
            <br />
            <div className="checkbox-flex">
              <input className="form-checkbox" type="checkbox" />
              <label>Historical</label>
            </div>
            <br />
            <div className="checkbox-flex">
              <input className="form-checkbox" type="checkbox" />
              <label>Seaside</label>
            </div>
            <br />
            <div className="checkbox-flex">
              <input className="form-checkbox" type="checkbox" />
              <label>Discovery</label>
            </div>
          </div>
          <button className="tourform-btn">Find Now</button>
        </div>
      </form>
    </div>
  );
};

export default TourForm;
