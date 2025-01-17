import React from "react";
import "../Scss/footer.scss";
import { Container } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-contents">
          <div className="footer-logo">
            <h1>OnlineStore</h1>
          </div>
          <div className="footer-links">
            <p>Quick Links</p>
            <div className="Quick-links">
              <a href="/">Product</a>
              <a href="terms">How does it work? </a>
              <a href="mailto:someone@example.com">Support</a>
              <a href="mailto:someone@example.com">Report an issue</a>
              <a href="mailto:someone@example.com">Wishlist</a>
            </div>
          </div>
          <div className="footer-sites">
            <p>Find us on</p>
            <div className="social-media">
              <a href="#" target="_blank">
                <FacebookIcon />
              </a>
              <a href="#" target="_blank">
                <InstagramIcon />
              </a>
              <a href="#" target="_blank">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="copyright-container">
          <div className="copyright-items">
            <div className="footer-copyright-l">
              Copyright @2023 Onlinestore
            </div>
            <div className="footer-copyright-r">
              <a href="/terms">
                <p>Terms of Use</p>
              </a>
              <a href="/terms">
                <p>Privacy Policy</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
