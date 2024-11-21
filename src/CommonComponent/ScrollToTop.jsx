import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const location = useLocation(); // Get the current location from the router

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, [location]); // When the route/location changes, run the scrollToTop effect

  return null; // Return null since it's just a side-effect
};

export default ScrollToTop;
