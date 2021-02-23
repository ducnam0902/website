import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubcribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline"> Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About US</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Services</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Services</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About US</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Services</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Services</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
          <div className="social-media-wrap">
              <div className="footer-logo">
                <Link to="/" className="social-logo">
                    TRVL <i className='fab fa-typo3'/>
                </Link>
              </div>
            <small className="website-rights"> TRVL 2020</small>
            <div className="social-icons">
                <Link to="/" className="social-icon-link facebook" target="_blank" aria-label='Facebook'>
                    <i className="fab fa-facebook-f"/>
                </Link>
                <Link to="/" className="social-icon-link instagram" target="_blank" aria-label='Instagram'>
                    <i className="fab fa-instagram"/>
                </Link>
                <Link to="/" className="social-icon-link youtube" target="_blank" aria-label='Youtube'>
                    <i className="fab fa-youtube"/>
                </Link>
                <Link to="/" className="social-icon-link twitter" target="_blank" aria-label='Twitter'>
                    <i className="fab fa-twitter"/>
                </Link>
                <Link to="/" className="social-icon-link linkedin" target="_blank" aria-label='Linkedin'>
                    <i className="fab fa-linkedin"/>
                </Link>
            </div>
          </div>

      </section>
    </div>
  );
}

export default Footer;
