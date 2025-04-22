import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { NavLink, useParams } from "react-router-dom";

const CoatedApplications = () => {
  const applicationData = [
    {
      type: "residential-contract-furnishing",
      title: "Residential & ",
      spanTitle: "Contract Furnishing",
      name: "Residential & Contract Furnishing",
      bannerImg: "/images/coated-fabrics/Banner-6.jpg",
      para: "Our comprehensive range of specialized & customized coated fabrics have been a huge success in modern furniture design",
      applications: [
        {
          image: "/images/applications/coated/home-upholestry.jpg",
          name: "Home Upholstery",
          content:
            "For Home Upholstery various types of textures, finishing, dry feel, stain-resistant products are available. It also includes Tumbling and Pull-up products.",
        },
        {
          image: "/images/applications/coated/Contract Furnishing.jpg",
          name: "Contract Furnishing",
          content:
            "Contract Furnishing is made for both indoor and outdoor furniture with very high strength, high abrasion and stain resistance properties. It also has anti-microbial properties.",
        },
      ],
    },
    {
      type: "Automotive",
      title: "Choosing the Right",
      spanTitle: "Leatherette",
      name: "Automotive",
      bannerImg: "/images/coated-fabrics/banner-2.jpg",
      para: "We offer a diverse range of leatherette / Coated-Fabrics in various colors, textures and feels, each unique in its characteristics. This collection is crafted to meet all possible requirements related to comfort, climate conditions, durability, resilience, texture, touch and color preferences of our esteemed customers.",
      images: [
        {
          img: "/images/applications/coated/automotive_page-0001.jpg",
          imgName: "Passenger Car Applications",
        },
        {
          img: "/images/applications/coated/automotive-img2.jpg",
          imgName: "Public Transport Applications",
        },
      ],
    },
    {
      type: "Two-Wheelers",
      title: "Two",
      spanTitle: "Wheelers",
      name: "Two Wheelers",
      bannerImg: "/images/coated-fabrics/banner-1.jpg",
      para: "We manufacture & supply specialized 2-wheeler seat cover coated fabrics to make every ride joyful",
      images: [{ img: "/images/applications/coated/image 7 (1) 1.png" }],
    },
    {
      type: "Marine-Recreational-Vehicles",
      title: "Marine & ",
      spanTitle: "Recreational Vehicles",
      name: "Marine & Recreational Vehicles",
      bannerVideo: "/images/coated-fabrics/Marine Video.mp4",
      para: "We manufacture & supply specialized coated fabrics that endure the harsh conditions present on commercial & recreational vessels",
      applications: [
        {
          image: "/images/applications/coated/exterior.jpg",
          name: "Exterior",
          content:
            "All of our marine coated fabrics are visually appealing and have been designed to withstand the harsh conditions present outdoors.Our products possess the required vital characteristics like being waterproof, resistant to UV rays, extreme tolerance, anti-microbial and pink staining. Sure to say, they are ideal for use on the exterior of boats.",
        },
        {
          image: "/images/applications/coated/interior.jpg",
          name: "Interior",
          content:
            "Our portfolio of marine interior coated fabrics is one of the best in the business and is ideal for use in upholstery, walls and ceilings of boats. It comprises products that have been uniquely designed based on the latest trends, creating modern & functional spaces in the interior of boats that make for a warm and luxurious setting.",
        },
        {
          image:
            "/images/applications/coated/Recreational-vehicles-coated-fabrics.jpg",
          name: "Recreational Vehicles",
          content:
            "Producing high-performance coated fabrics which provide high levels of comfort and are able to endure harsh climate conditions & heavy traffic areas is one of our areas of expertise.",
        },
      ],
    },
    {
      type: "Healthcare",
      title: "Healthcare",
      name: "Healthcare",
      bannerImg: "/images/coated-fabrics/banner-8.jpg",
      para: "Manufacturing and supplying specialized & customized coated fabrics which meet the demanding requirements of the healthcare industry is our forte",
      applications: [
        {
          image: "/images/applications/coated/radiation-protection.jpg",
          name: "Radiation Protection",
          content:
            "We have been supplying international quality radiation protection metal sheets to leading Indian manufacturers for the creation of X-Ray protection aprons in India for the last many years. All our products pass the regular applicable standards and are even exported to some international buyers.",
        },
        {
          image: "/images/applications/coated/pu-products-for-apron.jpg",
          name: "PU Products for Apron",
          content:
            "With anti-microbial properties, no PVC used, soft feel & availability in a variety of colours, our completely Polyurethane coated products are used in the making of premium quality aprons for health professionals.",
        },
        {
          image:
            "/images/applications/coated/healthcare-upholstry-coated-fabrics.jpg",
          name: "Upholstery",
          content:
            "When it comes to upholstery used in healthcare settings, appropriate selection of textures is critical to limit the accumulation of bacteria, grime & dust. Coated fabrics typically find usage in examination tables, stools, patient & dental seating besides hospital beds. Our specially designed coated fabrics offer unparalleled resistance to staining, abrasion & wear properties.",
        },
        {
          image: "/images/applications/coated/Mattress-Covers.jpg",
          name: "Mattress Covers",
          content:
            "We have specially developed mattress cover material “Meditex” with anti-viral, anti-bacterial and anti-fungal properties. It is also blood/water/oil repellent and has good abrasion and stain resistance. This product is certified by SITRA, Intertek India Ltd. and Valtris UK.",
        },
        {
          image:
            "/images/applications/coated/solution-to-discomfort-of-orthopaedic-plasters.jpg",
          name: "Solution to discomfort of Orthopaedic Plasters",
          content:
            "Orthopaedic surgeries are generally followed by plaster and it is to be kept for at least 2 weeks. Since there is no / very less air circulation between the plaster and the skin, there is sweat formation which is very difficult to clean. This causes discomfort followed by itching and foul smell. Natroyal Group introduces for the first time in India Phase Change Material Fabric which will be the first layer in contact with the skin before the plaster. The phase change material absorbs the body heat which generally results into sweat, thereby reducing sweat formation considerably which reduces bacterial growth and consequent itching.",
        },
      ],
    },
    {
      type: "Footwear",
      title: "Footwear",
      name: "Footwear",
      bannerImg: "/images/coated-fabrics/shoes-banner.jpg",
      para: "With our special range of coated fabrics designed for the footwear industry, we have emerged as an industry-leading brand",
      applications: [
        {
          image: "/images/applications/coated/low-memory-foam-footwear.jpg",
          name: "Low memory foam products",
          content:
            "We have specially developed thermoformable Polymer Foam which provides best comfort. It has 31.3% Plantar Pressure Index Reduction and has a very low return rate.",
          btn: "Learn More",
          btnLink: "/docs/Natfoam-Presentation-1.pdf",
        },
        {
          image: "/images/applications/coated/micro-laser-cut-footwear.jpg",
          name: "Micro laser cut products",
          content:
            "Technical products tailor-made for high performance, heavy-duty load, superior abrasion & very-high tear strength in footwear.",
        },
        {
          image: "/images/applications/coated/Footwear.gif",
          name: "Shoe Insoles and Sandal Upper Products",
          content:
            "We have various types of shoe uppers with sandwich textiles / non-woven foam and also for PU Injection moulding.",
        },
      ],
    },
    {
      type: "Fashion",
      title: "Fashion",
      name: "Fashion",
      bannerImg: "/images/coated-fabrics/banner-3.jpg",
      para: "We manufacture, supply & export world-class coated fabrics for a variety of fashion accessories",
      applications: [
        {
          image: "/images/applications/coated/apparels-coated-fabrics.jpg",
          name: "Apparels",
          content:
            "The ideal replacement for real leather, coated fabrics have been playing a key role in fashion design for several years now. Our coated fabrics having vibrant colors, real leather-like feel, extraordinary embosses & textures have been enabling our customers in the fashion industry to make very innovative, durable & attractive range of apparels.",
        },
        {
          image: "/images/applications/coated/BAgs.gif",
          name: "Bags",
          content:
            "Tailor made products are available for ladies bags with high scratch resistance, micro laser cut designs and with colour fastness.",
        },
        {
          image: "/images/applications/coated/belt-1.jpg",
          name: "Belts",
          content:
            "Belts made out of our range of coated fabrics are known for their durability, fashion-savvy nature & extraordinary feel. By utilizing our coated fabrics, our customers are able to make premium quality belts that last long and make heads turn.",
        },
      ],
    },
    {
      type: "Tractor",
      title: "Tractor",
      name: "Tractor",
      bannerImg: "/images/coated-fabrics/Tractor.jpg",
      para: "We manufacture & supply specialized 2-wheeler seat cover coated fabrics to make every ride joyful",
      images: [{ img: "/images/applications/coated/20 march natroyal.jpg" }],
    },
  ];

  const { category } = useParams(); // Get category from URL

  const selectedCategory = applicationData.find(
    (data) => data.type.toLowerCase() === category.toLowerCase()
  );

  if (!selectedCategory) {
    return <h2>No applications found for {category}</h2>;
  }

  const bannerData = {
    bannerImg: selectedCategory.bannerImg,
    bannerVideo: selectedCategory.bannerVideo,
    title: selectedCategory?.name || "Default Title", // Ensure it doesn't break if selectedCategory is undefined
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: "Coated Fabrics", path: "/coated-fabrics", active: false },
      { label: selectedCategory?.name, path: null, active: true },
    ],
  };

  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        bannerVideo={bannerData.bannerVideo}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />

      <section className="applications-section">
        <div className="container">
          <div className="row">
            <ul className="application-tabs d-flex align-items-center justify-content-center">
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/coated-fabrics" end>
                  Home
                </NavLink>
              </li>
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
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link"
                  to="/coated-fabrics/residential-contract-furnishing"
                >
                  Residential & Contract Furnishing
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/coated-fabrics/automotive">
                  Automotive
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/coated-fabrics/two-wheelers">
                  Two Wheelers
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link"
                  to="/coated-fabrics/marine-recreational-vehicles"
                >
                  Marine & Recreational Vehicles
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/coated-fabrics/healthcare">
                  Healthcare
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/coated-fabrics/footwear">
                  Footwear
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/coated-fabrics/fashion">
                  Fashion
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/coated-fabrics/tractor">
                  Tractor
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/coated-fabrics" end>
                  Truck
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="vinyl-applications-section">
        <div className="container">
          <h2 className="title new-title text-center">
            {" "}
            {selectedCategory.title}{" "}
            <span className="yellow-title">{selectedCategory.spanTitle}</span>
            {""}
          </h2>

          <p className="paragraph gray-para text-center">
            {selectedCategory.para}
          </p>
        </div>
      </section>

      <section className="application-types-section coated-application-section">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-9">
              {selectedCategory.applications &&
                selectedCategory.applications.map((application, index) => (
                  <div
                    className="row align-items-center justify-content-center"
                    key={index}
                  >
                    <div className="col-lg-4 mb-4">
                      <img
                        src={application.image}
                        alt={application.name}
                        className="w-100 coated-img"
                      />
                    </div>
                    <div className="col-lg-7 offset-lg-1 mt-4">
                      <h4 className="mb-4">
                        <i>{application.name}</i>
                      </h4>
                      <p className="paragraph gray-para">
                        {application.content}
                      </p>
                      {application.btn && (
                        <div className="d-flex mt-3">
                          <NavLink
                            to={application.btnLink}
                            target="_blank"
                            className="custom-button"
                          >
                            {application.btn}
                          </NavLink>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

              {selectedCategory.images &&
                selectedCategory.images.map((image, index) => (
                  <div
                    className="row coated-big-img-div align-items-center justify-content-center mb-5"
                    key={index}
                  >
                    <div className="col-lg-8">
                      <h4 className="mb-4 text-center">
                        <i>{image.imgName}</i>
                      </h4>
                      <img src={image.img} alt={index} className="w-100" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoatedApplications;
