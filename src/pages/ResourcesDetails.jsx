import React from "react";
import { Navigation } from "../Nav/Navigation";
import "./resourcesDetails.css";
import { dentalImage, logo, doctors, UsaFlag } from "./importResources";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import { Footer } from "../containers";

const ResourcesDetails = () => {
  return (
    <div className="resourcesDetailsPage">
      <div className="navbar_component">
        {" "}
        {/* <Navbar /> */}
        <Navigation />
      </div>

      <div className="resourcesDetailsBody">
        <div className="bodyLeft">
          <div>
            <h1 id="share">SHARE</h1>
            <div className="icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-discord"></i>
            </div>
          </div>
          <div>
            <h1>IN THIS CASE STUDY</h1>

            <div className="case_study">
              <p id="paragraph"> Changing the process</p>
              <p> Growing quickly</p>
              <p> Needing a solution</p>
              <p> simple data form</p>
            </div>
          </div>
        </div>

        <div className="bodyRight">
          <div bodyRightTop>
            <div className="body_title">
              <p> December 25, 2021 </p>
              <h1>
                When an dental clinic needs to streamline its patient data
                process
              </h1>
              <img src={dentalImage} alt="dental image" />
            </div>
          </div>
          <div className="bodyRight_Content">
            <p id="paragh">
              The printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy the 1500s
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus .
            </p>

            <img src={doctors} alt="image of the doctor" />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tristique, lorem in accumsan molestie, tellus quam lobortis arcu, in
            lacinia metus magna vitae nunc. Quisque scelerisque turpis dolor, id
            auctor nulla condimentum id. Maecenas luctus cursus tortor, in
            vestibulum nisl congue sit amet. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Aenean ornare
            magna at urna porttitor, eget dapibus quam convallis. Nam tincidunt
            pellentesque pharetra. Proin tincidunt velit non mauris semper
            porttitor. Nam nec sollicitudin leo. Curabitur tempor sed quam eget
            hendrerit. In consequat dolor at dui pharetra bibendum. Etiam
            ullamcorper feugiat mauris id pulvinar. Donec maximus lectus mauris,
            sit amet placerat mauris gravida sit amet. Nam elementum turpis a mi
            tincidunt, nec accumsan ipsum bibendum. Phasellus malesuada viverra
            quam eu laoreet. Curabitur non aliquet odio, et malesuada lorem.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesDetails;
