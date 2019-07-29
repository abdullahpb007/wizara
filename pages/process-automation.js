import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/HomeSeven/PageBanner";
import Footer from "../components/Layouts/Footer";

class ProductEngineering extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>Process Automation</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>
                      Transform your organization into an intelligent digital
                      workforce
                    </h2>
                    <div className="bar" />
                    <p>
                      Maximize ROI by discovering new automation ideas, and
                      implementing end- to-end business process automation
                      software that are completely custom built, flexible,
                      centralized and user friendly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <img src={require("../images/marketing.png")} alt="image" />
              </div>
            </div>
          </div>
        </section>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <img src={require("../images/marketing.png")} alt="image" />
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <p>
                      WiZARA provides professional consultation and supportive
                      software to orchestrate and integrate processes, systems
                      and information to create uniform, streamlined, and
                      efficient business processes.
                    </p>
                    <ul style={{ marginTop: 10 }}>
                      <li>
                        Automating operative business processes, including
                        workforce management, inventory management, invoice
                        processing, data retrieval, and report generation etc.
                      </li>
                      <li>
                        Custom solutions entailing technology adoption such as
                        mobile enablement, SaaS product development, analytics
                        applications, business management solutions, etc.
                      </li>
                      <li>
                        Development of cloud based custom business management
                        software where task is designed as a workflow containing
                        procedures, control-flow conditions, and triggers for a
                        specific environment.
                      </li>
                      <li>
                        Modernization, mobilization or technology upgradation of
                        existing web interfaces, integration layers for
                        mobilization of legacy web systems.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>SIGN UP FOR A CONSULTATION</h2>
              <div className="bar" />
            </div>
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <p>
                      See how WiZARA can improve your business process. Our
                      consultation includes:
                    </p>
                    <ul>
                      <li>Discovering new process automation idea</li>
                      <li>Best technology stack to build your solution</li>
                      <li>Ballpark estimates and time frame of development</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          required={true}
                          data-error="Please enter your name"
                          placeholder="Name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          required={true}
                          data-error="Please enter your email"
                          placeholder="Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="5"
                          required
                          data-error="Write your message"
                          placeholder="Your Message"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                      <div id="msgSubmit" className="h3 text-center hidden" />
                      <div className="clearfix" />
                    </div>
                  </div>
                </form>
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
