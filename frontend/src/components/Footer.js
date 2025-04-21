import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]); // Dependency on location ensures it runs whenever the route changes

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2>Let’s Build Something Great Together</h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-end justify-content-start mt-lg-0 mt-5">
            <div className="quick-links">
              <ul>
                <li>
                  <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/our-divisions">Our Divisions</NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us#inquire">Inquiry</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row corporate-office pb-5">
          <h6>Corporate Office</h6>
          <div className="col-lg-3 mt-lg-0 mt-4">
            <NavLink
              to="https://maps.app.goo.gl/85RC6CoSMz19U3an8"
              target="_blank"
            >
              60 CD Shlok, Government Industrial Estate, Charkop, Kandivali
              West, Mumbai 400 067.
            </NavLink>
          </div>

          <div className="col-lg-3 px-lg-4 px-auto mt-lg-0 mt-4">
            <NavLink to="tel:+91-22-28603516" className="m-0">
              +91-22-28603516
            </NavLink>
            <NavLink to="tel:+91-22-28603514">+91-22-28603514</NavLink>
            <NavLink to="mailto:contact@natroyalgroup.com" className="mt-2">
              contact@natroyalgroup.com
            </NavLink>
          </div>

          <div className="col-lg-6 mt-lg-0 mt-4">
            <p>
              Natroyal Group is India's leading manufacturer of Luxury Vinyl
              Plank & Tile, PVC vinyl flooring, coated fabrics, and seating
              components.
            </p>
          </div>
        </div>

        <div className="row copyright-row align-items-center">
          <div className="col-lg-6">
            <ul className="social-media">
              <li>
                <NavLink
                  to="https://www.facebook.com/NatroyalGroup/"
                  target="_blank"
                >
                  <i class="fa-brands fa-facebook-f fb-logo"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.instagram.com/natroyalgroup/?hl=en">
                  <i class="fa-brands fa-instagram instagram-logo"></i>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://www.linkedin.com/company/natroyal-group"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin-in linkedin-logo"></i>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://www.youtube.com/@NatroyalGroup"
                  target="_blank"
                >
                  <i class="fa-brands fa-youtube youtube-logo"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="https://x.com/NatroyalGroup" target="_blank">
                  <i class="fa-brands fa-x-twitter"></i>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-end justify-content-start">
            <p className="paragraph">
              © 2025 Natroyal Group | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
