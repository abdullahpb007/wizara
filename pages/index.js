import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/HomeSeven/Banner";
import Partner from "../components/HomeSeven/Partner";
import Features from "../components/HomeSeven/Features";
import Overview from "../components/HomeSeven/Overview";
import Funfact from "../components/HomeSeven/Funfact";
import SaasTools from "../components/HomeSeven/SaasTools";
import Works from "../components/HomeSeven/Works";
import Team from "../components/HomeSeven/Team";
import Pricing from "../components/HomeSeven/Pricing";
import Download from "../components/HomeSeven/Download";
import Blog from "../components/HomeSeven/Blog";
import CtaCard from "../components/HomeSeven/CtaCard";
import Feedback from "../components/HomeSeven/Feedback";
import GetStarted from "../components/HomeSeven/GetStarted";
import Platform from "../components/HomeSeven/Platform";
import ServiceContent from "../components/Services/ServiceContent";

class HomeSeven extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <Overview />
        <Features />
        {/* <Partner />
               <Features />
               <Overview />
               <Funfact />
               <SaasTools />
               <Works />
               <Team />
               <Pricing />
               <Download />
               <Blog />
               <CtaCard />
               <Feedback />
               <GetStarted /> 
        <Platform /> */}

        <Footer />
      </React.Fragment>
    );
  }
}

export default HomeSeven;
