import React, { useState, useEffect } from "react";
import { Logo, LogoFooter } from "../../Assetes/Images/Image";
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#Courses" },
    { name: "Teachers", href: "#Teachers" },
    { name: "Gallery", href: "#Gallery" },
    // { name: "Events", href: "#Events" },
    { name: "Department", href: "#Department" },
    // { name: "Blog", href: "#Blog" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleScroll = () => setScrolled(window.scrollY < 50);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div
        className={`fixed top-0 w-full ${
          scrolled ? "bg-transparent" : "bg-customBlue"
        } shadow-md z-50 transition-colors duration-300`}
      >
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-5">
            <img src={Logo} alt="Logo" className="w-20" />
            {/* <div className="flex items-center justify-center border border-white rounded-customRoundedBtn p-2 hidden md:flex">
              <input
                type="search"
                className="bg-transparent border-none outline-none text-white"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="text-white text-xl ml-2" />
            </div> */}
          </div>
          <div
            onClick={toggleMenu}
            className="cursor-pointer w-20 h-20 bg-customGold rounded-full flex justify-center items-center"
          >
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
          className="fixed right-0 top-24 h-[90vh] w-64 bg-customGold text-customBlue p-7 z-50"
          style={{ borderRadius: "50px 0 50px 50px" }}
        >
          <ul className="space-y-4 flex flex-col">
            {filteredItems.map((item) => (
              <a key={item.name} className="font-bold" href={item.href}>
                {item.name}
              </a>
            ))}
          </ul>
          {/* <div className="mt-10 flex items-center justify-center border border-white rounded-customRoundedBtn p-2 md:hidden">
            <input
              type="search"
              className="bg-transparent border-none outline-none text-white"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="text-white text-xl ml-2" />
          </div> */}
        </div>
      )}
    </>
  );
};

export default Navbar;
