import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/HomeSeven/PageBanner";
import Link from "next/link";
// import healthcare from "../images/who-we-serve/hover/tele-health-Solutions.png";
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
                  icon: "health-care",
                  src: "/health-care"
                },
                {
                  title: "Digital Commerce",
                  caption:
                    "Redefining e-commerce experiences with scalable and robust platforms",
                  icon: "digital-commerce",
                  src: "/digital-commerce"
                },
                {
                  title: "Travel And Transportation",
                  caption:
                    "Scalable solutions for the ever-moving travel and transportation businesses Excel in your journey",
                  icon: "travel",
                  src: "/travel-and-transportation"
                },
                {
                  title: "Real Estate",
                  caption:
                    "Bridging the gap between users and real estate businesses through technology",
                  icon: "real-estate",
                  src: "/real-estate"
                }
              ].map((e, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <a href={e.src}>
                    <div
                      className="single-services"
                      onMouseOver={eve =>
                        (this.refs[
                          "hoverImage" + i
                        ].src = require("../images/who-we-serve/hover/" +
                          e.icon +
                          ".png"))
                      }
                      onMouseOut={eve =>
                        (this.refs[
                          "hoverImage" + i
                        ].src = require("../images/who-we-serve/icon/" +
                          e.icon +
                          ".png"))
                      }
                    >
                      <div className="icon">
                        <img
                          ref={"hoverImage" + i}
                          src={require("../images/who-we-serve/icon/" +
                            e.icon +
                            ".png")}
                        />
                      </div>
                      <h3>{e.title}</h3>
                      <p>{e.caption}</p>
                      {e.src && (
                        <Link href={e.src || null}>
                          <a className="read-more-btn">
                            Read More
                            <i className="icofont-rounded-double-right" />
                          </a>
                        </Link>
                      )}
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
