import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../images/Landing/productEngineering.json';

class ProductEngineering extends Component {


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
                    height="400px"
                />
            </div>
        )
    }
}

export default ProductEngineering