import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/HomeSeven/PageBanner";
import Footer from "../../components/Layouts/Footer";

class SocialMediaApplication extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>Robotic Process Automation</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>Enterprise Mobility Services</h2>
                    <div className="bar" />
                    <p>
                      Automate repetitive business processes to boost
                      efficiency and ROI. WiZARA provides professional
                      consultation and supportive software to digitize
                      business processes, enabling efficiency at large
                      scale.
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
                  <h2>Our Robotic Process Automation Services</h2>
                </div>
              </div>
              <div className="row">
                {[
                  {
                    title: "IT Process Automation",
                    subtitle:
                      "Reduce downtime and improve incident management process by automating repetitive and routine IT tasks that involve manual intervention"
                  },
                  {
                    title: "Finance and Accounting Automation",
                    subtitle:
                      "Enable greater productivity and better detection of accounting errors through end to end automation of key accounts processes"
                  },
                  {
                    title: "Customer Engagement Automation",
                    subtitle:
                      "Enhance quality of communication and reduce time-to-contact by automating customer touch points that require manual intervention."
                  },
                  {
                    title: "HR Process Automation",
                    subtitle:
                      "Enhance the efficiency of HR department by freeing employees from tedious manual tasks, and allowing them to focus on complex tasks such as decision making and strategizing."
                  },
                  {
                    title: "Documentation Automation",
                    subtitle:
                      "Free your workforce from documentation-intensive processes by automating the process with help of technologies such as OCR and image automation with 99% accuracy."
                  },
                  {
                    title: "Claim Processing Automation",
                    subtitle:
                      "Automate all layers of administrative, managerial, and customer service functions for fast and error-free claim processing."
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
