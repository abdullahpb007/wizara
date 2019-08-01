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
        <PageBanner>Mobile app developement</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>Mobile App Development Company</h2>
                    <div className="bar" />
                    <p>
                      We create powerful and intuitive mobile experiences
                      that are an outcome of your user psychology, digital
                      behavior, key pain points and your business model. We
                      have helped our clients grow revenue, boost brand
                      engagement and launch new digital businesses on global
                      platform.
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
                  <h2>Our Mobile App Development Expertise</h2>
                </div>
              </div>
              <div className="row">
                {[
                  {
                    title: "m-Commerce",
                    subtitle:
                      "Embed future trends and functionalities in your m-commerce application that help you provide a superior customer experience, foster loyalty, generate more revenue and build a positive brand affinity."
                  },
                  {
                    title: "Internet of Things",
                    subtitle:
                      "Develop connected and context aware applications across different markets such as smart cities, smart homes, automotive, healthcare, etc. that connect high-end devices and sensors with mobile apps."
                  },
                  {
                    title: "On Demand Service Apps",
                    subtitle:
                      "Develop on-demand service booking applications with customer app, service provider app, admin panel and analytic panel for verticals like taxi booking, ride sharing, medicine delivery, real estate marketplaces, grocery delivery, etc."
                  },
                  {
                    title: "AR/VR Applications",
                    subtitle:
                      "Develop addictive applications using augmented reality, virtual reality, and mixed reality for smartphones, tablets, headset devices, and wearable devices."
                  },
                  {
                    title: "Marketplaces",
                    subtitle:
                      "Custom online marketplaces to connect users and businesses, embedded with your business logic, intuitive UI/UX and features that will vow your users at every stage."
                  },
                  {
                    title: "Enterprise Mobility",
                    subtitle:
                      "Build digital workplace for your workforce to boost productivity and gain competitive advantage, while adhering to security frameworks and technology life cycles.",
                    src:
                      "mobile-app-developement/enterprise-mobility-service"
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
                        {val.src && (
                          <Link href={val.src || null}>
                            <a className="read-more-btn">
                              Read More
                              <i className="icofont-rounded-double-right" />
                            </a>
                          </Link>
                        )}
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
