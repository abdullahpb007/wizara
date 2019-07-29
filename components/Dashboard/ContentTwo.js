import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
const images = [
    require('../../images/work-img1.jpg'),
    require('../../images/work-img2.jpg'),
    require('../../images/work-img3.jpg'),
    require('../../images/work-img4.jpg'),
    require('../../images/work-img5.jpg'),
    require('../../images/work-img6.jpg')
]

class ContentTwo extends Component {

    state = {
        photoIndex: 0,
        isOpenImage: false
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <section className="project-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <Link href="./blog-editor"><a>
                                <div className="single-project" style={{ width: "300px" }}>
                                    <div className="project-content">
                                        <span>Add New</span>
                                        <h3>Blog</h3>
                                    </div>
                                </div>
                            </a></Link>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <Link href="./career-catagory-editor"><a>
                                <div className="single-project" style={{ width: "300px" }}>
                                    <div className="project-content">
                                        <span>Add New</span>
                                        <h3>Career Catagory</h3>
                                    </div>
                                </div>
                            </a></Link>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <Link href="./career-editor"><a>
                                <div className="single-project" style={{ width: "300px" }}>
                                    <div className="project-content">
                                        <span>Add New</span>
                                        <h3>Career</h3>
                                    </div>
                                </div>
                            </a></Link>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default ContentTwo;
