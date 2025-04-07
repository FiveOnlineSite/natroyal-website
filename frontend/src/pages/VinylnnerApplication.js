import React from "react";
import Layout from "../components/Layout";
import { NavLink, useParams } from "react-router-dom";
import Banner from "../components/Banner";

const VinylnnerApplication = () => {
  const applicationData = [
    {
      type: "Moonwalk",
      title: "Moonwalk",
      content: [
        {
          para: "Hardwearing Vinyl Floor covering in overall design",
        },
        {
          para: "0.7 mm pure PVC transparent wear layer with floating decorative chips",
        },
        {
          para: "Shades and textures combined to create stunning floor designs",
        },
        {
          para: "PU coating (optional) for easy and low cost maintenance",
        },
        {
          para: "Excellent resistance to scratches, abrasion, soiling and staining",
        },
        {
          para: "Glass fibre scrim for dimensional stability",
        },
      ],
      suitable: [
        {
          name: "Education",
          image: "/images/icons/image 59.png",
          link: "/vinyl-flooring/education",
        },
        {
          name: "Healthcare",
          image: "/images/icons/image 62.png",
          link: "/vinyl-flooring/healthcare",
        },
        {
          name: "Residential",
          image: "/images/icons/residential.png",
          link: "/vinyl-flooring/residential",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],
      tags: [
        {
          tag: "Technical Specification",
        },
        {
          tag: "Installation & Maintenance",
        },
        {
          tag: "Open e-brochure",
        },
        {
          tag: "Technical Specification",
        },
      ],
      applications: [
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
        },
        {
          image: "/images/applications/education/SY2406.jpg",
          name: "Symphony",
        },
        {
          image: "/images/applications/education/EG2047.jpg",
          name: "Elegant",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
        },
        {
          image: "/images/applications/education/SK2630.jpg",
          name: "Star Trek",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
        },
        {
          image: "/images/applications/education/RS3112.jpg",
          name: "Royal Star",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Tiger",
        },
      ],
    },
    {
      type: "Healthcare",
      title: "Healthcare",
      para: "Our flooring provides a healthy and hygienic environment to patients to enhance the healing and curing elements for a speedy recovery. The care givers receive aid in providing the same with ease and experience comfort in the work place. The Flooring is also designed for bare foot and continuous wet areas.",
      applications: [
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
        },
        {
          image: "/images/applications/healthcare/WY2032.png",
          name: "Wally",
        },
        {
          image: "/images/applications/education/RS3112.jpg",
          name: "Royal Star",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
        },
        {
          image: "/images/applications/education/SK2630.jpg",
          name: "Star Trek",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
        },
        {
          image: "/images/applications/healthcare/AT2041.jpg",
          name: "Orbit",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Tiger",
        },
      ],
    },
    {
      type: "Wet-Areas",
      title: "Wet Areas",
      para: "Our flooring provides a healthy and hygienic environment to patients to enhance the healing and curing elements for a speedy recovery. The care givers receive aid in providing the same with ease and experience comfort in the work place. The Flooring is also designed for bare foot and continuous wet areas.",
      applications: [
        {
          image: "/images/applications/wetareas/RQ2642.jpg",
          name: "Aqua RS",
        },
      ],
    },
    {
      type: "Residential",
      title: "Residential",
      para: "Our exquisite range of vinyl floor coverings in wooden, geometric and all over designs is developed keeping in mind the various tastes of individuals for designing their homes. It is easy to maintain and hassle free installation helps its users to change their interiors as often as desired. Flooring innercategory includes printed flooring for normal economical range and Royal Star, Moonwalk, Majesty, Opera, Symphony, Royal Classic etc.",
      applications: [
        {
          image: "/images/applications/residential/RS3114.jpg",
          name: "Royal Star",
        },
        {
          image: "/images/applications/residential/1.jpg",
          name: "Opera",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
        },
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
        },
        {
          image: "/images/applications/residential/EG2047.jpg",
          name: "Elegant",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
        },
        {
          image: "/images/applications/residential/1 (1).jpg",
          name: "Majesty",
        },

        {
          image: "/images/applications/residential/MP 117047.jpg",
          name: "Majesty Pro",
        },

        {
          image: "/images/applications/residential/6.jpg",
          name: "Royal Classic",
        },
        {
          image: "/images/applications/residential/3.jpg",
          name: "Printend Flooring",
        },
      ],
    },
    {
      type: "Offices-Retail",
      title: "Offices/Retail",
      para: "Where aesthetics meet practicality, our various ranges are designed to meet the growing aesthetics demands of the guests/ customers in offices, retail and hospitality. It also meets the high performance requirement at the same time.",
      applications: [
        {
          image: "/images/applications/residential/RS3114.jpg",
          name: "Royal Star",
        },
        {
          image: "/images/applications/residential/1.jpg",
          name: "Opera",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
        },
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
        },
        {
          image: "/images/applications/residential/EG2047.jpg",
          name: "Elegant",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
        },
        {
          image: "/images/applications/residential/1 (1).jpg",
          name: "Majesty",
        },

        {
          image: "/images/applications/residential/MP 117047.jpg",
          name: "Majesty Pro",
        },

        {
          image: "/images/applications/residential/6.jpg",
          name: "Royal Classic",
        },
        {
          image: "/images/applications/residential/3.jpg",
          name: "Printend Flooring",
        },
      ],
    },
    {
      type: "Hospitality",
      title: "Hospitality",
      para: "Where aesthetics meet practicality, our various ranges are designed to meet the growing aesthetics demands of the guests/ customers in offices, retail and hospitality. It also meets the high performance requirement at the same time.",
      applications: [
        {
          image: "/images/applications/residential/RS3114.jpg",
          name: "Royal Star",
        },
        {
          image: "/images/applications/residential/1.jpg",
          name: "Opera",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
        },
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
        },
        {
          image: "/images/applications/residential/EG2047.jpg",
          name: "Elegant",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
        },
        {
          image: "/images/applications/residential/1 (1).jpg",
          name: "Majesty",
        },

        {
          image: "/images/applications/residential/MP 117047.jpg",
          name: "Majesty Pro",
        },

        {
          image: "/images/applications/residential/6.jpg",
          name: "Royal Classic",
        },
        {
          image: "/images/applications/residential/3.jpg",
          name: "Printend Flooring",
        },
      ],
    },
    {
      type: "Transport",
      title: "Transport",
      para: "Various range of high endurance transport Vinyl Flooring are designed to meet the high Safety standards, provide a hygienic, comfortable and attractive environment to passengers. Pioneers of introducing Vinyl Flooring ranges like Gripper, Suprema RS, Standard RS, Sonata and Ecoplus V of International Standards for the Transport Industry in india.",
      applications: [
        {
          image: "/images/applications/residential/RS3114.jpg",
          name: "Royal Star",
        },
        {
          image: "/images/applications/residential/1.jpg",
          name: "Opera",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
        },
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
        },
        {
          image: "/images/applications/residential/EG2047.jpg",
          name: "Elegant",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
        },
        {
          image: "/images/applications/residential/1 (1).jpg",
          name: "Majesty",
        },

        {
          image: "/images/applications/residential/MP 117047.jpg",
          name: "Majesty Pro",
        },

        {
          image: "/images/applications/residential/6.jpg",
          name: "Royal Classic",
        },
        {
          image: "/images/applications/residential/3.jpg",
          name: "Printend Flooring",
        },
      ],
    },
    {
      type: "Sports",
      title: "Sports",
      para: "Avengers is multi- purpose sports surface designed for use in a wide range of sporting events like Gymnasiums, Yoga rooms, Table Tennis, fitness centers etc. It is manufactured keeping in view the varying shock absorbing requirements and performance requirements.",
      applications: [
        {
          image: "/images/applications/residential/RS3114.jpg",
          name: "Royal Star",
        },
        {
          image: "/images/applications/residential/1.jpg",
          name: "Opera",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
        },
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
        },
        {
          image: "/images/applications/residential/EG2047.jpg",
          name: "Elegant",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
        },
        {
          image: "/images/applications/residential/1 (1).jpg",
          name: "Majesty",
        },

        {
          image: "/images/applications/residential/MP 117047.jpg",
          name: "Majesty Pro",
        },

        {
          image: "/images/applications/residential/6.jpg",
          name: "Royal Classic",
        },
        {
          image: "/images/applications/residential/3.jpg",
          name: "Printend Flooring",
        },
      ],
    },
  ];

  const { innercategory } = useParams(); // Get innercategory from URL

  const selectedCategory = applicationData.find(
    (data) => data.type.toLowerCase() === innercategory.toLowerCase()
  );

  if (!selectedCategory) {
    return <h2>No applications found for {innercategory}</h2>;
  }

  const bannerData = {
    bannerImg: "/images/banners/collage.png",
    title: selectedCategory?.title || "Default Title", // Ensure it doesn't break if selectedCategory is undefined
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: "Vinyl Flooring", path: "/vinyl-flooring", active: false },
      { label: selectedCategory?.title, path: null, active: true },
    ],
  };

  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />

      <section className="vinyl-applications-section">
        <div className="container">
          <h2 className="title new-title text-center">
            <span className="yellow-title">{selectedCategory.title}</span>
            {""}
          </h2>

          <ul className="d-flex flex-column justify-content-center align-items-center">
            {" "}
            {selectedCategory?.content?.map((content, index) => (
              <li className="paragraph gray-para" key={index}>
                {content.para}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="application-types-section">
        <div className="container">
          <div className="row">
            {selectedCategory.applications.map((application, index) => (
              <div className="col-lg-2 mt-4" key={index}>
                <NavLink to={application.innerCategory}>
                  <div className="single-application-div">
                    <img src={application.image} alt={application.name} />
                    <h4>{application.name}</h4>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
          <div className="row mt-5 ">
            <div className="col-lg-12">
              <div className="row d-flex align-item-center justify-content-around application-tags-row">
                <div className="tags-div">
                  <div className="single-tag application-tag">
                    <h6 className="tag">Technical Specification</h6>
                  </div>
                </div>

                <div className="tags-div">
                  <div className="single-tag application-tag">
                    <h6 className="tag">Installation & Maintenance</h6>
                  </div>
                </div>

                <NavLink
                  to="/docs/Product Range Catlog_2014_10 Low.pdf"
                  target="_blank"
                >
                  <div className="tags-div ">
                    <div className="single-tag application-tag">
                      <h6 className="tag">Open e-brochure</h6>
                    </div>
                  </div>
                </NavLink>

                <NavLink to="/contact-us#inquire">
                  <div className="tags-div">
                    <div className="single-tag application-tag">
                      <h6 className="tag">Enquiry Now</h6>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="suitable-for-section">
        <div className="container">
          <h3 className="suitable-for-title">Suitable For</h3>
          <div className="row">
            {selectedCategory?.suitable?.map((suitable, index) => (
              <div className="col-lg-2 mt-4" key={index}>
                <NavLink to={suitable.link}>
                  <div className="suitable-div">
                    <img
                      src={suitable.image}
                      alt={suitable.name}
                      className="inner-application-img"
                    />
                    <h6>{suitable.name}</h6>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VinylnnerApplication;
