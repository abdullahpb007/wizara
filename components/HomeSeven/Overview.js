import React, { Component } from "react";
import Link from "next/link";
import ProductEngineering from "../Lottie/productEngineering";
import ProcessAutomation from "../Lottie/processAutomation";
class Overview extends Component {
  render() {
    return (
      <section className="overview-section ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>How We Can Help</h2>
          </div>
          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-img">
                <img
                  src={require("../../images/marketing-1.png")}
                  alt="image"
                />
                {/* <ProductEngineering /> */}
              </div>

              <div className="col-lg-6 col-md-6 overview-content">
                <div className="icon">
                  <i className="icofont-addons" />
                </div>
                <h3>Product Engineering</h3>
                <p>
                  From ideation to requirement analysis and development to
                  maintenance, get the entire range of software product
                  engineering life cycle delivered under one roof.
                </p>

                <ul>
                  <li>Product Ideation</li>
                  <li>Product Architecture</li>
                  <li>Product Design</li>
                </ul>
                <Link href="./product-engineering">
                  <a className="btn btn-primary">Read More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-content">
                <div className="icon">
                  <i className="icofont-bullseye" />
                </div>
                <h3>Process Automation</h3>
                <p>
                  Automate your business processes to create efficiencies at a
                  large scale delivering hyper growth, backed by data driven
                  software solutions.
                </p>

                <ul>
                  <li>Simplicity</li>
                  <li>Increase Service Quality</li>
                  <li>Improve Service Delivery</li>
                </ul>
                <Link href="./process-automation">
                  <a className="btn btn-primary">Read More</a>
                </Link>
              </div>

              <div className="col-lg-6 col-md-6 overview-img">
                {/* <img
                  src={require("../../images/marketing-2.png")}
                  alt="image"
                /> */}
                <ProcessAutomation />
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

export default Overview;
