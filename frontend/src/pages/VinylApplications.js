import React from "react";
import Layout from "../components/Layout";
import { NavLink, useParams } from "react-router-dom";
import Banner from "../components/Banner";

const VinylApplications = () => {
  const applicationData = [
    {
      type: "Education",
      title: "Education",
      para: "Our Education range of Vinyl Flooring is developed to help students concentrate, inspire and interact. The vibrant colors enhance creativity and concentration for both the students and facilitators.",

      applications: [
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/SY2406.jpg",
          name: "Symphony",
          innerCategory: "/symphony",
        },
        {
          image: "/images/applications/education/EG2047.jpg",
          name: "Elegant",
          innerCategory: "/elegant",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
          innerCategory: "/accord",
        },
        {
          image: "/images/applications/education/SK2630.jpg",
          name: "Star Trek",
          innerCategory: "/star-trek",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
          innerCategory: "/dazzle",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
          innerCategory: "/mirakle",
        },
        {
          image: "/images/applications/education/RS3112.jpg",
          name: "Royal Star",
          innerCategory: "/royal-star",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
          innerCategory: "/nuplank",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Tiger",
          innerCategory: "/tiger",
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
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/healthcare/WY2032.png",
          name: "Wally",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/RS3112.jpg",
          name: "Royal Star",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/SK2630.jpg",
          name: "Star Trek",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/healthcare/AT2041.jpg",
          name: "Orbit",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Tiger",
          innerCategory: "/moonwalk",
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
          innerCategory: "/moonwalk",
        },
      ],
    },
    {
      type: "Residential",
      title: "Residential",
      para: "Our exquisite range of vinyl floor coverings in wooden, geometric and all over designs is developed keeping in mind the various tastes of individuals for designing their homes. It is easy to maintain and hassle free installation helps its users to change their interiors as often as desired. Flooring category includes printed flooring for normal economical range and Royal Star, Moonwalk, Majesty, Opera, Symphony, Royal Classic etc.",
      applications: [
        {
          image: "/images/applications/residential/RS3114.jpg",
          name: "Royal Star",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/1.jpg",
          name: "Opera",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/EG2047.jpg",
          name: "Elegant",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/1 (1).jpg",
          name: "Majesty",
          innerCategory: "/moonwalk",
        },

        {
          image: "/images/applications/residential/MP 117047.jpg",
          name: "Majesty Pro",
          innerCategory: "/moonwalk",
        },

        {
          image: "/images/applications/residential/6.jpg",
          name: "Royal Classic",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/3.jpg",
          name: "Printend Flooring",
          innerCategory: "/moonwalk",
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
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/1.jpg",
          name: "Opera",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/EG2047.jpg",
          name: "Elegant",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/1 (1).jpg",
          name: "Majesty",
          innerCategory: "/moonwalk",
        },

        {
          image: "/images/applications/residential/MP 117047.jpg",
          name: "Majesty Pro",
          innerCategory: "/moonwalk",
        },

        {
          image: "/images/applications/residential/6.jpg",
          name: "Royal Classic",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/3.jpg",
          name: "Printend Flooring",
          innerCategory: "/moonwalk",
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
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/1.jpg",
          name: "Opera",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/EG2047.jpg",
          name: "Elegant",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/1 (1).jpg",
          name: "Majesty",
          innerCategory: "/moonwalk",
        },

        {
          image: "/images/applications/residential/MP 117047.jpg",
          name: "Majesty Pro",
          innerCategory: "/moonwalk",
        },

        {
          image: "/images/applications/residential/6.jpg",
          name: "Royal Classic",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/3.jpg",
          name: "Printend Flooring",
          innerCategory: "/moonwalk",
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
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/1.jpg",
          name: "Opera",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/EG2047.jpg",
          name: "Elegant",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/1 (1).jpg",
          name: "Majesty",
          innerCategory: "/moonwalk",
        },

        {
          image: "/images/applications/residential/MP 117047.jpg",
          name: "Majesty Pro",
          innerCategory: "/moonwalk",
        },

        {
          image: "/images/applications/residential/6.jpg",
          name: "Royal Classic",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/3.jpg",
          name: "Printend Flooring",
          innerCategory: "/moonwalk",
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
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/1.jpg",
          name: "Opera",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/EG2047.jpg",
          name: "Elegant",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/1 (1).jpg",
          name: "Majesty",
          innerCategory: "/moonwalk",
        },

        {
          image: "/images/applications/residential/MP 117047.jpg",
          name: "Majesty Pro",
          innerCategory: "/moonwalk",
        },

        {
          image: "/images/applications/residential/6.jpg",
          name: "Royal Classic",
          innerCategory: "/moonwalk",
        },
        {
          image: "/images/applications/residential/3.jpg",
          name: "Printend Flooring",
          innerCategory: "/moonwalk",
        },
      ],
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

          <p className="paragraph gray-para text-center">
            {selectedCategory.para}
          </p>
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
        </div>
      </section>
    </Layout>
  );
};

export default VinylApplications;
