import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/HomeSeven/PageBanner";
import Footer from "../components/Layouts/Footer";

class Travel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>TRAVEL AND TRANSPORTATION</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>Travel and Transportation Solutions</h2>
                    <div className="bar" />
                    <p>
                      Scalable solutions for the ever-moving travel and
                      transportation businesses Excel in your journey to digital
                      transportation with our custom, scalable, and innovative
                      range of technology solutions that assist you in managing
                      business operations, increase customer intimacy, employee
                      productivity, and operational efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <img src={require("../images/marketing.png")} alt="image" />
              </div>
            </div>
          </div>
          <div className="about-inner-area">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 section-title">
                  <h2>Our Travel and Transportation Software Solutions</h2>
                </div>
              </div>
              <div className="row">
                {[
                  { title: "E-Booking & Ticketing System", subtitle: "" },
                  { title: "On-Demand Travel Application", subtitle: "" },
                  { title: "Fleet Management Solutions", subtitle: "" },
                  {
                    title: "Public Transport Information Apps",
                    subtitle: ""
                  },
                  { title: "Migration and Upgradation", subtitle: "" },
                  {
                    title: "Software Maintenance and Support",
                    subtitle: ""
                  },
                  { title: "Custom Travel ERP Solutions", subtitle: "" }
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

export default Travel;
