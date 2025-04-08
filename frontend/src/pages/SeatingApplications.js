import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";

const SeatingApplications = () => {
  const applicationData = [
    {
      type: "Railway-Metro",
      title: "Railway ",
      spanTitle: "/ Metro",
      name: "Railway / Metro",
      para: "Total solution from Designing, Proto Sample Development, Testing, Tooling, Manufacturing & Supply. SS & CS production through EN-15085-2 certified WELDING STANDARD and GLOBALLY in the club of 2540 company instated of EN – ISO 15609- :2004. Pipe bending products through Multi Axis CNC machine. In-house Design, Tool Room and R&D Centre",
      banner_video: "/images/seating/Metro.mp4",
      applications: [
        {
          step: "01",
          image: "/images/applications/seating/NR SCD PPT 2024_082.png",
        },
        {
          step: "02",
          image: "/images/applications/seating/NR SCD PPT 2024_079.png",
        },
        {
          step: "03",
          image: "/images/applications/seating/NR SCD PPT 2024_045 (1).png",
        },
        {
          step: "04",
          image: "/images/applications/seating/NR SCD PPT 2024_076.png",
        },
        {
          step: "05",
          image: "/images/applications/seating/1.png",
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
      banner_img: "/images/banners/collage.png",
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

      <section className="vinyl-applications-section">
        <div className="container">
          <h2 className="title new-title text-center">
            {" "}
            {selectedCategory.title} {""}
            <span className="yellow-title">{selectedCategory.spanTitle}</span>
            {""}
          </h2>
          {selectedCategory.para && (
            <p className="paragraph gray-para text-center">
              {selectedCategory.para}
            </p>
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
