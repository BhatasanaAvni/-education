import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./CommonComponent/Navbar/Navbar.jsx";
import Footer from "./CommonComponent/Footer/Footer.jsx";
import ScrollToTop from "./CommonComponent/ScrollToTop.jsx";
import Loader from "./CommonComponent/Loader/Loader.jsx";
import { BiSolidMessageSquareDetail } from "react-icons/bi"; // Import icon for button
import { Link } from "react-router-dom";
const MainPage = lazy(() => import("./Pages/MainPage.jsx"));
const About = lazy(() => import("./Pages/About.jsx"));
const AllTeachers = lazy(() => import("./Components/Teachers/AllTeachers.jsx"));
const JoinEventForm = lazy(() => import("./Auth/JoinEventForm/JoinEventForm.jsx"));
const Blog = lazy(() => import("./Pages/Blog.jsx"));
const Contact = lazy(() => import("./Pages/Contect.jsx"));

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {isReady ? (
        <>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/all-teachers" element={<AllTeachers />} />
              <Route path="/joinEvent" element={<JoinEventForm />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
          
          {/* Floating Contact Button */}
          <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50">
            <Link to="/contact">
              <button
                className="bg-customGold p-2 text-2xl py-[10px] px-[15px] uppercase font-semibold tracking-wider cursor-pointer text-center rounded-customRoundedBtn overflow-hidden z-[1] text-customBlue hover:text-white flex items-center justify-center gap-2
                transition-colors duration-300 ease-in-out hover:bg-customBlue"
              >
                <BiSolidMessageSquareDetail />
              </button>
            </Link>
          </div>

        </>
      ) : (
        <Loader />
      )}
    </Router>
  );
}

export default App;
