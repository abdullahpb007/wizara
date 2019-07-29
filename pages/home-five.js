import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/HomeFive/Banner';
import Partner from '../components/HomeFive/Partner';
import Features from '../components/HomeFive/Features';
import Overview from '../components/HomeFive/Overview';
import CtaCard from '../components/HomeFive/CtaCard';
import SaasTools from '../components/HomeFive/SaasTools';
import Funfact from '../components/HomeFive/Funfact';
import GetStarted from '../components/HomeFive/GetStarted';
import Blog from '../components/HomeFive/Blog';
import Download from '../components/HomeFive/Download';
import Platform from '../components/HomeFive/Platform';

class HomeFive extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
               <Banner />
               <Partner />
               <Features />
               <Overview />
               <CtaCard />
               <SaasTools />
               <Funfact />
               <GetStarted />
               <Blog />
               <Download />
               <Platform />

               <Footer />
            </React.Fragment>
        );
    }
}

export default HomeFive;
