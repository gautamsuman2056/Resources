import React from "react";
import "./blog.css";
import smilyImage from "../../assets/smiliy.png";
import cupImage from "../../assets/copy and tea.png";
import Group from "../../assets/group.png";
import Guy from "../../assets/guy.png";

const Blog = () => {
  return (
    <div className="blog">
      <div className="contentBlog">
        <div className="blog_left">
          <div>
            <p>Blog</p>
          </div>
          <div className="blog__heading-content">
            <div className="blog__heading">
              <h1>Latest Blog’s from Paxform.</h1>
            </div>
            <div className="blog_button">
              <button>See all blog &gt; </button>
            </div>
          </div>
        </div>
        <div className="blog_right">
          <div>
            <img src={smilyImage} alt="" />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority...
            </p>
            <button>Read More &gt; </button>
          </div>
          <div>
            <img src={Group} alt="" />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority...
            </p>

            <button>Read More &gt; </button>
          </div>
          <div>
            <img src={Guy} alt="" />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority...
            </p>

            <button>Read More &gt; </button>
          </div>
          <div>
            <img src={cupImage} alt="" />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority...
            </p>

            <button>Read More &gt; </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
