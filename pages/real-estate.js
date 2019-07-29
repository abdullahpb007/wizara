import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/HomeSeven/PageBanner";
import Footer from "../components/Layouts/Footer";

class RealEstate extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>Real Estate Software Solutions</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>Real Estate Software Solutions</h2>
                    <div className="bar" />
                    <p>
                      Bridging the gap between users and real estate
                      businesses through technology Develop robust and
                      scalable business applications to showcase your
                      properties and connect with prospective buyers, while
                      synchronizing your offline business data with online
                      actions to increase profitability of your real estate
                      business.
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
                  <h2>Real Estate Software Solutions: Key Offerings</h2>
                </div>
              </div>
              <div className="row">
                {[
                  {
                    title: "Real Estate CRM Applications",
                    subtitle: ""
                  },
                  {
                    title: "On-Demand Property Booking Applications",
                    subtitle:
                      ""
                  },
                  {
                    title: "Auction/Reverse Auction Applications",
                    subtitle:
                      ""
                  },
                  {
                    title: "Mortgage Applications",
                    subtitle:
                      ""
                  },
                  {
                    title: "Real Estate ERP Software",
                    subtitle:
                      ""
                  },
                  {
                    title: "Construction Supervision Applications",
                    subtitle:
                      ""
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

export default RealEstate;
