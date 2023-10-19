import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <div className="SharedLayout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default SharedLayout;
