import React, { useState, useEffect, useRef } from "react";
import "./style.css";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuToggle((prevToggle) => !prevToggle);
  };

  const closeMenu = () => {
    setMenuToggle(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (menuToggle) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuToggle]);

  return (
    <>
      <div ref={navRef} className="navbar-div">
        <nav id="navbar" className={menuToggle ? "navbar-expanded" : ""}>
          <div className="nav-wrapper">
            <div className="logo">
              <a href="#home">Akhlaq Hussain Qasmi</a>
            </div>

            <ul id="menu" className={`menu ${menuToggle ? "open" : ""}`}>
              <li>
                <a href="#home" className="li-a" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="li-a"  onClick={closeMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#cd-timeline" className="li-a"  onClick={closeMenu}>
                  Achievements
                </a>
              </li>
              <li>
                <a href="#books" className="li-a"  onClick={closeMenu}>
                  Books
                </a>
              </li>
              <li>
                <a href="#cards" className="li-a"  onClick={closeMenu}>
                  Videos
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/*
      #e3dfd6
      #2a2b2e 
       */}

        <div
          className={`menuIcon ${menuToggle ? "toggle" : ""}`}
          onClick={toggleMenu}
        >
          <span className="icon icon-bars"></span>
          <span className="icon icon-bars overlay"></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
