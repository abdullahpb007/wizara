import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/HomeSeven/PageBanner";
import Footer from "../../components/Layouts/Footer";

class SocialMediaApplication extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>Enterprise Mobility Services</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>Enterprise Mobility Services</h2>
                    <div className="bar" />
                    <p>
                      We help enterprises to define their enterprise
                      mobility strategies, as well as develop and deploy
                      mobile-centric business solutions, which are
                      industry-focused, adaptable and process data in real
                      time.
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
                  <h2>Our Enterprise Mobility Services</h2>
                </div>
              </div>
              <div className="row">
                {[
                  {
                    title: "Device Configuration & Management",
                    subtitle:
                      "Configure devices to custom specifications, optimize and manage corporate owned devices (MDM) as well as BYOD functionality for business use and simultaneously secure corporate data and network."
                  },
                  {
                    title: "Server Orchestration",
                    subtitle:
                      "Optimal server orchestration to increase operational fluidity, optimize processes, streamline workflows and remove redundancy while encouraging process re-usability."
                  },
                  {
                    title: "Flexible Deployment Options",
                    subtitle:
                      "A flexible EMM solution that supports multiple deployment options and enables organisations to strike an optimal balance between complexity and security."
                  },
                  {
                    title: "Security Management",
                    subtitle:
                      "Allow users to view and store data securely on mobile devices by using security configurations like identity authentication, file sharing and copy/paste restriction policies etc."
                  },
                  {
                    title: "Real-Time Monitoring",
                    subtitle:
                      "Configuration management across VMs and servers for real-time tracking and visibility on security patches, server updates, device health and device updates."
                  },
                  {
                    title: "Intuitive Dashboard Integration",
                    subtitle:
                      "Custom dashboards with analytical capabilities to help IT admins understand application usage patterns, network loads and device loads, so as to manage mobile devices quickly."
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

export default SocialMediaApplication;
