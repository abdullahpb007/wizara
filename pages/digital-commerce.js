import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/HomeSeven/PageBanner";
import Footer from "../components/Layouts/Footer";

class DigitalEcommerce extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>Ecommerce Development Services</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>Ecommerce Development Services</h2>
                    <div className="bar" />
                    <p>
                      Embed future trends and functionalities to provide a
                      superior customer experience that fosters loyalty,
                      generates more revenue, and builds a positive brand
                      affinity.
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
                  <h2>Our eCommerce Development Services</h2>
                </div>
              </div>
              <div className="row">
                {[
                  { title: "Ecommerce Apps & Web Portals", subtitle: "" },
                  { title: "Ecommerce Plugin", subtitle: "" },
                  { title: "Ecommerce Cart Development", subtitle: "" },
                  { title: "Process Automation", subtitle: "" },
                  { title: "Migration and Upgradation", subtitle: "" },
                  { title: "Maintenance and Support", subtitle: "" }
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

export default DigitalEcommerce;
