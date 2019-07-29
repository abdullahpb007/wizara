import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Career/Banner';
import EditorContent from '../components/Career/CareerEditorContent';

class BlogEditor extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <EditorContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default BlogEditor;