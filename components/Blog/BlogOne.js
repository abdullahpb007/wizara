import React, { Component } from 'react';
import axios from "axios";

class BlogOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            local: []
        }
    }
    componentDidMount() {
        this.getBlogData();
    }
    getBlogData = () => {
        // console.log("logg")
        axios.get('https://wizaracmsapi.abdullahpb007.now.sh/blog')
            .then(res => {
                this.setState({
                    data: res.data
                })
                this.getId(res.data)
            });
    }
    getId = (res) => {
        let final = [];
        for (let key of res) {
            final.push(key)
        }
        this.setState({
            local: final
        })
    }
    blogMapper = (res) => (
        <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
                <a href="#" className="post-image">
                    <img src={require('../../images/blog-img1.jpg')} alt="blog-image" />
                </a>
                <div className="blog-post-content">
                    <ul>
                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                        <li><i className="icofont-wall-clock"></i> January 23, 2019</li>
                    </ul>
                    <h3><a href="#">The Most Popular New Business Apps</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                </div>
            </div>
        </div>
    )

    render() {
        return (
            <section className="blog-area blog-section ptb-100">
                <div className="container">
                    <div className="row">
                        {/* {this.state.local.map(res => {
                            this.blogMapper(res)
                        })} */}
                        {/* {for(let key in this.state.local){
                            console.log(key)
                        }} */}
                        {this.blogMapper()}

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a href="#" className="post-image">
                                    <img src={require('../../images/blog-img1.jpg')} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 23, 2019</li>
                                    </ul>
                                    <h3><a href="#">The Most Popular New Business Apps</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div> */}


                        {/* <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">

                                        <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-left"></i></a></li>

                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>

                                        <li className="page-item"><a className="page-link" href="#">2</a></li>

                                        <li className="page-item"><a className="page-link" href="#">3</a></li>

                                        <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogOne;
