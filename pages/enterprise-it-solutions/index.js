import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/HomeSeven/PageBanner";
import Link from "next/link";
import Footer from "../../components/Layouts/Footer";

class Travel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>Enterprise IT Solutions</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>Enterprise IT Solutions</h2>
                    <div className="bar" />
                    <p>
                      Intelligent enterprise IT solutions to help you
                      achieve more efficiency & cost savings. WiZARA helps
                      organizations across industries transform their
                      digital ecosystem, and run their operations more
                      efficiently by developing, integrating and maintaining
                      intelligent software solutions.
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
                  <h2>Our enterprise IT solutions Expertise</h2>
                </div>
              </div>
              <div className="row">
                {[
                  {
                    title: "Robotic Process Automation",
                    subtitle:
                      "Get professional consultation and supportive software to digitize your workforce, enabling efficiency at large scale.",
                      src: "/enterprise-it-solutions/robotic-process-automation"
                  }
                ].map((val, ind) => (
                  <div className="col-lg-4 col-md-6" key={ind}>
                    <Link href={val.src || null}>
                      <div className="single-services">
                        <div className="icon">
                          <i className="icofont-music-note" />
                        </div>
                        <h3>{val.title}</h3>
                        <p>{val.subtitle ? val.subtitle : ""}</p>
                      </div>
                    </Link>
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
