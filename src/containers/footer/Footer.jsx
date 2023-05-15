import React from "react";
import "./footer.css";
import "./import";
import logo from "./../../assets/logo.png";
import UsaFlag from "./../../assets/USA flag.png";

import {
  Linkdin,
  Youtube,
  Facebook,
  Discord,
  Twitter,
  Instagram,
  Wechat,
  Whatsapp,
} from "./import";

const Footer = () => {
  return (
    <div className="footer">
      <div className="skew_footer">
        <div className="footer_top">
          <div className="footer_heading">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>

          <div className="social_icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-discord"></i>
            <i class="fa-brands fa-weixin"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-solid fa-share-nodes"></i>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_first">
            <div className="paxform">
              <h1>PAXFORM</h1>
              <a href="/Security">
                <p>Security</p>
              </a>
              <a href="/Pricing">
                <p>Pricing</p>
              </a>
              <a href="/Templates">
                <p>Templates</p>
              </a>
              <a href="/Integreatons">
                <p>Integrations</p>
              </a>
              <a href="/Additional Question">
                <p>Additional Question</p>
              </a>
              <a href="/Custom Statuses">
                <p>Custom Statuses</p>
              </a>
            </div>
            <div className="business_features">
              <h1>BUSINESS FEATURES</h1>
              <a href="/Form Designer">
                <p>Form Designer</p>
              </a>
              <a href="/Disclosures">
                <p>Disclosures</p>
              </a>
              <a href="/Chat">
                <p>chat</p>
              </a>
              <a href="/Electronic Signatures">
                <p>Electronic Signatures</p>
              </a>
              <a href="/Additional Question">
                <p>Additional Question</p>
              </a>
              <a href="/Custom Statuses">
                <p>Custom Statuses</p>
              </a>
            </div>
            <div className="consumer_features">
              <h1>BUSINESS FEATURES</h1>
              <a href="/Form Designer">
                <p>Form Designer</p>
              </a>
              <a href="/Disclosures">
                <p>Disclosures</p>
              </a>
              <a href="/Chat">
                <p>chat</p>
              </a>
              <a href="/Electronic Signatures">
                <p>Electronic Signatures</p>
              </a>
              <a href="/Additional Question">
                <p>Additional Question</p>
              </a>
              <a href="/Custom Statuses">
                <p>Custom Statuses</p>
              </a>
            </div>
          </div>

          <div className="footer_second">
            <h1>USE CASES</h1>
            <a href="/Hospitality">
              <p>Hospitality</p>
            </a>
            <a href="/Educaition">
              <p>Education</p>
            </a>
            <a href="/Transportation">
              <p>Transportation</p>
            </a>
            <a href="/Real EState">
              <p>Real Estate</p>
            </a>
            <a href="/Government">
              <p>Government</p>
            </a>
            <a href="/Construction">
              <p>Construction</p>
            </a>
            <a href="/Health and aged care">
              <p>Health and aged care</p>
            </a>
            <a href="/Retail">
              <p>Retail</p>
            </a>
          </div>
          <div className="footer_third">
            <div className="Resources">
              <h1>Resources</h1>
              <a href="/Blog">
                <p>Blog</p>
              </a>
              <a href="/FAQs">
                <p>FAQs</p>
              </a>
              <a href="/Newsletter">
                <p>Newsletter</p>
              </a>
              <a href="/Help Center">
                <p>Help Center</p>
              </a>
            </div>
            <div className="Security">
              <h1>Security</h1>
              <a href="/encryption">
                <p>Encryption</p>
              </a>
              <a href="/Biometric">
                <p>Biometric</p>
              </a>
              <a href="/File Storage">
                <p>File Storage</p>
              </a>
              <a href="/Data Storage">
                <p>Data Storage</p>
              </a>
              <a href="/Password">
                <p>Password</p>
              </a>
              <a href="/Auto Timeout">
                <p>Auto Timeout</p>
              </a>
            </div>
            <div className="Forms">
              <h1>Forms</h1>
              <a href="/Contact Forms">
                <p>Contact forms</p>
              </a>
              <a href="/Feedback Form">
                <p>Feedback Form</p>
              </a>
              <a href="/Security Form">
                <p>Security Form</p>
              </a>
              <a href="/Copyright Form">
                <p>Copyrigth Form</p>
              </a>
              <a href="/GDPR Form">
                <p>GDPR Form</p>
              </a>
            </div>
          </div>
          <div className="footer_fourth">
            <div className="Company">
              <h1>COMPANY</h1>
              <a href="/About Us">
                <p>About Us</p>
              </a>
              <a href="/Request a Demo">
                <p>Request a Demo</p>
              </a>
              <a href="/Partner Program">
                <p>Partner Program</p>
              </a>
              <a href="/Careers">
                <p>Careers</p>
              </a>
              <a href="/Newsroom">
                <p>Newsroom</p>
              </a>
              <a href="/Brand Kit">
                <p>Brand Kit</p>
              </a>
            </div>
            <div className="Legal">
              <h1>Legal</h1>
              <a href="/Data Security Policy">
                <p>Data Security Policy</p>
              </a>
              <a href="/Website Terms of Use ">
                <p>Website Terms of Use</p>
              </a>
              <a href="/Website privacy policy ">
                <p>Website privacy policy</p>
              </a>
              <a href="/Website Cookie Policy">
                <p>Website Cookie Policy</p>
              </a>
            </div>
          </div>
          <div className="RP__footer-below">
            <div className="footer_line"></div>

            <div className="footer_bottom-content">
              <div className="RP__footer-copyright">
                <p>
                  @ Copyright {new Date().getFullYear()} Paxform.All right
                  reserved.
                </p>
              </div>
              <div className="RP__footer-below-links">
                <a href="/privacy">
                  <div>
                    <p>Privacy Policy</p>
                  </div>
                </a>
                <a href="/terms">
                  <div>
                    {" "}
                    <p>Term of Service</p>
                  </div>
                </a>
              </div>
              <div className="usContainer">
                <div className="imageUSA">
                  <img src={UsaFlag} alt="USA Flag" />
                </div>
                <p>
                  US English <i class="fa-solid fa-angle-down"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
