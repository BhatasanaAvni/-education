import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./CommonComponent/Footer/Footer.jsx";
import React, { Suspense, lazy, useState, useEffect } from "react";



import Navbar from "./CommonComponent/Navbar/Navbar.jsx";



const MainPage = lazy(() => import('./Pages/MainPage.jsx'));
const About = lazy(() => import('./Pages/About.jsx'));
const AllTeachers = lazy(() => import('./Components/Teachers/AllTeachers.jsx'));
const Loader = lazy(() => import('./CommonComponent/Loader/Loader.jsx'));
const JoinEventForm = lazy(() => import('./Auth/JoinEventForm/JoinEventForm.jsx'));
const Blog = lazy(() => import('./Pages/Blog.jsx'));
const Contect = lazy(() => import('./Pages/Contect.jsx'));


function App() {
  const [isReady, setIsReady] = useState(false);

  // Set a 2.5-second delay before showing the content
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2500);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <>
      <Router>
        {/* Conditionally render components after 2.5 seconds */}
        {isReady ? (
          <>
            <Navbar /> {/* Navbar now renders only after isReady is true */}
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<MainPage />} />  
                <Route path="/about" element={<About />} />      
                <Route path="/all-teachers" element={<AllTeachers />} />
                <Route path="/joinEvent" element={<JoinEventForm />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contect" element={<Contect />} />
              </Routes>
              <Footer />
            </Suspense>
          </>
        ) : (
          <Loader /> // Loader displayed while waiting
        )}
      </Router>
    </>
  );
}

export default App;
