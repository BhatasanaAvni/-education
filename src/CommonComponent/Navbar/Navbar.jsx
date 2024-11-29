// import React, { useState, useEffect } from "react";
// import { Logo, LogoFooter } from "../../Assetes/Images/Image";
// import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
// import { FaSearch } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");

//   const menuItems = [
//     { name: "Home", href: "#" },
//     { name: "About Us", href: "#about" },
//     { name: "Courses", href: "#Courses" },
//     { name: "Teachers", href: "#Teachers" },
//     { name: "Gallery", href: "#Gallery" },
//     { name: "Department", href: "#Department" },
//     { name: "Contact Us", href: "#Contact" },
//   ];

//   // Toggle menu visibility
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   // Scroll event handler to manage background color and positioning
//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   // Use useEffect to listen for scroll events
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const filteredItems = menuItems.filter(item =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>


//       <div className="bg-customBlue text-customGold p-4">
//         <div className="flex flex-wrap justify-between items-center gap-9">
//           {/* Left Section (Admission & Contact Info) */}
//           <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-9 ">
//   {/* "Admission Open" - Hidden on small screens, visible on medium and larger */}
//   <div className="hidden sm:block text-center sm:text-center">
//     Admission Open !!!!! 
//   </div>

//   {/* Phone Number (Visible on all screen sizes) */}
//   <div className="flex items-center gap-2">
//     <a href="tel:+98987 87875" className="flex items-center gap-2">
//       <FaPhoneAlt />
//       <span>+91 98987 87875</span>
//     </a>
//   </div>

//   {/* Email - Hidden on small screens, visible on medium and larger */}
//   <div className="hidden sm:flex items-center gap-2">
//     <a href="mailto:info@yashcampus.in" className="flex items-center gap-2">
//       <MdOutlineEmail />
//       <span>info@yashcampus.in</span>
//     </a>
//   </div>
// </div>


//           {/* Right Section (Social Media Icons) */}
//           <div className="hidden sm:flex gap-4 mt-0 sm:mt-0 text-xl">
//             <a
//               href="https://www.facebook.com/yashcampuss"
//               target="_blank"
//               className="text-customGold hover:text-white p-[8px] bg-white hover:bg-customGold duration-500 rounded-customRounded"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="https://www.instagram.com/yashcampuss/"
//               target="_blank"
//               className="text-customGold hover:text-white p-[8px] bg-white hover:bg-customGold duration-500 rounded-customRounded"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://wa.me/9898787875"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-customGold hover:text-white p-[8px] bg-white hover:bg-customGold duration-500 rounded-customRounded"
//             >
//               <FaWhatsapp />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`fixed w-full ${scrolled ? "top-0" : "top-15"} ${scrolled ? "bg-customBlue" : "bg-transparent"
//           } shadow-md z-50 transition-all duration-300`}
//       >
//         <div className="flex justify-between items-center px-4 py-3">
//           <div className="flex items-center gap-5">
//             <img src={Logo} alt="Logo" className="w-20" />
//           </div>
//           <div
//             onClick={toggleMenu}
//             className="cursor-pointer w-20 h-20 bg-customGold rounded-full flex justify-center items-center"
//           >
//             {menuOpen ? (
//               <RiMenuFold4Fill className="text-5xl text-customBlue" />
//             ) : (
//               <RiMenuFold3Fill className="text-5xl text-customBlue" />
//             )}
//           </div>
//         </div>
//       </div>

//       {menuOpen && (
//         <div
//           className="fixed right-0 top-24 h-[90vh] w-64 bg-customGold text-customBlue p-7 z-50"
//           style={{ borderRadius: "50px 0 50px 50px" }}
//         >
//           <ul className="space-y-4 flex flex-col">
//             {filteredItems.map((item) => (
//               <a key={item.name} className="font-bold" href={item.href}>
//                 {item.name}
//               </a>
//             ))}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Logo, LogoFooter } from "../../Assetes/Images/Image";
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation(); // To trigger scroll reset on route change

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#Courses" },
    { name: "Teachers", href: "#Teachers" },
    { name: "Gallery", href: "#Gallery" },
    { name: "Department", href: "#Department" },
    { name: "Contact Us", href: "#contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setScrolled(false); // Reset scroll state when the route changes
  }, [location]);

  return (
    <>
      <div className="bg-customBlue text-customGold p-4">
        <div className="flex flex-wrap justify-between items-center gap-9">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-9 ">
            <div className="hidden sm:block text-center sm:text-center">
              Admission Open !!!!! 
            </div>
            <div className="flex items-center gap-2">
              <a href="tel:+98987 87875" className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>+91 98987 87875</span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <a href="mailto:info@yashcampus.in" className="flex items-center gap-2">
                <MdOutlineEmail />
                <span>info@yashcampus.in</span>
              </a>
            </div>
          </div>

          <div className="hidden sm:flex gap-4 mt-0 sm:mt-0 text-xl">
            <a href="https://www.facebook.com/yashcampuss" target="_blank" className="text-customGold hover:text-white p-[8px] bg-white hover:bg-customGold duration-500 rounded-customRounded">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/yashcampuss/" target="_blank" className="text-customGold hover:text-white p-[8px] bg-white hover:bg-customGold duration-500 rounded-customRounded">
              <FaInstagram />
            </a>
            <a href="https://wa.me/9898787875" target="_blank" className="text-customGold hover:text-white p-[8px] bg-white hover:bg-customGold duration-500 rounded-customRounded">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className={`fixed w-full ${scrolled ? "top-0" : "top-15"} ${scrolled ? "bg-customBlue" : "bg-transparent"} shadow-md z-50 transition-all duration-300`}>
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-5">
            <img src={Logo} alt="Logo" className="w-20" />
          </div>
          <div onClick={toggleMenu} className="cursor-pointer w-20 h-20 bg-customGold rounded-full flex justify-center items-center">
            {menuOpen ? (
              <RiMenuFold4Fill className="text-5xl text-customBlue" />
            ) : (
              <RiMenuFold3Fill className="text-5xl text-customBlue" />
            )}
          </div>
        </div>
      </div>


{menuOpen && (
  <div
    className="fixed right-0 h-[50vh] w-64 bg-customGold text-customBlue p-7 z-50"
    style={{
      borderRadius: "50px 0 50px 50px",
      top: scrolled ? '95px' : '150px', // Adjust '200px' to a position that fits your design
    }}
  >
    <ul className="space-y-4 flex flex-col">
      {menuItems.map((item) => (
        <a key={item.name} className="font-bold" href={item.href}>
          {item.name}
        </a>
      ))}
    </ul>
  </div>
)}

    </>
  );
};

export default Navbar;
