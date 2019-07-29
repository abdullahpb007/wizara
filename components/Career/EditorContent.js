import React, { Component } from 'react';
import axios from 'axios';

class DetailsContent extends Component {
    state = {
        selectedTitle: null,
    }
    titleChangeHandler = event => {
        this.setState({
            selectedTitle: event.target.value
        })
    }
    handleSubmit = () => {
        let data = {
            title: this.state.selectedTitle
        }
        console.log(data)

        axios.post('https://wizaracmsapi.abdullahpb007.now.sh/careerCategory', data)
            .then(res => {
                console.log(res)
            });
    }
    render() {
        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-details">

                            </div>

                            <div className="leave-a-reply">
                                <h3>Add Category</h3>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Title" onChange={this.titleChangeHandler} />
                                        </div>
                                    </div>


                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
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
