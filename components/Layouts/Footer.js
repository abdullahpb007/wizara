import Link from 'next/link';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area ptb-100 pb-0 bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <Link href="#">
                                    <a className="logo">
                                        <img src={require('../../images/logo2.png')} alt="logo2" />
                                    </a>
                                </Link>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual.</p>

                                <ul className="social-list">
                                    <li>
                                        <Link href="#">
                                            <a><i className="icofont-facebook"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><i className="icofont-twitter"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><i className="icofont-instagram"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><i className="icofont-linkedin"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Company</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="#">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Carrers</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Awards</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>User Program</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a href="#">Locations</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Login</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Products</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="/health-care">
                                            Health care
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/digital-commerce">
                                            Digital Commerce
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/travel-and-transportation">
                                            Travel and Transportation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/real-estate">
                                            Real Estate
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Discover</h3>

                                <ul className="list">
                                    <li>        
                                        <Link href="#">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Leadership</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Partner</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Career</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row h-100 justify-content-start align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright @ wizara 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
