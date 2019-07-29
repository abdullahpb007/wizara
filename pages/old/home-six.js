import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/HomeSix/Banner';
import Partner from '../components/HomeSix/Partner';
import Discover from '../components/HomeSix/Discover';
import Features from '../components/HomeSix/Features';
import Funfact from '../components/HomeSix/Funfact';
import Screenshot from '../components/HomeSix/Screenshot';
import Team from '../components/HomeSix/Team';
import Pricing from '../components/HomeSix/Pricing';
import Feedback from '../components/HomeSix/Feedback';
import Blog from '../components/HomeSix/Blog';
import Platform from '../components/HomeSix/Platform';
import Subscribe from '../components/HomeSix/Subscribe';

class HomeSix extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
               <Banner />
               <Partner />
               <Discover />
               <Features />
               <Funfact />
               <Screenshot />
               <Team />
               <Pricing />
               <Feedback />
               <Blog />
               <Subscribe />
               <Platform />

               <Footer />
            </React.Fragment>
        );
    }
}

export default HomeSix;
