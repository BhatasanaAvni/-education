// import React, { useState, useEffect } from "react";
// import { Logo, LogoFooter } from "../../Assetes/Images/Image";
// import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
// import { FaSearch } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(true);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleScroll = () => {
//     setScrolled(window.scrollY < 50);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Fixed header with logo and menu icon */}
//       <div
//         className={`fixed top-0 w-full ${
//           scrolled ? "bg-transparent" : "bg-customgreen"
//         } shadow-md z-50 transition-colors duration-300`}
//       >
//         <div className="flex justify-between items-center px-4 py-3">
//           {/* Conditional Logo Display */}
//           <div className="flex items-center gap-5">
//             <img
//               src={scrolled ? Logo : LogoFooter}
//               alt="Logo"
//               className="w-52"
//             />
//             <div className="flex items-center justify-center border border-white rounded-customRoundedBtn p-2 hidden md:flex">
//               <input
//                 type="search"
//                 className="bg-transparent border-none outline-none text-white"
//                 placeholder="Search..."
//               />
//               <FaSearch className="text-white text-xl ml-2" />
//             </div>
//           </div>
//           <div
//             onClick={toggleMenu}
//             className="cursor-pointer w-20 h-20 bg-customOrange rounded-full flex justify-center items-center"
//           >
//             {menuOpen ? (
//               <RiMenuFold4Fill className="text-5xl text-white" />
//             ) : (
//               <RiMenuFold3Fill className="text-5xl text-white" />
//             )}
//           </div>
//         </div>
//       </div>

//       {menuOpen && (
//         <div className="fixed right-0 top-0 h-full w-64 bg-customOrange text-white p-5 z-100">
//           <ul className="space-y-4">
//             <li className="font-bold">Menu Item 1</li>
//             <li className="font-bold">Menu Item 2</li>
//             <li className="font-bold">Menu Item 3</li>
//             <li className="font-bold">Menu Item 4</li>
//             <li className="font-bold">Menu Item 5</li>
//             <li className="font-bold">Menu Item 6</li>
//           </ul>
//           {/* Responsive Search Input in Sidebar */}
//           <div className="mt-10 flex items-center justify-center border border-white rounded-customRoundedBtn p-2 md:hidden">
//             <input
//               type="search"
//               className="bg-transparent border-none outline-none text-white"
//               placeholder="Search..."
//             />
//             <FaSearch className="text-white text-xl ml-2" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Logo, LogoFooter } from "../../Assetes/Images/Image";
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY < 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed header with logo and menu icon */}
      <div
        className={`fixed top-0 w-full ${
          scrolled ? "bg-transparent" : "bg-customgreen"
        } shadow-md z-50 transition-colors duration-300`}
      >
        <div className="flex justify-between items-center px-4 py-3">
          {/* Conditional Logo Display */}
          <div className="flex items-center gap-5">
            <img
              src={scrolled ? Logo : LogoFooter}
              alt="Logo"
              className="w-52"
            />
            <div className="flex items-center justify-center border border-white rounded-customRoundedBtn p-2 hidden md:flex">
              <input
                type="search"
                className="bg-transparent border-none outline-none text-white"
                placeholder="Search..."
              />
              <FaSearch className="text-white text-xl ml-2" />
            </div>
          </div>
          <div
            onClick={toggleMenu}
            className="cursor-pointer w-20 h-20 bg-customOrange rounded-full flex justify-center items-center"
          >
            {menuOpen ? (
              <RiMenuFold4Fill className="text-5xl text-white" />
            ) : (
              <RiMenuFold3Fill className="text-5xl text-white" />
            )}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed right-0 top-24 h-[80vh] w-64 bg-customOrange text-white p-7 z-50 " style={{borderRadius:"50px 0 50px 50px"}}>
          <ul className="space-y-4 flex flex-col">
          <a className="font-bold" href="#">Home</a>
            <a className="font-bold" href="#about">About Us</a>
            <a className="font-bold" href="#Courses">Courses</a>
            <a className="font-bold" href="#Teachers">Teachers</a>
            <a className="font-bold" href="#Gallery">Gallery</a>
            <a className="font-bold" href="#Events">Events</a>
            <a className="font-bold" href="#Department">Department</a>
            <a className="font-bold" href="#Blog">Blog</a>
            {/* <a className="font-bold" href="#Blog">Contact</a> */}
          </ul>
          {/* Responsive Search Input in Sidebar */}
          <div className="mt-10 flex items-center justify-center border border-white rounded-customRoundedBtn p-2 md:hidden">
            <input
              type="search"
              className="bg-transparent border-none outline-none text-white"
              placeholder="Search..."
            />
            <FaSearch className="text-white text-xl ml-2" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

