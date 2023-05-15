import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="resources__navbar">
      <div className="navbar_logo">
        {/*zzz <div class="Navbar__Link Navbar__Link-toggle">
          <i class="fas fa-bars"></i>
          </div>  */}

        <div className="resources__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="resources__navbar-links">
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
          <button className="signup">sign up &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
