import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const Laboratory = () => {
  return (
    <Layout>
      <section className="landing-banner-section">
        <div className="slide-container">
          <div className="poster-container">
            <img
              src="/images/coated-fabrics/Royal-Touch-Coated-Fabrics.jpg"
              alt="Poster"
              className="poster-image"
            />

            {/* Common Banner Content - Placed inside the same container */}
            <div className="banner-text">
              <h1 className="banner-title">
                {" "}
                We are India’s leading manufacturers & exporters of Specifically
                Engineered Coated Fabrics
              </h1>
              <div className="d-flex">
                <NavLink to="/contact-us" className="custom-button">
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="applications-section">
        <div className="container">
          <div className="row">
            <ul className="application-tabs d-flex align-items-center justify-content-center">
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/about-coated">
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/laboratory-tested">
                  Laboratory Tested
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-knit-section">
        <div className="container">
          <div className="row align-items-start justify-content-center">
            <div className="col-lg-10 mt-lg-0 mt-4">
              {/* <h6 className="subtitle">
                Knit Fabric – Where Flexibility Meets Comfort<span></span>
              </h6> */}
              <h2 className="title new-title">
                <span className="yellow-title"> Laboratory Tested</span> for
                Consistency & Durability
              </h2>
              <p className="paragraph">
                Natroyal Industries is committed to supply best-in-class
                leatherette materials that meet OEM specifications. With decades
                of experience and an unwavering commitment to excellence, we
                have built a trusted reputation for delivering superior
                leatherette solutions that combine style, durability and
                environmental responsibility, establishing ourselves as a leader
                in the Indian leatherette industry.
              </p>
              <p className="paragraph">
                As a trusted, long-standing leader and OEM- approved supplier of
                high-quality leatherette (coated fabrics), we serve a wide range
                of OEMs both in India and international markets. Our
                automotive-grade leatherette and coated fabrics are known for
                their exceptional durability and unique properties, ensuring
                long-lasting performance and superior quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="laboratory-gallery-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-lg-0 mt-4">
              <img
                src="/images/laboratory/img7 1.png"
                alt="laboratory-img"
                className="w-100"
              />
            </div>
            <div className="col-lg-4 mt-lg-0 mt-3">
              <img
                src="/images/laboratory/img9 1.png"
                alt="laboratory-img"
                className="w-100"
              />
            </div>
            <div className="col-lg-4 mt-lg-0 mt-3">
              <img
                src="/images/laboratory/img8 1.png"
                alt="laboratory-img"
                className="w-100"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 mt-lg-5 mt-3">
              <img
                src="/images/laboratory/img10 1.png"
                alt="laboratory-img"
                className="w-100"
              />
            </div>
            <div className="col-lg-4 mt-lg-5 mt-3">
              <img
                src="/images/laboratory/img12 1.png"
                alt="laboratory-img"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Laboratory;
