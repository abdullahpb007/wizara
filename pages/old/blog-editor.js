import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import BannerThree from '../components/Blog/BannerThree';
import EditorContent from '../components/Blog/EditorContent';

class BlogEditor extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <BannerThree />
                <EditorContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default BlogEditor;