import React from "react";
import "./article.css";
import noteIcon from "../../assets/note icon.png";

const Article = () => {
  return (
    <div className="article">
      <div className="skew_article">
        <div className="left_article">
          <h1>Ready to get started?</h1>
          <p>
            You can also contact us to design a custom package for your
            business.automatically match that data no matter which form you are
            filling in. Say goodbye to manually inputting the same data over and
            over again.
          </p>
          <button>Contact Us &gt;</button>
        </div>
        <div className="right_article">
          <div className="right_first">
            <img src={noteIcon} alt="" />
            <h1>Always know what you pay</h1>
            <p>
              Experience a new level of convenience by using your stored
              signatures to electronically sign your documents.
            </p>
            <button>Learn more &gt;</button>
          </div>
          <div className="right_second">
            <img src={noteIcon} alt="" />
            <h1>Start your integration</h1>
            <p>
              Experience a new level of convenience by using your stored
              signatures to electronically sign your documents.
            </p>
            <button>Learn more &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
