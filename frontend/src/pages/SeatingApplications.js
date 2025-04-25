import React from "react";
import Layout from "../components/Layout";
import { NavLink, useParams } from "react-router-dom";
import Banner from "../components/Banner";

const SeatingApplications = () => {
  const applicationData = [
    {
      type: "Railway-Metro",
      title: "Railway ",
      spanTitle: "/ Metro",
      name: "Railway / Metro",
      content: [
        {
          para: "Total solution from Designing, Proto Sample Development, Testing, Tooling, Manufacturing & Supply.",
        },
        {
          para: "SS & CS production through EN-15085-2 certified WELDING STANDARD and GLOBALLY in the club of 2540 company instated of EN – ISO 15609- :2004",
        },
        {
          para: "Pipe bending products through Multi Axis CNC machine",
        },
        {
          para: "In-house Design, Tool Room and R&D Centre",
        },
      ],

      banner_video: "/images/seating/Metro.mp4",
      applications: [
        {
          step: "01",
          image: "/images/applications/seating/Group 3.png",
        },
        {
          step: "02",
          image: "/images/applications/seating/NR SCD PPT 2024_079 1.png",
        },
        {
          step: "03",
          image: "/images/applications/seating/NR SCD PPT 2024_049 1 (1).png",
        },
        {
          step: "04",
          image: "/images/applications/seating/NR SCD PPT 2024_076 1.png",
        },
        {
          step: "05",
          image: "/images/applications/seating/1.png",
        },
        {
          step: "06",
          image: "/images/applications/seating/Train-Seat--2.png",
        },
        {
          step: "07",
          image: "/images/applications/seating/rail.jpg",
        },
        {
          step: "08",
          image: "/images/applications/seating/Train-Seat--3.png",
        },
        {
          step: "09",
          image: "/images/applications/seating/Train-Seat.png",
        },
        {
          step: "10",
          image: "/images/applications/seating/Train-Seat--4.png",
        },
        {
          step: "11",
          image: "/images/applications/seating/Train-Seat--5.png",
        },
        {
          step: "12",
          image: "/images/applications/seating/Train-Seat--6.png",
        },
        // {
        //   step: "06",
        //   image: "/images/applications/seating/Train-Seat--5.png",
        // },
        // {
        //   step: "07",
        //   image: "/images/applications/seating/Train-Seat--6.png",
        // },
      ],
    },
    {
      type: "Cinema",
      title: "Cinema",
      name: "Cinema",
      banner_video: "/images/seating/cinema.mp4",
      applications: [
        {
          step: "01",
          image: "/images/applications/seating/Cinema-Seats.-1.png",
        },
        {
          step: "02",
          image: "/images/applications/seating/Cinema-Seats.3.png",
        },
        {
          step: "03",
          image: "/images/applications/seating/Cinema-Seats.2.png",
        },
        {
          step: "04",
          image: "/images/applications/seating/Cinema-Seats.png",
        },
      ],
    },
    {
      type: "Bus",
      title: "Bus",
      name: "Bus",
      banner_video: "/images/seating/Bus.mp4",
      applications: [
        {
          step: "01",
          image: "/images/applications/seating/Bus-Seats.png",
        },
        {
          step: "02",
          image: "/images/applications/seating/Bus-Seats-2.png",
        },
        {
          step: "03",
          image: "/images/applications/seating/Bus-Seats.-1.png",
        },
        {
          step: "04",
          image: "/images/applications/seating/Bus-Seats-3.png",
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
    bannerImg: selectedCategory?.banner_img,
    title: selectedCategory?.name || "Default Title", // Ensure it doesn't break if selectedCategory is undefined
    bannerVideo: selectedCategory?.banner_video,
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      {
        label: "Seating Components",
        path: "/seating-components",
        active: false,
      },
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
                <NavLink
                  className="nav-link"
                  to="/seating-components/railway-metro"
                >
                  Railway/Metro
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/seating-components/bus">
                  Bus
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/seating-components/cinema">
                  Cinema
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
            {selectedCategory.title} {""}
            <span className="yellow-title">{selectedCategory.spanTitle}</span>
            {""}
          </h2>
          {selectedCategory.content && (
            <ul className="paragraph gray-para text-start">
              {selectedCategory.content.map((content, index) => (
                <li> {content.para}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row justify-content-center">
                {selectedCategory.applications.map((application, index) => (
                  <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <div className="mission-div mb-5">
                      <div className="mission-no">{application.step}</div>
                      <div className="seating-application-img">
                        <img
                          src={application.image}
                          alt="seating"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SeatingApplications;
