import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/HomeSeven/PageBanner";
import Footer from "../../components/Layouts/Footer";

class SocialMediaApplication extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>Social Media Applications</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>Social Media App Development</h2>
                    <div className="bar" />
                    <p>
                      Develop interactive social networking applications
                      with desired interactivity and user- interface having
                      features such as user-profile, chat, notifications,
                      location sharing, forums and so on.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <img src={require("../../images/marketing.png")} alt="image" />
              </div>
            </div>
          </div>
          <div className="about-inner-area">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 section-title">
                  <h2>Our Social Media App Development Services</h2>
                </div>
              </div>
              <div className="row">
                {[
                  {
                    title: "UI/UX Designing",
                    subtitle:
                      "Grab users attention by offering intuitive UI/UX design, cross platform availability, engaging experience with push notifications, email publishing and check-in facility."
                  },
                  {
                    title: "App Integrations",
                    subtitle:
                      "Enable full fledged interactions within the application, by integrating with existing social media platforms such as Facebook, Instagram, Pinterest etc."
                  },
                  {
                    title: "Gamification",
                    subtitle:
                      "Include gamification such as reward points, virtual money etc. in order to increase user engagement and make your social media application addictive."
                  },
                  {
                    title: "Social Commerce Integration",
                    subtitle:
                      "Add an extra level of convenience with peer-to-peer payment features that enable users to save their bank details securely for easy and quick money transfers to other individuals."
                  },
                  {
                    title: "AR/VR Integrated Video Streaming",
                    subtitle:
                      "Offer live video streaming options in integration with AR/VR that leverage real-time interactions and enhance user experience such as 360 degree videos on Facebook."
                  },
                  {
                    title: "Privacy and Security Solutions",
                    subtitle:
                      "Allow users to interact without any fear of intrusion in their privacy by building secure social media platform with the use of encryption in transit and storage of personal information."
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
