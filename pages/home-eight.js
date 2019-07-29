import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/HomeEight/Banner';
import Boxes from '../components/HomeEight/Boxes';
import Features from '../components/HomeEight/Features';
import WorkProcess from '../components/HomeEight/WorkProcess';
import Services from '../components/HomeEight/Services';
import Overview from '../components/HomeEight/Overview';
import CtaCard from '../components/HomeEight/CtaCard';
import GetStarted from '../components/HomeEight/GetStarted';
import Platform from '../components/HomeEight/Platform';
import Team from '../components/HomeEight/Team';
import Partner from '../components/HomeEight/Partner';

class HomeSeven extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
               <Banner />
               <Boxes />
               <Features />
               <WorkProcess />
               <Services />
               <Overview />
               <CtaCard />
               <GetStarted />
               <Platform />
               <Team />
               <Partner />

               <Footer />
            </React.Fragment>
        );
    }
}

export default HomeSeven;
