import React from "react";
import LandingLayout from "../components/LandingLayout";
import BannerSlider from "../components/BannerSlider";
import Clients from "../components/Clients";
import ConnectSection from "../components/ConnectSection";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const SeatingComponents = () => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev custom-arrow" onClick={onClick}>
        <img src="/images/icons/Group 5 (1).png" alt="left-arrow" />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next custom-arrow" onClick={onClick}>
        <img src="/images/icons/Group 6 (1).png" alt="right-arrow" />
      </button>
    );
  };

  const bannerSettings = {
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const bannerData = [
    // {
    //   videoUrl: "/videos/1475160_People_Family_3840x2160.mp4",
    //   // poster: "/images/banners/pexels-digitalbuggu-218535.png",
    //   text: "Your Trusted Partner for Innovative and End-to-End Seating Solutions",
    // },
    {
      // videoUrl: "/videos/vecteezy_large-room-in-tropical-style_2018008.mov",
      image: "/images/banners/915ef78d-373e-4a98-a10e-b0d0287e6f98.jpg",
      text: "Your Trusted Partner for Innovative and End-to-End Seating Solutions",
    },

    {
      // videoUrl: "/videos/vecteezy_large-room-in-tropical-style_2018008.mov",
      image: "/images/banners/pexels-ammy-k-106103999-12369543.png",
      text: "Premium Coated Fabrics – Durable, Stylish, and Made to Last!",
    },
    {
      // videoUrl: "/videos/1103522677-preview.mp4",
      image: "/images/banners/pexels-la-son-211137-4004373.png",
      text: " Comfort Meets Innovation – Explore Our Premium Seating Components!",
    },
    {
      // videoUrl: "/videos/1103522677-preview.mp4",
      image: "/images/banners/bigbannernew2.png",
      text: "Where Softness Meets Strength – Premium Knitted Fabrics for Every Need!",
    },
  ];

  return (
    <Layout>
      {/* <section className="landing-banner-section">
        <BannerSlider
          settings={bannerSettings}
          slides={bannerData}
        ></BannerSlider>
      </section> */}

      <section className="landing-banner-section">
        <div className="slide-container">
          <div className="poster-container">
            <video
              src="/videos/WhatsApp Video 2025-03-28 at 16.22.51.mp4"
              alt="Poster"
              className="poster-image"
              loop
              muted
              autoPlay
            />

            {/* Common Banner Content - Placed inside the same container */}
            <div className="banner-text">
              <h1 className="banner-title">
                {" "}
                Your Trusted Partner for Innovative and End-to-End Seating
                Solutions
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
                <a className="nav-link" href="#">
                  Railway/Metro
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  Bus
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  Cinema
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="seating-components-section">
        <div className="container">
          <div className="row align-items-start justify-content-center">
            <div className="col-lg-6">
              <img
                src="/images/seating/31177.png"
                alt="seating-img"
                className="w-100"
              />
            </div>
            <div className="col-lg-6">
              <div className="seating-content">
                <h2 className="title new-title">
                  <span className="yellow-title"> Seats - </span> Design to
                  Delivery.
                </h2>

                <p className="paragraph gray-para">
                  Our seating components division is a leading manufacturer of
                  components for metro, bus, car, cinema, and auditorium seats.
                  The product line includes the fabrication of metal frames (MS
                  and SS), polyurethane (PU) foam, and upholstery/trim covers.
                  We also manufacture and supply fully assembled seats.
                </p>

                <p className="paragraph gray-para">
                  Our seating components division provides a one-stop solution
                  for customers, from design inception and prototype samples to
                  product development and commercial supplies. Our facilities
                  include a design centre, tool room, weld shop, and advanced
                  technology such as multi-axis bending machines, cutting and
                  sewing machines, and PU machines. We comply with the latest EN
                  standards for components (Frames, Trims, and PU). The plant is
                  located in Halol, near Vadodara, in the state of Gujarat,
                  India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="seating-application-section">
        <div className="container">
          <div className="row">
            <h2 className="title new-title">
              <span className="yellow-title"> Applications </span>
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-4 mt-lg-0 mt-5">
              <NavLink to="/seating-components/railway-metro">
                <img
                  src="/images/seating/inside-train-wagon-with-blurred-background.png"
                  alt="seating-application"
                />

                <h4>Railway/Metro</h4>

                <p className="paragraph gray-para mt-4">
                  We specialize in manufacturing and supplying for the railways
                  and metro seat segment. Offering complete solutions from
                  design and proto sample development to testing, tooling, and
                  production. Our end-to-end capabilities ensure precision,
                  quality, and reliability at every stage.
                </p>
              </NavLink>
            </div>

            <div className="col-lg-4 mt-lg-0 mt-5">
              <NavLink to="/seating-components/cinema">
                <img
                  src="/images/seating/cinema-seats-still-life.png"
                  alt="seating-application"
                />

                <h4>Cinema</h4>

                <p className="paragraph gray-para mt-4">
                  We specialize in manufacturing and supplying for the assembled
                  seat segment, catering to cinema and auditorium seating. From
                  design and prototyping to testing, tooling, and production, we
                  deliver end-to-end solutions. Our high-quality materials and
                  precision engineering ensure durability and comfort. Trusted
                  by industry leaders for seamless integration and on-time
                  delivery.
                </p>
              </NavLink>
            </div>

            <div className="col-lg-4 mt-lg-0 mt-5">
              <NavLink to="/seating-components/bus">
                <img
                  src="/images/seating/Bus.jpg"
                  className="w-100"
                  alt="seating-application"
                />

                <h4>Bus</h4>

                <p className="paragraph gray-para mt-4">
                  We manufacture and supply seating solutions for the commercial
                  vehicle and bus segment. Delivering complete solutions from
                  design to production. Our expertise ensures superior comfort,
                  durability, and performance.
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <Clients />

      <ConnectSection />
    </Layout>
  );
};

export default SeatingComponents;
