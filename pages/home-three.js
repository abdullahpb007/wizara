import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/HomeThree/Banner';
import Partner from '../components/HomeThree/Partner';
import Features from '../components/HomeThree/Features';
import Services from '../components/HomeThree/Services';
import Overview from '../components/HomeThree/Overview';
import Join from '../components/HomeThree/Join';
import AnalysisForm from '../components/HomeThree/AnalysisForm';
import Funfact from '../components/HomeThree/Funfact';
import Works from '../components/HomeThree/Works';
import Team from '../components/HomeThree/Team';
import Pricing from '../components/HomeThree/Pricing';
import Blog from '../components/HomeThree/Blog';
import Feedback from '../components/HomeThree/Feedback';
import GetStarted from '../components/HomeThree/GetStarted';
import Platform from '../components/HomeThree/Platform';

class HomeThree extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
               <Banner />
               <Partner />
               <Features />
               <Services />
               <Overview />
               <Join />
               <AnalysisForm />
               <Funfact />
               <Works />
               <Team />
               <Pricing />
               <Blog />
               <Feedback />
               <GetStarted />
               <Platform />
               <Footer />
            </React.Fragment>
        );
    }
}

export default HomeThree;