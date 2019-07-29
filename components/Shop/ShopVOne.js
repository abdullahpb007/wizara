import React, { Component } from 'react';
import Link from 'next/link';

class ShopVOne extends Component {
    render() {
        return (
            <section className="product-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="woocommerce-topbar">
                                <div className="row h-100 justify-content-center align-items-center">
                                    <div className="col-lg-9 col-md-7">
                                        <div className="woocommerce-result-count">
                                            <p>Showing 1–9 of 11 results</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-5">
                                        <div className="woocommerce-topbar-ordering">
                                            <form>
                                                <div className="select-box">
                                                    <select className="form-control">
                                                        <option value="1">Sort by Popularity</option>
                                                        <option value="2">Sort by Average Rating</option>
                                                        <option value="0">Sort by Latest</option>
                                                        <option value="3">Sort by price: Low to High</option>
                                                        <option value="4">Sort by price: High to Low</option>
                                                        <option value="5">Sort by New</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-product">
                                <div className="product-img">
                                    <img src={require('../../images/shop-item1.jpg')} alt="item" />

                                    <Link href="#">
                                        <a className="add-to-cart-btn">
                                            Add to Cart <i className="icofont-shopping-cart"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-product">
                                <div className="product-img">
                                    <img src={require('../../images/shop-item2.jpg')} alt="item" />

                                    <Link href="#">
                                        <a className="add-to-cart-btn">
                                            Add to Cart <i className="icofont-shopping-cart"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-product">
                                <div className="product-img">
                                    <img src={require('../../images/shop-item3.jpg')} alt="item" />

                                    <Link href="#">
                                        <a className="add-to-cart-btn">
                                            Add to Cart <i className="icofont-shopping-cart"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-product">
                                <div className="product-img">
                                    <img src={require('../../images/shop-item4.jpg')} alt="item" />

                                    <Link href="#">
                                        <a className="add-to-cart-btn">
                                            Add to Cart <i className="icofont-shopping-cart"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-product">
                                <div className="product-img">
                                    <img src={require('../../images/shop-item5.jpg')} alt="item" />

                                    <Link href="#">
                                        <a className="add-to-cart-btn">
                                            Add to Cart <i className="icofont-shopping-cart"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-product">
                                <div className="product-img">
                                    <img src={require('../../images/shop-item6.jpg')} alt="item" />

                                    <Link href="#">
                                        <a className="add-to-cart-btn">
                                            Add to Cart <i className="icofont-shopping-cart"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
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
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShopVOne;
