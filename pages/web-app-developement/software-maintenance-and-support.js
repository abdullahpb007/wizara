import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/HomeSeven/PageBanner";
import Footer from "../../components/Layouts/Footer";

class SoftwareMaintenanceAndSupport extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>Software Maintenance and Support</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>Software Maintenance and Support</h2>
                    <div className="bar" />
                    <p>
                      We provide preventive and pro-active software
                      maintenance and support services to ensure that your
                      application stays in line with the latest technologies
                      and features, as well as meet highest of the
                      performance standards.
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
                  <h2>Our Software Maintenance and Support Services</h2>
                </div>
              </div>
              <div className="row">
                {[
                  {
                    title: "Software Audit",
                    subtitle:
                      "We perform independent audit of software such as architecture and code audit, performance audit, security audit, infrastructure audit, etc."
                  },
                  {
                    title: "Software Support",
                    subtitle:
                      "1st, 2nd and 3rd level support services for software developed by us or any third party vendor. We help you with troubles of any complexity level — from providing workarounds & hot fixes to application enhancement."
                  },
                  {
                    title: "Software Upgradation/Modernization",
                    subtitle:
                      "Re-engineering and modernization of legacy apps, whether they’re lacking versatility due to old code structures, are hosted on inefficient servers, or suffer from outdated interface designs."
                  },
                  {
                    title: "Security Updates",
                    subtitle:
                      "Keep your applications guarded against security threats and data loss with our continuous server management, backup storage monitoring, OS versions update, application licenses check, and performance control, etc."
                  },
                  {
                    title: "Server Monitoring",
                    subtitle:
                      "Continuous monitoring of your core applications, hardware and overall server performance to avoid your server failure, memory reaching threshold or downtime"
                  },
                  {
                    title: "Takeover from Third Party",
                    subtitle:
                      "Safe knowledge transfer and seamless takeover of applications from third party vendors to WiZARA through our time-proven and process driven methodology."
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

export default SoftwareMaintenanceAndSupport;
