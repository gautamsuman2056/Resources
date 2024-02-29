import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  function handleclick() {
    navigate("/Resources");
  }

  return (
    <div className="resources__navbar">
      <nav className="logo-toggle">
        <div class="toggle-icon">
          <i class="fas fa-bars"></i>
        </div>

        <div className="resources__navbar-links-logo">
          <img onClick={handleclick} src={logo} alt="logo" />
        </div>
      </nav>

      <div className="resources__navbar-links_container ">
        <li>
          {" "}
          <Link to="/Home">Business</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/Personal">Personal</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/Pricing">Pricing</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/Use Case">Use Case</Link>
        </li>
        <li>
          {" "}
          <Link to="/Resources">Resources</Link>{" "}
        </li>
      </div>

      <div>
        <button className="signup">Sign up &gt;</button>
      </div>
    </div>
  );
};

export default Navbar;
