import React, { Component } from 'react';
import ImageSlide from './ImageSlide';
import RelatedProducts from './RelatedProducts';
import Description from './Description';

class DetailsBody extends Component {

    state = {
        qty: 1
    };

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <section className="shop-details-area ptb-100">
                <div className="container">
                    <div className="shop-details">
                        <div className="row h-100 justify-content-center align-items-center">
                            <ImageSlide />

                            <div className="col-lg-8 col-md-12">
                                <div className="product-entry-summary">
                                    <h3>Gold Buyer's Survival Manual</h3>
                                    <h4><span>$44.00</span> $30.00</h4>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                    <ul className="product-categories">
                                        <li>Categories:</li>
                                        <li><a href="#">Books</a>,</li>
                                        <li><a href="#">Art</a></li>
                                    </ul>

                                    <form onSubmit={this.onFormSubmit}>
                                        <input 
                                            type="number" 
                                            name="quantity" 
                                            title="Qty" 
                                            value={this.state.qty} 
                                            className="form-control" 
                                            onChange={e => this.setState({ qty: e.target.value })}
                                        />
                                        <button className="btn btn-primary">Add to Cart</button>
                                    </form>

                                    <ul className="share-social">
                                        <li>Share:</li>
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-linkedin"></i></a></li>
                                        <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <Description />


                    </div>
                </div>
                
                <RelatedProducts />
            </section>
        );
    }
}

export default DetailsBody;
