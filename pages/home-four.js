import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/HomeFour/Banner';
import Features from '../components/HomeFour/Features';
import NewFeatures from '../components/HomeFour/NewFeatures';
import VirtualReality from '../components/HomeFour/VirtualReality';
import Overview from '../components/HomeFour/Overview';
import WorkProcess from '../components/HomeFour/WorkProcess';
import Works from '../components/HomeFour/Works';
import LatestProducts from '../components/HomeFour/LatestProducts';
import Blog from '../components/HomeFour/Blog';
import Feedback from '../components/HomeFour/Feedback';
import Download from '../components/HomeFour/Download';
import Platform from '../components/HomeFour/Platform';

class HomeFour extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
               <Banner />
               <Features />
               <NewFeatures />
               <VirtualReality />
               <Overview />
               <WorkProcess />
               <Works />
               <LatestProducts />
               <Blog />
               <Feedback />
               <Download />
               <Platform />

               <Footer />
            </React.Fragment>
        );
    }
}

export default HomeFour;
