import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h2>404</h2>
      <p>Invalid Page</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default ErrorPage;
