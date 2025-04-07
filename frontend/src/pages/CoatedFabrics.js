import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Clients from "../components/Clients";
import ConnectSection from "../components/ConnectSection";

const CoatedFabrics = () => {
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
              {/* <div className="d-flex">
                <NavLink to="/contact-us" className="custom-button">
                  Get Started
                </NavLink>
              </div> */}
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

      <section className="application-section">
        <div className="container">
          <h2 className="title new-title text-center">
            <span className="yellow-title"> We manufacture,</span> supply and
            export
          </h2>
          <div className="row applications-row mt-5">
            <div className="col-lg-6 col-12">
              <NavLink to="/coated-fabrics/residential-contract-furnishing">
                <div className="single-application">
                  <img
                    src="/images/coated-fabrics/furnishing-1.jpg"
                    alt="application"
                  />

                  <div className="application-content">
                    <h5>Residential & Contract Furnishing</h5>

                    {/* <p className="application-para">
                      Natroyal has been a pioneer in the business of supplying
                      performance-based coated fabrics for the home, office &
                      contract furnishing.
                    </p> */}
                  </div>

                  <div className="application-overlay">
                    <div className="application-border">
                      <NavLink>View More</NavLink>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-lg-6">
              <NavLink to="/coated-fabrics/automotive">
                <div className="single-application">
                  <img src="/images/coated-fabrics/Car Seats 2.jpg" />{" "}
                  <div className="application-content">
                    <h5>Automotive</h5>
                    {/* <p className="application-para">
                      Natroyal leads in performance-coated fabrics for cars,
                      buses, and motorcycles. We are India's first to develop
                      phase-change material for heat management.
                    </p> */}
                  </div>
                  <div className="application-overlay">
                    <div className="application-border">
                      <NavLink>View More</NavLink>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-lg-6">
              <NavLink to="/coated-fabrics/two-wheelers">
                <div className="single-application">
                  <img src="/images/coated-fabrics/bike.jpg" />{" "}
                  <div className="application-content">
                    <h5>Two Wheelers</h5>
                    {/* <p className="application-para">
                      Natroyal offers innovative two-wheeler seat covers,
                      including heat-management and stylish options like Seat
                      Tops, Bamboo Tops, and Emboss Tops in various prints.
                    </p> */}
                  </div>
                  <div className="application-overlay">
                    <div className="application-border">
                      <NavLink>View More</NavLink>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-lg-6">
              <NavLink to="/coated-fabrics/marine-recreational-vehicles">
                <div className="single-application">
                  <img src="/images/coated-fabrics/marine-1.jpg" />{" "}
                  <div className="application-content">
                    <h5>Marine & Recreational Vehicles</h5>
                    {/* <p className="application-para">
                      Our coated fabrics for the marine industry have been
                      designed based on extensive research, for them to easily
                      endure the harsh conditions present on both commercial as
                      well as recreational vessels.
                    </p> */}
                  </div>
                  <div className="application-overlay">
                    <div className="application-border">
                      <NavLink>View More</NavLink>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="col-lg-6">
              <NavLink to="/coated-fabrics/healthcare">
                <div className="single-application">
                  <img src="/images/coated-fabrics/Healthcare 2.jpg" />{" "}
                  <div className="application-content">
                    <h5>Healthcare</h5>
                    {/* <p className="application-para">
                      We pioneered SITRA, Intertek, and Valtris UK-certified
                      healthcare products in India, including washable aprons,
                      curtains, and pillow covers, reducing medical waste.
                    </p> */}
                  </div>
                  <div className="application-overlay">
                    <div className="application-border">
                      <NavLink>View More</NavLink>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-lg-6">
              <NavLink to="/coated-fabrics/footwear">
                <div className="single-application">
                  <img src="/images/coated-fabrics/Footwear-Coated-Fabrics.jpg" />{" "}
                  <div className="application-content">
                    <h5>Footwear</h5>
                    {/* <p className="application-para">
                      With a special range of coated fabrics that have been
                      meticulously designed to fulfill the distinct requirements
                      of the footwear industry, Natroyal has emerged as a
                      leading brand in the market for all our footwear products.
                    </p> */}
                  </div>
                  <div className="application-overlay">
                    <div className="application-border">
                      <NavLink>View More</NavLink>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-lg-6">
              <NavLink to="/coated-fabrics/fashion">
                <div className="single-application">
                  <img src="/images/coated-fabrics/Fashion-Coated-Fabrics.gif" />{" "}
                  <div className="application-content">
                    <h5>Fashion – Apparel, Belts & Bags</h5>

                    {/* <p className="application-para">
                      Coated fabrics possess a variety of functional qualities,
                      making them the ideal material for fashion products.
                      Natroyal provides best-in-class coated fabrics for a wide
                      range of fashion accessories including apparel, belts &
                      bags.
                    </p> */}
                  </div>
                  <div className="application-overlay">
                    <div className="application-border">
                      <NavLink>View More</NavLink>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-lg-6">
              <NavLink to="#">
                <div className="single-application">
                  <img src="/images/coated-fabrics/Tractor.jpg" />{" "}
                  <div className="application-content">
                    <h5>Tractor</h5>
                    {/* <p className="application-para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p> */}
                  </div>
                  <div className="application-overlay">
                    <div className="application-border">
                      <NavLink>View More</NavLink>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-lg-6">
              <NavLink to="#">
                <div className="single-application">
                  <img src="/images/coated-fabrics/Truck.jpg" />{" "}
                  <div className="application-content">
                    <h5>Truck</h5>
                    {/* <p className="application-para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p> */}
                  </div>
                  <div className="application-overlay">
                    <div className="application-border">
                      <NavLink>View More</NavLink>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="title new-title">
                {" "}
                <span className="yellow-title"> Features of</span> Automotive
                Leatherette/Coated Fabrics
              </h2>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 3Logo 1.png" alt="icons" />
                <h6>Heavy Metals Free</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 8Logo.png" alt="icons" />
                <h6>Anti-Fogging</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 11Logo.png" alt="icons" />
                <h6>Anti-Microbial</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 11Logo.png" alt="icons" />
                <h6>Cold Crack Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 17Logo.png" alt="icons" />
                <h6>Flame Retardant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 5Logo.png" alt="icons" />
                <h6>Abrasion Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 7Logo.png" alt="icons" />
                <h6>High Flexing</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 12Logo.png" alt="icons" />
                <h6>Salt Water Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 15Logo.png" alt="icons" />
                <h6>UV Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 16Logo.png" alt="icons" />
                <h6>Weather Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 4Logo.png" alt="icons" />
                <h6>Mildew Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 6Logo.png" alt="icons" />
                <h6>Alcohol Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 10Logo.png" alt="icons" />
                <h6>Pink Stain Resistant</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="features-div">
                <img src="/images/icons/Asset 13Logo.png" alt="icons" />
                <h6>Color Fastness</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="business-section">
        <div className="container">
          <h2 className="title new-title">
            {" "}
            <span className="yellow-title"> We are a </span>export-ready
            business
          </h2>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-4">
              <div className="business-points">
                <img
                  src="/images/icons/Group 869 1.png"
                  alt="icons"
                  className="mb-3"
                />
                <h5>Star rated export</h5>{" "}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-4">
              <div className="business-points">
                <img
                  src="/images/icons/Group 868 1.png"
                  alt="icons"
                  className="mb-3"
                />
                <h5>3-4 Weeks time</h5>{" "}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-4">
              <div className="business-points">
                <img
                  src="/images/icons/Group 867 1.png"
                  alt="icons"
                  className="mb-3"
                />
                <h5>60+ Years of legacy</h5>{" "}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-4">
              <div className="business-points">
                <img
                  src="/images/icons/Group 866 1.png"
                  alt="icons"
                  className="mb-3"
                />
                <h5>International quality</h5>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Clients />

      <ConnectSection />
    </Layout>
  );
};

export default CoatedFabrics;
