import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/HomeSeven/PageBanner";

class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>Who We Serve</PageBanner>
        <section className="services-area ptb-100">
          <div className="container">
            <div className="row">
              {[
                {
                  title: "Health Care",
                  caption:
                    "Empowering organizations to deliver better healthcare services through technology",
                  icon: "icofont-pay",
                  src: "/health-care"
                },
                {
                  title: "Digital Commerce",
                  caption:
                    "Redefining e-commerce experiences with scalable and robust platforms",
                  icon: "icofont-pay",
                  src: "/digital-commerce"
                },
                {
                  title: "Travel And Transportation",
                  caption:
                    "Scalable solutions for the ever-moving travel and transportation businesses Excel in your journey",
                  icon: "icofont-pay",
                  src: "/travel-and-transportation"
                },
                {
                  title: "Real Estate",
                  caption:
                    "Bridging the gap between users and real estate businesses through technology",
                  icon: "icofont-pay",
                  src: "/real-estate"
                }
              ].map((e, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <a href={e.src}>
                    <div className="single-services">
                      <div className="icon">
                        <i className={e.icon} />
                      </div>
                      <h3>{e.title}</h3>
                      <p>{e.caption}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Services;
