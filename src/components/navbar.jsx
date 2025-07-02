import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./assets/college logo.jpeg"; // ✅ Adjust path if file is in a different folder

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Add state to control navbar toggle

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the menu visibility
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      <div className="header-space-icon d-none d-lg-flex">
        <div className="container">
          <div className="icon">
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div className="icon">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="icon">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg {`menu ${isOpen ? 'show' : 'hide'}`}">
        <div className="container">
          <div className="logo-name">
            <div className="logo">
              <a href="/" className="navbar-brand">
                <img className="college-logo" src={logo} alt="College Logo" />
              </a>
            </div>
            <div className="logo-text text-white d-none d-lg-block">
              <p className="college-name">
                Government Polytechnic{" "}
                <span className="established"> Dhanbad Established 1958</span>
              </p>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleToggle} // Toggle menu on click
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  onClick={handleLinkClick}
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleLinkClick}
                      to="/about/AboutInstitute"
                    >
                      <i className="fa-solid fa-greater-than"></i> About
                      Institute
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleLinkClick}
                      to="/about/FacultyInformation"
                    >
                      <i className="fa-solid fa-greater-than"></i> Faculty
                      Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleLinkClick}
                      to="/about/mission&Vision"
                    >
                      <i className="fa-solid fa-greater-than"></i> Mission
                      Vision
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleLinkClick}
                      to="/about/principalDesk"
                    >
                      <i className="fa-solid fa-greater-than"></i> Principal
                      Desk
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleLinkClick}
                      to="/about/facility"
                    >
                      <i className="fa-solid fa-greater-than"></i> Facilities
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Departments
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleLinkClick}
                      to="/mechanical"
                    >
                      <i className="fa-solid fa-greater-than"></i> Mechanical
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleLinkClick}
                      to="/civil"
                    >
                      <i className="fa-solid fa-greater-than"></i> Civil
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleLinkClick}
                      to="/electrical"
                    >
                      <i className="fa-solid fa-greater-than"></i> Electrical
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleLinkClick}
                      to="/computer science"
                    >
                      <i className="fa-solid fa-greater-than"></i> Computer
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleLinkClick}
                      to="/metallurgy"
                    >
                      <i className="fa-solid fa-greater-than"></i> Metallurgy
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/admission"
                  onClick={handleLinkClick}
                >
                  Admission
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/GlobalNotice"
                  onClick={handleLinkClick}
                >
                  Notice
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/PlacementSection"
                  onClick={handleLinkClick}
                >
                  Placement
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact us"
                  onClick={handleLinkClick}
                >
                  Contact Us
                </Link>
              </li>

              <li className="vertical-nav-icon d-lg-none">
                <div className="container">
                  <div className="icon">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="icon">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className="icon">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </li>
            </ul>

            <div className="button-container">
              <button className="button-btn">
                <Link
                  to="/auth/signup"
                  className="text-dark text-decoration-none"
                  onClick={handleLinkClick}
                >
                  Sign up
                </Link>
              </button>
              <button className="button-btn">
                <Link
                  to="/auth/login"
                  className="text-dark text-decoration-none"
                  onClick={handleLinkClick}
                >
                  Log in
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
