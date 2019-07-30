import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/HomeSeven/PageBanner";
import Link from "next/link";
import Footer from "../../components/Layouts/Footer";

class WebAppDevelopement extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>Web app developement</PageBanner>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="section-title">
                    <h2>Web App Development Company</h2>
                    <div className="bar" />
                    <p>
                      Develop fluidly responsive and performance obsessed web
                      applications. Build reactive, scalable and real time web
                      applications in a most optimal time frame and investments
                      by leveraging dynamic technologies, modern design patterns
                      and agile methodologies.
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
                  <h2>Our Web App Development Expertise</h2>
                </div>
              </div>
              <div className="row">
                {[
                  {
                    title: "Social Media Applications",
                    subtitle:
                      "Develop interactive social networking applications with desired interactivity and user-interface having features such as user-profile, chat, notifications, location sharing, forums and so on..",
                    src: "/web-app-developement/social-media-application"
                  },
                  {
                    title: "On-Demand Service Applications",
                    subtitle:
                      "Develop on-demand service booking applications with customer app, service provider app, admin panel and analytic panel for verticals such as taxi booking, ride sharing, medicine delivery, grocery delivery, laundry services etc.."
                  },
                  {
                    title: "Custom ERP Solutions",
                    subtitle:
                      "Development of cloud based custom business management software containing automated workflows, procedures, control-flow conditions, and single view of entire MIS.",
                    src: "/web-app-developement/custom-erp-solution"
                  },
                  {
                    title: "Custom CMS Development",
                    subtitle:
                      "Comprehensive and user friendly CMS software to create, edit, manage, delete, review, publish and unpublish content and images in a consistently organized manner."
                  },
                  {
                    title: "Software Maintenance and Support",
                    subtitle:
                      "Preventive and pro-active software maintenance and support services to ensure that your application stays in line with the latest technologies and features."
                      ,src:"/web-app-developement/software-maintenance-and-support"
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

export default WebAppDevelopement;
