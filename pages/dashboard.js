import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Shared/Banner';
import ContentTwo from '../components/Dashboard/ContentTwo';

class PortfolioTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner
                    header="Admin Dashboard"
                />
                <ContentTwo />

                <Footer />
            </React.Fragment>
        );
    }
}

export default PortfolioTwo;
