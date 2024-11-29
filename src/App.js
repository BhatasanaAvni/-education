 
import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom"; // Use Link instead of useNavigate
import Navbar from "./CommonComponent/Navbar/Navbar.jsx";
import Footer from "./CommonComponent/Footer/Footer.jsx";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import ScrollToTop from "./CommonComponent/ScrollToTop.jsx"; // Ensure ScrollToTop is imported
import Loader from "./CommonComponent/Loader/Loader.jsx";
import Modal from "./CommonComponent/Modal/Modal.jsx";
import Button from "./CommonComponent/Btn/Button.jsx";
import { IoMdClose } from "react-icons/io";
import popupimg from "../src/Assetes/Images/yashpopup.jpg";
import AdmisionOPen from "./Pages/AdmisionOpen.jsx";

const MainPage = lazy(() => import("./Pages/MainPage.jsx"));
const About = lazy(() => import("./Pages/About.jsx"));
const AllTeachers = lazy(() => import("./Components/Teachers/AllTeachers.jsx"));
const JoinEventForm = lazy(() => import("./Auth/JoinEventForm/JoinEventForm.jsx"));
const Blog = lazy(() => import("./Pages/Blog.jsx"));
const Contact = lazy(() => import("./Pages/Contect.jsx"));
const ContectForm = lazy(() => import("./Auth/contactForm/contactForm.jsx"));

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isMainReady, setIsMainReady] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
      setShowPopup(true); // Show popup after loader
    }, 2500);

    return () => clearTimeout(loaderTimer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    setIsMainReady(true);
  };

  return (
    <>
      {showLoader && <Loader />}
      {!showLoader && showPopup && (
        <Modal isOpen={showPopup} onClose={closePopup}>
          <div className="flex items-end justify-end">
            <button
              onClick={closePopup}
              className="w-[50px] h-[50px] bg-customBlue text-white py-2 rounded-full flex items-center justify-center hover:bg-customGold transition-colors duration-300"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="w-full">
            <img src={popupimg} className="pt-4" alt="Popup Image" />
          </div>
          {/* Replace the navigate with Link */}
          <div className="my-3">
            <Link to="/admision">
              <Button onClick={closePopup}>For More Details</Button>
            </Link>
          </div>
        </Modal>
      )}

      {isMainReady && (
        <>
          {/* <Navbar /> */}
          <ScrollToTop /> {/* This will scroll to top on route change */}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/all-teachers" element={<AllTeachers />} />
              <Route path="/joinEvent" element={<JoinEventForm />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contectForm" element={<ContectForm />} />
              <Route path="/admision" element={<AdmisionOPen/>}/>
            </Routes>
          </Suspense>
          {/* <Footer /> */}

             {/* Floating Contact Button */}
             <div className="fixed bottom-5 right-5 z-50">
            <Link to="/contact">
              <button
                className="bg-customGold p-2 text-2xl py-3 px-4 uppercase font-semibold tracking-wider cursor-pointer text-center rounded-full overflow-hidden z-[1] text-customBlue hover:text-white flex items-center justify-center gap-2 transition-colors duration-300 ease-in-out hover:bg-customBlue"
              >
                <BiSolidMessageSquareDetail />
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default App;

