import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const AboutCoated = () => {
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
                <NavLink className="nav-link active" to="/about-coated">
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

      <section className="about-coated-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="title new-title">
                <span className="yellow-title"> The Art of</span> Royal Touch
                Leatherette
              </h2>
            </div>

            <div className="col-lg-7 offset-lg-1 mt-lg-0 mt-5">
              <p className="paragraph gray-para">
                Founded In 1954, Natroyal Industries Pvt. Ltd., Formerly known
                as "National Leathercloth Mfg. Co. / Vinyroyal Plasticoates Pvt.
                Ltd.", is a leading manufacturer of Premium Leatherette
                Solutions. With a strong emphasis on Innovation and
                Sustainability, We specialize in producing Durable, Eco-friendly
                Materials that closely Replicate the Look and Feel of Real
                Leather.
              </p>
              <p className="paragraph gray-para">
                Our state-of-the-art production facility, located near Vadodara,
                Gujarat, offers specialized leatherette solutions for OEMs and
                Tier-1 companies. Our product range includes cut and sewn or
                vacuum-formed leatherette seat covers, along with custom
                soft-feel leatherette interior trims designed to enhance the
                appeal and premium quality required in high-end automotive
                vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="key-milestones-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h2 className="title new-title">
                {" "}
                <span className="yellow-title">Key</span> Milestones
              </h2>

              <div className="milestones-content">
                <ul>
                  <li className="paragraph gray-para">
                    First company in India to develop transfer coating
                    technology in 1978.
                  </li>
                  <li className="paragraph gray-para mt-2">
                    First company to start a transfer coating line in India
                  </li>
                  <li className="paragraph gray-para mt-2">
                    First company to develop an award-winning heat management
                    leathercloth product
                  </li>
                  <li className="paragraph gray-para mt-2">
                    First coated fabric company to have backward integration
                    with knitting machines
                  </li>

                  <li className="paragraph gray-para mt-2">
                    First company to have five roll calendar and four roll
                    calendar machine for vinyl flooring
                  </li>
                  <li className="paragraph gray-para mt-2">
                    First company to develop international standards transport
                    flooring in India
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row milestones-row">
                <div className="col-lg-6">
                  <div className="counter-div right-border">
                    <img
                      src="/images/icons/testament.png"
                      alt="icon"
                      width="80px"
                      height="80px"
                    />

                    <h2>60 +</h2>

                    <h6>Year of Group Legacy</h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="counter-div left-border">
                    <img
                      src="/images/icons/costumer (1).png"
                      alt="icon"
                      width="80px"
                      height="80px"
                    />
                    <h2>100 +</h2>

                    <h6>Global Clients</h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="counter-div">
                    <img
                      src="/images/icons/settings.png"
                      alt="icon"
                      width="80px"
                      height="80px"
                    />
                    <h2>120,000</h2>

                    <h6>sq. ft of Manufacturing Facility</h6>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="counter-div">
                    <img
                      src="/images/icons/self-development.png"
                      alt="icon"
                      width="80px"
                      height="80px"
                    />
                    <h2>500 +</h2>

                    <h6>Skilled Employees</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-gallery-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-lg-0 mt-4">
              <img
                src="/images/coated-fabrics/leather_page-0001 1 (1).png"
                alt="laboratory-img"
                className="w-100"
              />
            </div>
            <div className="col-lg-4 mt-lg-0 mt-3">
              <img
                src="/images/coated-fabrics/leather_page-0002 1.png"
                alt="laboratory-img"
                className="w-100"
              />
            </div>
            <div className="col-lg-4 mt-lg-0 mt-3">
              <img
                src="/images/coated-fabrics/leather_page-0004 2.png"
                alt="laboratory-img"
                className="w-100"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-2 mt-lg-5 mt-3">
              <img
                src="/images/coated-fabrics/leather_page-0003 1.png"
                alt="laboratory-img"
                className="w-100"
              />
            </div>
            <div className="col-lg-4 mt-lg-5 mt-3">
              <img
                src="/images/coated-fabrics/leather_page-0005 1.png"
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

export default AboutCoated;
