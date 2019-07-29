import React, { Component } from "react";
import Link from "next/link";

class Features extends Component {
  render() {
    return (
      <section className="features-area payment-processing-features ptb-100">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="features-holder-content">
                <div className="section-title">
                  <h2>WHY WIZARA ?</h2>
                  <div className="bar" />
                  <p>
                    WiZARA is a trusted software product engineering and Process
                    Automation across the globe. What distinguishes us from the
                    rest is our ability to look beyond technologies and deliver
                    innovative and progressive solutions. We innovate with
                    latest technologies, design approaches and development
                    methodologies to build cutting edge software products.
                  </p>
                </div>

                <p>
                  <b>
                    Experience our all new holistic approach to software
                    engineering
                  </b>
                </p>
                <Link href="#">
                  <a className="btn btn-primary">Read More</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-holder-box">
                    <img
                      src={require("../../images/why-wizara-image-1.png")}
                      alt="image"
                    />
                    <h3>Technology Agility</h3>
                    <p>Ability to Quickly Adapt New Technologies</p>
                  </div>

                  <div className="single-holder-box mt-30">
                    <img
                      src={require("../../images/why-wizara-image-2.png")}
                      alt="image"
                    />
                    <h3>Cross Functional Teams</h3>
                    <p>
                      Individuals with different roles. who work in sync with
                      each other
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-holder-box mt-50">
                    <img
                      src={require("../../images/why-wizara-image-3.png")}
                      alt="image"
                    />
                    <h3>Stringent Development Processes</h3>
                    <p>
                      Embraced Proven Agile Development Methodology and DevOps
                    </p>
                  </div>

                  <div className="single-holder-box mt-30">
                    <img
                      src={require("../../images/why-wizara-image-4.png")}
                      alt="image"
                    />
                    <h3>Research And Development</h3>
                    <p>Continuous experiment with latest technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape7">
          <img src={require("../../images/shape7.png")} alt="shape" />
        </div>
        <div className="shape3">
          <img src={require("../../images/shape3.png")} alt="img" />
        </div>
        <div className="bg-gray shape-1" />
        <div className="shape6">
          <img src={require("../../images/shape6.png")} alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src={require("../../images/shape8.svg")} alt="shape" />
        </div>
        <div className="shape9">
          <img src={require("../../images/shape9.svg")} alt="shape" />
        </div>
        <div className="shape10">
          <img src={require("../../images/shape10.svg")} alt="shape" />
        </div>
        <div className="shape11 rotateme">
          <img src={require("../../images/shape11.svg")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Features;
