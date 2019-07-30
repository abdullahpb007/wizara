import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/HomeSeven/PageBanner";
import Footer from "../components/Layouts/Footer";

class Travel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>DevOps Consulting</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>DevOps as a Service</h2>
                    <div className="bar" />
                    <p>
                      Automate, optimize and monitor project delivery
                      pipeline with our cutting edge DevOps practices
                      entailing zero-touch infrastructure automation,
                      continuous integration and delivery, test automation
                      and cloud adoption
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
                  <h2>DevOps as a Service: Key Offerings</h2>
                </div>
              </div>
              <div className="row">
                {[
                  {
                    title: "Infrastructure as a Code (IaC)",
                    subtitle:
                      "Lower the costs of experimentation and innovation, enable better testing and quality control, more efficient and predictable deployments by leveraging our IaC services."
                  },
                  {
                    title:
                      "Microservices Consulting and Architecture Design",
                    subtitle:
                      "Develop robust and exponentially scalable applications with our expertise in designing small, focus microservices that that speed up implementation and improve resiliency."
                  },
                  {
                    title: "Cloud Native CI/CD",
                    subtitle:
                      "Combine cloud native concepts and our IoC services to quickly create decoupled pipelines for new services that are readily deployed into your application, which are driven by code."
                  },
                  {
                    title: "Automation Testing",
                    subtitle:
                      "Efficiently launch new applications or release software updates faster with our end-to-end automation testing services spanning across an array of devices, browsers, platforms and technologies."
                  },
                  {
                    title: "Software Release Automation",
                    subtitle:
                      "Ensure end-to-end traceability and accountability across the enterprise ecosystem with release planning, release monitoring, release automation, and continuous release management."
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

export default Travel;
