import React from "react";

const ApplicationsModal = () => {
  return (
    <>
      {/* Applications Button - Opens Modal */}
      <button
        className="btn application-btn"
        data-bs-toggle="modal"
        data-bs-target="#applicationsModal"
      >
        Applications
      </button>

      {/* Applications Modal */}
      <div
        className="modal fade modal-bottom-slide full-width-modal"
        id="applicationsModal"
        tabIndex="-1"
        aria-labelledby="applicationsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-bottom">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="applicationsModalLabel">
                Applications
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {/* Individual Accordions (No Nested Structure) */}
              <div className="accordion" id="applicationsAccordion">
                {/* Education */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEducation"
                      aria-expanded="true"
                      aria-controls="collapseEducation"
                    >
                      Education
                    </button>
                  </h2>
                  <div
                    id="collapseEducation"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#applicationsAccordion"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Moonwalk
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Accord
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mirakle
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Symphony
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Star Trek
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Royal Star
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Elegant
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Dazzle
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Nuplank
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Tiger
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Avengers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Healthcare */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseHealthcare"
                      aria-expanded="false"
                      aria-controls="collapseHealthcare"
                    >
                      Healthcare
                    </button>
                  </h2>
                  <div
                    id="collapseHealthcare"
                    className="accordion-collapse collapse"
                    data-bs-parent="#applicationsAccordion"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Moonwalk
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Accord
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mirakle
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Wally
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Star Trek
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Orbit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Royal Star
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Dazzle
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Nuplank
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Tiger
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Avengers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Wet Areas */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseWetAreas"
                      aria-expanded="false"
                      aria-controls="collapseWetAreas"
                    >
                      Wet Areas
                    </button>
                  </h2>
                  <div
                    id="collapseWetAreas"
                    className="accordion-collapse collapse"
                    data-bs-parent="#applicationsAccordion"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Aqua RS
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Residential */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseResidential"
                      aria-expanded="false"
                      aria-controls="collapseResidential"
                    >
                      Residential
                    </button>
                  </h2>
                  <div
                    id="collapseResidential"
                    className="accordion-collapse collapse"
                    data-bs-parent="#applicationsAccordion"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Royal Star
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Moonwalk
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Accord
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Majesty Pro
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Opera
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Elegant
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Dazzle
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Royal Classic
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Nuplank
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Mirakle
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Majesty
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Printed Flooring
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Offices/Retail */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOffices"
                      aria-expanded="false"
                      aria-controls="collapseOffices"
                    >
                      Offices/Retail
                    </button>
                  </h2>
                  <div
                    id="collapseOffices"
                    className="accordion-collapse collapse"
                    data-bs-parent="#applicationsAccordion"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Moonwalk
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Accord
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mirakle
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Symphony
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Star Trek
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Orbit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Suprema RS
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Standard RS
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Aqua RS
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Royal Star
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Elegant
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Dazzle
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Nuplank
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Majesty Pro
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Majesty
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Royal Classic
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Tiger
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Avengers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseHospitality"
                      aria-expanded="false"
                      aria-controls="collapseHospitality"
                    >
                      Hospitality
                    </button>
                  </h2>
                  <div
                    id="collapseHospitality"
                    className="accordion-collapse collapse"
                    data-bs-parent="#applicationsAccordion"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Moonwalk
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Accord
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mirakle
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Tuff
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Symphony
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Star Trek
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Sonata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Suprema RS
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Standard RS
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Aqua RS
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Eco Plus V
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Royal Star
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Tiger
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Avengers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTransport"
                      aria-expanded="false"
                      aria-controls="collapseTransport"
                    >
                      Transport
                    </button>
                  </h2>
                  <div
                    id="collapseTransport"
                    className="accordion-collapse collapse"
                    data-bs-parent="#applicationsAccordion"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Sonata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Suprema RS
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Eco Plus V
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Gripper
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSports"
                      aria-expanded="false"
                      aria-controls="collapseSports"
                    >
                      Sports
                    </button>
                  </h2>
                  <div
                    id="collapseSports"
                    className="accordion-collapse collapse"
                    data-bs-parent="#applicationsAccordion"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            Avengers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* End Accordions */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationsModal;
