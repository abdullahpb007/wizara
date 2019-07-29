import React, { Component } from 'react';
import axios from 'axios';

class CareerEditorContent extends Component {
    state = {
        selectedTitle: null,
        selectedSkills: null,
        selectedResponsibility: null,
        selectedSeniority: null,
        selectedCategory: null,
        categories: [],
    }
    componentDidMount() {
        this.getCategories();
    }
    getCategories = () => {
        axios.get('https://wizaracmsapi.abdullahpb007.now.sh/careerCategory')
            .then(res => {
                this.setState({
                    categories: res.data
                });
                console.log(res.data)
            })
    }
    titleChangeHandler = event => {
        this.setState({
            selectedTitle: event.target.value
        })
    }
    skillsChangeHandler = event => {
        this.setState({
            selectedSkills: event.target.value
        })
    }
    responsibilityChangeHandler = event => {
        this.setState({
            selectedResponsibility: event.target.value
        })
    }
    seniorityChangeHandler = event => {
        this.setState({
            selectedSeniority: event.target.value
        })
    }
    categoryChangeHandler = event => {
        this.setState({
            selectedCategory: event.target.value
        })
    }
    handleSubmit = () => {
        let data = {
            category_id: this.state.selectedCategory,
            title: this.state.selectedTitle,
            requiredSkills: this.state.selectedSkills,
            responsibility: this.state.selectedResponsibility,
            seniority: this.state.selectedSeniority
        }
        console.log(data)

        axios.post('https://wizaracmsapi.abdullahpb007.now.sh/career', data)
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
                                <h3>Add Career</h3>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 select-box">
                                        <div className="form-group">
                                            <select className="form-control" onChange={this.categoryChangeHandler}>
                                                {this.state.categories.map(data => {
                                                    return (
                                                        <option value={data._id} key={data._id}>{data.title}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Title" onChange={this.titleChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Required Skills" onChange={this.skillsChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Responsibilities" onChange={this.responsibilityChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Seniority" onChange={this.seniorityChangeHandler} />
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

export default CareerEditorContent;
