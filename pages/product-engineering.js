import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/HomeSeven/PageBanner";
import Footer from "../components/Layouts/Footer";

class ProductEngineering extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>Product Engineering</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>
                      Get an unmatched value proposition through our innovation
                      based software product engineering services
                    </h2>
                    <div className="bar" />
                    <p>
                      Develop interactive experiences for your users that are an
                      outcome of exploring, innovating, and composing with
                      latest technologies creating a perfect balance between
                      design and engineering.
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
                    <h2>WiZARA is a Software Engineering specialists</h2>
                    <p>
                      who can consult and shape your product as per the latest
                      trends, features, and compliance in your industry. Our
                      product engineering teams own the complete software
                      development life cycle of your product to deliver an
                      experience that wows your users at every level.
                    </p>
                    <ul style={{ marginTop: 10 }}>
                      <li>
                        End to end software engineering services from concept to
                        requirement analysis, product UI/UX design, product
                        architecture, development, testing, product release and
                        maintenance.
                      </li>
                      <li>
                        Custom solutions entailing technology adoption such as
                        mobile enablement, SaaS product development, analytics
                        applications, business management solutions, etc.
                      </li>
                      <li>
                        Development of interactive web and mobile applications
                        using Augmented Reality, virtual reality, IoT for
                        smartphones, tablets, headset devices, wearable
                        technologies, and other devices.
                      </li>
                      <li>
                        Migration or upgradation of legacy applications to newer
                        technologies and features to boost user experience
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
                      See how WiZARA can help you build bespoke software
                      products. Our consultation includes:
                    </p>
                    <ul>
                      <li>Recommendation on best technologies</li>
                      <li>Ballpark estimates and time frame of development</li>
                      <li>
                        Best practices that can be applied to increase user
                        engagement
                      </li>
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
