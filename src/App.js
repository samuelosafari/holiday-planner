import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MenuModal from "./components/MenuModal";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddTestimony from "./pages/AddTestimony";
import Contact from "./pages/Contact";
import TourDetails from "./pages/TourDetails";
import TourList from "./pages/TourList";
import Payment from "./pages/Payment";
import TourForm from "./components/TourForm";
import SharedLayout from "./pages/SharedLayout";
import TouristQuestionCard from "./components/TouristQuestionCard";
import ContactLocation from "./components/ContactLocation";
import Footer from "./components/Footer";
import About from "./components/About";
import HomeForm from "./components/HomeForm";
function App() {
  return (
    // <>
    //   <TourDetails />
    // </>

    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="payment" element={<Payment />}></Route>
        <Route path="tourlist" element={<TourList />}></Route>
        <Route path="tourdetails" element={<TourDetails />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="addtestimony" element={<AddTestimony />}></Route>
        <Route path="tourdetail" element={<TourDetails />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
