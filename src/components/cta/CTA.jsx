import React from "react";
import "./cta.css";
import WebFont from "webfontloader";
import { useNavigate } from "react-router-dom";
import smilyImage from "../../assets/smiliy.png";
import cupImage from "../../assets/copy and tea.png";
import Guy from "../../assets/guy.png";
import Group from "../../assets/group.png";
const CTA = () => {
  const navigate = useNavigate();

  function handleclick() {
    navigate("/ResourcesDetails");
  }
  return (
    <div className="cta">
      <div className="skewCTA">
        <div className="cta_heading">
          <div className="cta__heading-content">
            <div className="cta__heading">
              <h1>Business Insight and Industry Updates</h1>
            </div>
            <div className="cta__button">
              <button id="all">All </button>
              <button>Insight</button>
              <button>Updates</button>
            </div>
          </div>
        </div>
        <div className="cta_updatesAndInsight">
          <div>
            <img src={Guy} alt="" />
            <p id="update">insight</p>
            <h1>First Heading</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
            <button onClick={handleclick}>Read More &gt; </button>
          </div>
          <div>
            <img src={cupImage} alt="" />
            <p id="insight">insight</p>
            <h1>Second Heading</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
            <button onClick={handleclick}>Read More &gt; </button>
          </div>
          <div>
            <img src={smilyImage} alt="" />
            <p id="insight">insight</p>
            <h1>Third Heading</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
            <button onClick={handleclick}>Read More &gt; </button>
          </div>
          <div>
            <img src={Group} alt="" />
            <p id="update">insight</p>
            <h1>Fourth Heading</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
            <button onClick={handleclick}>Read More &gt; </button>
          </div>
          <div>
            <img src={smilyImage} alt="" />
            <p id="insight">insight</p>
            <h1>Work Together</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
            <button onClick={handleclick}>Read More &gt; </button>
          </div>
          <div>
            <img src={Group} alt="" />
            <p id="update">insight</p>
            <h1>First Heading</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
            <button onClick={handleclick}>Read More &gt; </button>
          </div>
          <div>
            <img src={Guy} alt="" />
            <p id="insight">insight</p>
            <h1>First Heading</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
            <button onClick={handleclick}>Read More &gt; </button>
          </div>
          <div>
            <img src={cupImage} alt="" />
            <p id="update">insight</p>
            <h1>First Heading</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
            <button onClick={handleclick}>Read More &gt; </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
