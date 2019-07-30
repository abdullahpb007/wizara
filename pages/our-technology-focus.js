import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/HomeSeven/PageBanner";
import Link from "next/link";

class Technology extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner>Our Technology Focus</PageBanner>
        <section className="services-area ptb-100">
          <div className="container">
            <div className="row">
              {[
                {
                  title: "Software Product Engineering",
                  caption:
                    "Turnkey Product Lifecycle Management (PLM) entailing ideation, MVP development, UI/UX designing, code development, quality assurance, release cycle management and maintenance",
                  icon: "icofont-pay"
                },
                {
                  title: "Legacy Software Modernization",
                  caption:
                    "Re-engineer legacy applications and migrate to latest technology stack with modern UI/UX and features",
                  icon: "icofont-pay"
                },
                {
                  title: "System Integration",
                  caption:
                    "Integration of disparate software system to streamline business processes, real-time information access and intuitive data analysis and visualization",
                  icon: "icofont-pay"
                },
                {
                  title: "DevOps Consulting",
                  caption:
                    "Automate, optimize and monitor project delivery pipeline with our cutting edge DevOps practices entailing zero-touch infrastructure automation, continuous integration and delivery, test automation and cloud adoption",
                  icon: "icofont-pay",
                  src: "/devops-service"
                },
                {
                  title: "Web Application Development",
                  caption:
                    "Clean data visualization, with intuitive visual effects, cutting-edge JavaScript frameworks and libraries, mobile-first and responsive web applications",
                  icon: "icofont-pay",
                  src: "/web-app-developement"
                },
                {
                  title: "Mobile Application Development",
                  caption:
                    "Develop engaging mobile experiences blended with speed, innovation, and quality",
                  icon: "icofont-pay",
                  src: "/mobile-app-developement"
                },
                {
                  title: "Enterprise IT Solutions",
                  caption:
                    "Intelligent enterprise IT solutions to help you achieve more efficiency & cost savings",
                  icon: "icofont-pay",
                  src: "/enterprise-it-solutions"
                }
              ].map((e, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <Link href={e.src || null}>
                    <div className="single-services">
                      <div className="icon">
                        <i className={e.icon} />
                      </div>
                      <h3>{e.title}</h3>
                      <p>{e.caption}</p>
                    </div>
                  </Link>
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

export default Technology;
