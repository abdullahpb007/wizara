import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/HomeTwo/Banner';
import Partner from '../components/HomeTwo/Partner';
import Features from '../components/HomeTwo/Features';
import AppWorks from '../components/HomeTwo/AppWorks';
import Overview from '../components/HomeTwo/Overview';
import Funfact from '../components/HomeTwo/Funfact';
import SaasTools from '../components/HomeTwo/SaasTools';
import Screenshot from '../components/HomeTwo/Screenshot';
import Team from '../components/HomeTwo/Team';
import PricingPlan from '../components/HomeTwo/PricingPlan';
import Download from '../components/HomeTwo/Download';
import Blog from '../components/HomeTwo/Blog';
import Feedback from '../components/HomeTwo/Feedback';
import Subscribe from '../components/HomeTwo/Subscribe';

class HomeTwo extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
               <Banner />
               <Partner />
               <Features />
               <AppWorks />
               <Overview />
               <Funfact />
               <SaasTools />
               <Screenshot />
               <Team />
               <PricingPlan />
               <Download />
               <Blog />
               <Feedback />
               <Subscribe />

               <Footer />
            </React.Fragment>
        );
    }
}

export default HomeTwo;
