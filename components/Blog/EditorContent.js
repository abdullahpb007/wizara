import React, { Component } from 'react';
import axios from 'axios';
import Blog from '../HomeSeven/Blog';

class DetailsContent extends Component {
    state = {
        selectedTitle: null,
        selectedFile: null,
        selectedTextArea: null,
        finalImage: null,
        summaImg: null,
        datas: null
    }
    fileChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }
    titleChangeHandler = event => {
        this.setState({
            selectedTitle: event.target.value
        })
    }
    textAreaChangeHandler = event => {
        this.setState({
            selectedTextArea: event.target.value
        })
    }
    handleSubmit = () => {
        if (this.state.selectedFile) {
            let reader = new FileReader();
            reader.readAsDataURL(this.state.selectedFile);
            let img = null;
            let data = null;
            reader.onload = e => {
                // console.log(e.target.result)
                // img = { file: e.target.result }
                data = {
                    title: this.state.selectedTitle,
                    image: e.target.result,
                    content: this.state.selectedTextArea
                }
                axios.post('https://wizaracmsapi.abdullahpb007.now.sh/blog', data)
                    .then(res => {
                        console.log(res)
                    });
            }
        }
        else {
            alert("Please add an image")
        }

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
                                <h3>Blog Editor</h3>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Blog Title" onChange={this.titleChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="file" className="form-control" onChange={this.fileChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="comment" cols="30" rows="5" className="form-control" placeholder="Content" onChange={this.textAreaChangeHandler} />
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
