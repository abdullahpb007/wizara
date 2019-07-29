import React, { Component } from 'react';

class DetailsContent extends Component {
    render() {
        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-details">
                                {/* <a href="./blog-editor"><button type="submit" className="btn btn-primary"> Edit</button></a> */}
                                <div className="article-img">
                                    <img src={require('../../images/blog-details.jpg')} alt="blog-details" />
                                    <div className="date">20 <br /> Jan</div>
                                </div>

                                <div className="article-content">
                                    <ul className="category">
                                        <li><a href="#">IT</a></li>
                                        <li><a href="#">Mobile</a></li>
                                        <li><a href="#">Marketing</a></li>
                                        <li><a href="#">Design</a></li>
                                        <li><a href="#">Development</a></li>
                                    </ul>

                                    <h3>The Fastest Growing Apps in 2019</h3>

                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In necessitatibus provident facere, reiciendis voluptate dolorem iste consectetur veniam aperiam suscipit ad ipsum et labore a repellendus debitis explicabo quisquam obcaecati....</p>

                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>

                                    <blockquote className="blockquote">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate.</p>
                                    </blockquote>

                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>

                                    <div className="share-post">
                                        <ul>
                                            <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                            <li><a href="#"><i className="icofont-linkedin"></i></a></li>
                                            <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                            <li><a href="#"><i className="icofont-vimeo"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="post-controls-buttons">
                                <div className="controls-left">
                                    <a href="#"><i className="icofont-double-left"></i> Prev Post</a>
                                </div>

                                <div className="controls-right">
                                    <a href="#">Next Post <i className="icofont-double-right"></i></a>
                                </div>
                            </div>

                            <div className="post-comments">
                                <h3>Comments</h3>
                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src={require('../../images/client1.jpg')} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>John Smith</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="#">Reply</a>
                                    </div>
                                </div>

                                <div className="single-comment left-m">
                                    <div className="comment-img">
                                        <img src={require('../../images/client2.jpg')} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>Doe John</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="#">Reply</a>
                                    </div>
                                </div>

                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src={require('../../images/client3.jpg')} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>Steven Doe</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="#">Reply</a>
                                    </div>
                                </div>

                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src={require('../../images/client4.jpg')} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>John Cina</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>

                            <div className="leave-a-reply">
                                <h3>Leave a Reply</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Full Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="E-Mail" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="comment" cols="30" rows="5" className="form-control" placeholder="Your Comment" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailsContent;
