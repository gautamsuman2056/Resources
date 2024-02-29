import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { useState } from "react";
import logo from "./../assets/logo.png";

export { default as Navigation } from "./../Nav/Navigation";

const Navigation = () => {
  const navigate = useNavigate();
  function handleclick() {
    navigate("/Resources");
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img onClick={handleclick} src={logo} alt="" />
      </div>
      <div
        className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-right">
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            {" "}
            <Link to="/business">Business</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/personal">Personal</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/pricing">Pricing</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/usecase">Use Case</Link>
          </li>
          <li>
            {" "}
            <Link to="/Resources">Resources</Link>{" "}
          </li>
        </ul>
        <div className="navbar-signup">
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
