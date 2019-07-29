import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../images/Landing/data.json';

class HomeBanner extends Component {


    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div>
                <Lottie options={defaultOptions}
                />
            </div>
        )
    }
}

export default HomeBanner