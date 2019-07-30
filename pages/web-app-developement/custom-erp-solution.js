import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/HomeSeven/PageBanner";
import Footer from "../../components/Layouts/Footer";

class CustomErpSolution extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>Custom ERP Solutions</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>Custom ERP Software Solutions</h2>
                    <div className="bar" />
                    <p>
                      Custom ERP solutions to automate and streamline
                      business functions and make data backed decisions. Get
                      better visibility and operate more effectively by
                      implementing powerful and custom ERP software
                      solutions that integrate multiple business functions
                      and provide you with consolidated and graphically
                      represented data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <img
                  src={require("../../images/marketing.png")}
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="about-inner-area">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 section-title">
                  <h2>Our ERP Software Solutions</h2>
                </div>
              </div>
              <div className="row">
                {[
                  {
                    title: "ERP Systems Integration",
                    subtitle:
                      "Integrate ERP software with all your systems, bringing value to every functional area with centralized architecture and real-time data automation."
                  },
                  {
                    title: "ERP Migration",
                    subtitle:
                      "Migrate ERP sytems to latest technology stack with complete migration of legacy data, ERP upgrades and seamless integration with your organization’s workflows."
                  },
                  {
                    title: "ERP Implementation",
                    subtitle:
                      "Implement ERP with proven methodology that provides system design, configuration and testing with your custom networks, servers and data management solutions."
                  },
                  {
                    title: "Reporting and Automation",
                    subtitle:
                      "Make better and quick decisions with flexible, accurate and real-time reporting, that eliminates the manual merging and allows staff to pull reports from one system."
                  },
                  {
                    title: "Industry-Specific ERP Solutions",
                    subtitle:
                      "Avail wide array of industry specific ERP software solutions that are carefully designed to integrate with different industry requirements be it healthcare, real estate, travel etc."
                  },
                  {
                    title: "ERP Consulting",
                    subtitle:
                      "Consult our ERP experts that start with analyzing your current business requirements and then formulate strategies to integrate and configure robust ERP software solutions."
                  }
                ].map((val, ind) => (
                  <div className="col-lg-4 col-md-6" key={ind}>
                    <div className="single-services">
                      <div className="icon">
                        <i className="icofont-music-note" />
                      </div>
                      <h3>{val.title}</h3>
                      <p>{val.subtitle ? val.subtitle : ""}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default CustomErpSolution;
