import React from "react";
import OfferSlider from "../components/OfferSlider";
import { NavLink } from "react-router-dom";

const OffersSection = () => {
  const OfferingsPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev custom-arrow" onClick={onClick}>
        <img src="/images/icons/Group 905.png" alt="left-arrow" />
      </button>
    );
  };

  const OfferingsNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next custom-arrow" onClick={onClick}>
        <img src="/images/icons/Group 906.png" alt="right-arrow" />
      </button>
    );
  };

  const luxeraData = [
    {
      image: "/images/planks/lux/Basswood 200 004.JPG",
      name: "Basswood",
      qr: "/images/planks/lux/Basswood 200 004.png",
      type: "200 004",
    },
    {
      image: "/images/planks/lux/Beech 200 005.JPG",
      name: "Beech",
      qr: "/images/planks/lux/Beech 200 005.png",
      type: "200 005",
    },
    {
      image: "/images/planks/lux/Carrara 200 011.JPG",
      name: "Carrara",
      qr: "/images/planks/lux/Carrara 200 011.png",
      type: "200 011",
    },
    {
      image: "/images/planks/lux/Fir 200 002.JPG",
      name: "Fir",
      qr: "/images/planks/lux/Fir 200 002.png",
      type: "200 002",
    },
    {
      image: "/images/planks/lux/Hemlock 200 006.JPG",
      name: "Hemlock",
      qr: "/images/planks/lux/Hemlock 200 006.png",
      type: "200 006",
    },
    {
      image: "/images/planks/lux/Jasper 200 014.JPG",
      name: "Jasper",
      qr: "/images/planks/lux/Jasper 200 014.png",
      type: "200 014",
    },
    {
      image: "/images/planks/lux/Larch 200 003.JPG",
      name: "Larch",
      qr: "/images/planks/lux/Larch 200 003.png",
      type: "200 003",
    },
    {
      image: "/images/planks/lux/Mahogany 200 009.JPG",
      name: "Mahogany",
      qr: "/images/planks/lux/Mahogany 200 009.png",
      type: "200 009",
    },
    {
      image: "/images/planks/lux/Onyx 200 013.JPG",
      name: "Onyx",
      qr: "/images/planks/lux/Onyx 200 013.png",
      type: "200 013",
    },
    {
      image: "/images/planks/lux/Sandalwood 200 008.JPG",
      name: "Sandalwood",
      qr: "/images/planks/lux/Sandalwood 200 008.png",
      type: "200 008",
    },
    {
      image: "/images/planks/lux/Shale 200 012.JPG",
      name: "Shale",
      qr: "/images/planks/lux/Shale 200 012.png",
      type: "200 012",
    },
    {
      image: "/images/planks/lux/Verawood 200 007.JPG",
      name: "Verawood",
      qr: "/images/planks/lux/Verawood 200 007.png",
      type: "200 007",
    },
    {
      image: "/images/planks/lux/Walnut 200 010.JPG",
      name: "Walnut",
      qr: "/images/planks/lux/Walnut 200 010.png",
      type: "200 010",
    },
    {
      image: "/images/planks/lux/White Oak 200 001.JPG",
      name: "White Oak",
      qr: "/images/planks/lux/White Oak 200 001.png",
      type: "200 001",
    },
  ];

  const sortedLuxeraSlides = luxeraData.sort((a, b) => {
    const [prefixA, suffixA] = a.type.split(" ").map(Number);
    const [prefixB, suffixB] = b.type.split(" ").map(Number);

    if (prefixA !== prefixB) {
      return prefixA - prefixB; // Sort by the first part
    }
    return suffixA - suffixB; // Sort by the second part
  });

  const radiantData = [
    {
      image: "/images/planks/rad/Acacia 150 014.JPG",
      name: "Acacia",
      qr: "/images/planks/rad/Acacia 150 014.png",
      type: "150 014",
    },
    {
      image: "/images/planks/rad/Birch 150 005.JPG",
      name: "Birch",
      qr: "/images/planks/rad/Birch 150 005.png",
      type: "150 005",
    },
    {
      image: "/images/planks/rad/Casuarina 150 010.JPG",
      name: "Casuarina",
      qr: "/images/planks/rad/_Casuarina 150 010.png",
      type: "150 010",
    },
    {
      image: "/images/planks/rad/Deodar 150 012.JPG",
      name: "Deodar",
      qr: "/images/planks/rad/Deodar 150 012.png",
      type: "150 012",
    },
    {
      image: "/images/planks/rad/Grey Elm 150 002.JPG",
      name: "Grey Elm",
      qr: "/images/planks/rad/Grey Elm 150 002.png",
      type: "150 002",
    },
    {
      image: "/images/planks/rad/Hickory 150 004.JPG",
      name: "Hickory",
      qr: "/images/planks/rad/Hickory 150 004.png",
      type: "150 004",
    },
    {
      image: "/images/planks/rad/Hopea 150 013.JPG",
      name: "Hopea",
      qr: "/images/planks/rad/Hopea 150 013.png",
      type: "150 013",
    },
    {
      image: "/images/planks/rad/Mulberry 150 008.JPG",
      name: "Mulberry",
      qr: "/images/planks/rad/Mulberry 150 008.png",
      type: "150 008",
    },
    {
      image: "/images/planks/rad/Pine 150 007.JPG",
      name: "Pine",
      qr: "/images/planks/rad/Pine 150 007.png",
      type: "150 007",
    },
    {
      image: "/images/planks/rad/Poplar 150 011.JPG",
      name: "Poplar",
      qr: "/images/planks/rad/_Poplar 150 011.png",
      type: "150 011",
    },
    {
      image: "/images/planks/rad/Sapwood 150 001.JPG",
      name: "Sapwood",
      qr: "/images/planks/rad/Sapwood 150 001.png",
      type: "150 001",
    },
    {
      image: "/images/planks/rad/Siris 150 009.JPG",
      name: "Siris",
      qr: "/images/planks/rad/Siris 150 009.png",
      type: "150 009",
    },
    {
      image: "/images/planks/rad/Spruce 150 006.JPG",
      name: "Spruce",
      qr: "/images/planks/rad/Spruce 150 006.png",
      type: "150 006",
    },
    {
      image: "/images/planks/rad/Tallowwood 150 003.JPG",
      name: "Tallowwood",
      qr: "/images/planks/rad/Tallowwood 150 003.png",
      type: "150 003",
    },
  ];

  const sortedRadiantSlides = radiantData.sort((a, b) => {
    const [prefixA, suffixA] = a.type.split(" ").map(Number);
    const [prefixB, suffixB] = b.type.split(" ").map(Number);

    if (prefixA !== prefixB) {
      return prefixA - prefixB; // Sort by the first part
    }
    return suffixA - suffixB; // Sort by the second part
  });

  const offersSettings = {
    dots: false,
    nextArrow: <OfferingsNextArrow />,
    prevArrow: <OfferingsPrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="what-we-offer-section">
      <div className="container">
        <div className="col-lg-8">
          <h6 className="subtitle gray-subtitle">
            What We Offer <span></span>
          </h6>
          <h2 className="title new-title">
            <span className="yellow-title">Innovative</span> Luxury Vinyl Plank
            & Tile Solutions for Modern Spaces
          </h2>
        </div>

        <div className="row radiant-row ">
          <div className="col-lg-6">
            <h2 className="title new-title">
              <span className="yellow-title">Radiant</span> - 1.5mm
            </h2>
          </div>
          <OfferSlider settings={offersSettings} slides={sortedRadiantSlides} />
        </div>

        <div className="row mt-5 luxera-row">
          <div className="col-lg-6">
            <h2 className="title new-title">
              {" "}
              <span className="yellow-title">Luxura</span>
              {""} - 2mm
            </h2>
          </div>
          <OfferSlider settings={offersSettings} slides={sortedLuxeraSlides} />
        </div>
        <div className="d-flex my-5 justify-content-center">
          <NavLink
            to="/docs/LVT-Brochure.pdf"
            target="_blank"
            className="custom-button"
          >
            Download Brochure
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
