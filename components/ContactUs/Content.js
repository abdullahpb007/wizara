import React, { Component } from "react";
import Link from "next/link";

class Content extends Component {
  render() {
    return (
      <section className="contact-info-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="icofont-email" />
                </div>
                <h3>Mail Here</h3>
                <p>
                  <Link href="#">
                    <a> contact@wizarainfotech.com</a>
                  </Link>
                </p>
                <p>
                  <Link href="#">
                    <a> meetwahab@wizarainfotech.com</a>
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="icofont-google-map" />
                </div>
                <h3>Visit Here</h3>
                <p>AJ 59,10th Main Road, Anna Nagar Chennai 600 040</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="icofont-phone" />
                </div>
                <h3>Call Here</h3>
                <p>
                  <Link href="#">
                    <a>(+91) 95001 70719</a>
                  </Link>
                </p>
                <p>
                  <Link href="#">
                    <a>(+91) 86809 48372</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
