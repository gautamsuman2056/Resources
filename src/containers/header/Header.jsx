import React from "react";
import "./header.css";
import smilyImage from "../../assets/smiliy.png";
import cupImage from "../../assets/copy and tea.png";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();

  function handleclick() {
    navigate("/ResourcesDetails");
  }

  return (
    <div className="Header_Container">
      <div className="skew_headerDesign">
        <div className="header_div">
          <div className="header_left">
            <p>PAXFORM RESOURCES</p>
            <h1> Guides and Resources</h1>
            <p id="par">
              Paxform will never share your data with anyone. What’s more, no
              one at Paxform can view or access your information.{" "}
            </p>

            <div className="header-content__button">
              <button
                onClick={handleclick}
                className="button"
                id="seeAllResources"
              >
                See all Resources &gt;
              </button>
            </div>
          </div>
          <div className="header_right">
            <div className="first_rightDiv">
              <img src={smilyImage} alt="" />
              <p id="rightPar">There are many variations of passages</p>
              <button onClick={handleclick} className="button">
                Read More &gt;{" "}
              </button>
            </div>
            <div className="second_rightDiv">
              <img id="bigIMG" src={cupImage} alt="" />
              <p>Paxform will never share your data with anyone..</p>
              <button onClick={handleclick} className="button">
                Read More &gt;{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="skew_header"> </div>
      </div>
    </div>
  );
};

export default Header;
