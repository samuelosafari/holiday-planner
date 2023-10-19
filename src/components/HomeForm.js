import "./../components/styles/homeform.css";

const HomeForm = () => {
  return (
    <div className="home-form">
      <div className="home-form__container">
        <div className="home-form__group">
          <input type="text" placeholder="Where To?" />
        </div>
        <div className="home-form__group">
          <select>
            <option>When?</option>
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
        <div className="home-form__group">
          <select>
            <option>Travel type</option>
            <option>Cultural</option>
            <option>Adventure</option>
            <option>Historical</option>
            <option>Seaside</option>
            <option>Discovery</option>
          </select>
        </div>
        <div className="home-form__group">
          <button className="homef-btn">Find Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
