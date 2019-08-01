import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/HomeSeven/PageBanner";
import Footer from "../components/Layouts/Footer";

class ProductEngineering extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>Health care software developement</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>Healthcare Software Development</h2>
                    <div className="bar" />
                    <p>
                      Empowering organizations to deliver better healthcare
                      services through technology
                    </p>
                    <p>
                      We enable healthcare organizations and professionals
                      to optimize and re-invent their digital capabilities
                      to address patient needs in a better, collaborative
                      and efficient way, while complying to all healthcare
                      standards.
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
                  <h2>Our healthcare Development Services</h2>
                </div>
              </div>
              <div className="row">
                {[
                  {
                    title: "EMR/EHR Solutions",
                    subtitle: "Custom electronic health record software.",
                    icon: "icofont-heart-beat-alt"
                  },
                  {
                    title: "FITNESS APP",
                    subtitle:
                      " Fitness tracking mobile apps to track activities,weight, exercise routines, diabetes readings, and sleep patterns etc.",
                    icon: "icofont-gym-alt-2"
                  },
                  {
                    title: "Healthcare Information Exchange",
                    subtitle:
                      "Integrating the different stakeholders involved in a patient’s health decision on a common secure and stable platform allowing effective interaction and promoting collaboration.",
                    icon: "icofont-injection-syringe"
                  },
                  {
                    title: "HOSPITAL & PRACTICE MANAGEMENT SOLUTIONS",
                    subtitle:
                      "Custom HIS solutions for managing patient-physician interaction, resource scheduling, patient registration, custom reporting, and MIS reports etc.",
                    icon: "icofont-hospital"
                  },
                  {
                    title: "Tele-health Solutions",
                    subtitle:
                      "Web portals and mobile apps that facilitate remote exchange of data between patients at home and their clinician to assist in diagnosis and monitoring.",
                    icon: "icofont-stethoscope-alt"
                  },
                  {
                    title: "On-Demand Healthcare",
                    subtitle:
                      "  On-demand healthcare models like on-demand doorstep delivery, doctor on-demand or virtual pharmacists can overcome the problems of uneven distribution of clinicians.",
                    icon: "icofont-blood-test"
                  }
                ].map((val, ind) => (
                  <div className="col-lg-4 col-md-6" key={ind}>
                    <div className="single-services">
                      <div className="icon">
                        {<i className={val.icon} />}
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

export default ProductEngineering;
