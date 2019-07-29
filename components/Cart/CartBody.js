import React, { Component } from 'react';

class CartBody extends Component {

    state = {
        qty1: 1,
        qty2: 1,
        qty3: 1,
        qty4: 1
    };

    render() {
        return (
            <section className="cart-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <form>
                                <div className="cart-table table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Unit Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Remove</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img src={require('../../images/shop-item1.jpg')} alt="item" />
                                                    </a>
                                                </td>

                                                <td className="product-name">
                                                    <a href="#">Smart Watch</a>
                                                </td>

                                                <td className="product-price">
                                                    <span className="unit-amount">$30.00</span>
                                                </td>

                                                <td className="product-quantity">
                                                    <input 
                                                        type="number" 
                                                        className="form-control" 
                                                        value={this.state.qty1}
                                                        onChange={e => this.setState({ qty1: e.target.value })}
                                                    />
                                                </td>

                                                <td className="product-subtotal">
                                                    <span className="subtotal-amount">$30.00</span>
                                                </td>

                                                <td className="product-remove">
                                                    <a href="#"><i className="icofont-ui-delete"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img src={require('../../images/shop-item2.jpg')} alt="item" />
                                                    </a>
                                                </td>

                                                <td className="product-name">
                                                    <a href="#">Smart Watch</a>
                                                </td>

                                                <td className="product-price">
                                                    <span className="unit-amount">$30.00</span>
                                                </td>

                                                <td className="product-quantity">
                                                    <input 
                                                        type="number" 
                                                        className="form-control" 
                                                        value={this.state.qty2}
                                                        onChange={e => this.setState({ qty2: e.target.value })}
                                                    />
                                                </td>

                                                <td className="product-subtotal">
                                                    <span className="subtotal-amount">$30.00</span>
                                                </td>

                                                <td className="product-remove">
                                                    <a href="#"><i className="icofont-ui-delete"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img src={require('../../images/shop-item3.jpg')} alt="item" />
                                                    </a>
                                                </td>

                                                <td className="product-name">
                                                    <a href="#">Smart Watch</a>
                                                </td>

                                                <td className="product-price">
                                                    <span className="unit-amount">$30.00</span>
                                                </td>

                                                <td className="product-quantity">
                                                    <input 
                                                        type="number" 
                                                        className="form-control" 
                                                        value={this.state.qty3}
                                                        onChange={e => this.setState({ qty3: e.target.value })}
                                                    />
                                                </td>

                                                <td className="product-subtotal">
                                                    <span className="subtotal-amount">$30.00</span>
                                                </td>

                                                <td className="product-remove">
                                                    <a href="#"><i className="icofont-ui-delete"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img src={require('../../images/shop-item4.jpg')} alt="item" />
                                                    </a>
                                                </td>

                                                <td className="product-name">
                                                    <a href="#">Smart Watch</a>
                                                </td>

                                                <td className="product-price">
                                                    <span className="unit-amount">$30.00</span>
                                                </td>

                                                <td className="product-quantity">
                                                    <input 
                                                        type="number" 
                                                        className="form-control" 
                                                        value={this.state.qty4}
                                                        onChange={e => this.setState({ qty4: e.target.value })}
                                                    />
                                                </td>

                                                <td className="product-subtotal">
                                                    <span className="subtotal-amount">$30.00</span>
                                                </td>

                                                <td className="product-remove">
                                                    <a href="#"><i className="icofont-ui-delete"></i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="cart-buttons">
                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-7 col-md-7">
                                            <div className="coupon-box">
                                                <input type="text" className="form-control" placeholder="Coupon Code" />
                                                <button type="submit">Apply Coupon Code</button>
                                            </div>
                                        </div>

                                        <div className="col-lg-5 col-md-5 text-right">
                                            <a href="#" className="btn btn-primary">Update Cart</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart-totals">
                                    <h3>Cart Totals</h3>

                                    <ul>
                                        <li>Subtotal: <span>$250.00</span></li>
                                        <li>Total: <span>$250.00</span></li>
                                    </ul>
                                    <a href="#" className="btn btn-primary">Proceed to Checkout</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CartBody;
