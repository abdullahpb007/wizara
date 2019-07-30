import React from "react";
import { withRouter } from "next/router";
import Link from "../../utils/ActiveLink";
import SideDrawer from "./SideDrawer";
import SearchForm from "./SearchForm";

class Navbar extends React.Component {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleDrawer = () => {
    this.setState(prevState => {
      return {
        drawer: !prevState.drawer
      };
    });
  };

  handleSearchForm = () => {
    this.setState(prevState => {
      return {
        searchForm: !prevState.searchForm
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { pathname } = this.props.router;

    let layOutCls = "";
    let logo = require("../../images/logo.png");
    if (pathname == "/home-three") {
      layOutCls = "marketing-navbar";
      logo = require("../../images/logo2.png");
    }

    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <React.Fragment>
        <header id="header">
          <div id="navbar" className={`crake-nav ${layOutCls}`}>
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src={logo} alt="logo" />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav nav ml-auto">
                    <li className="nav-item">
                      <Link activeClassName="active" href="/index">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href="/who-we-serve">
                        <a className="nav-link">Who We Serve</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href="/our-technology-focus">
                        <a className="nav-link">Our Technology Focus</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href="#">
                        <a className="nav-link">Discover</a>
                      </Link>
                      <ul className="dropdown_menu">
                        <li>
                          <Link activeClassName="active" href="/about-one">
                            <a>About</a>
                          </Link>
                        </li>
                        <li>
                          <Link activeClassName="active" href="/team-one">
                            <a>Leadership</a>
                          </Link>
                        </li>
                        <li>
                          <Link activeClassName="active" href="/team-two">
                            <a>Partner</a>
                          </Link>
                        </li>
                        <li>
                          <Link activeClassName="active" href="/pricing-three">
                            <a>Career</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href="#">
                        <a className="nav-link">Resource</a>
                      </Link>
                      <ul className="dropdown_menu">
                        <li>
                          <Link activeClassName="active" href="/blog-one">
                            <a>Blog</a>
                          </Link>
                        </li>
                        <li>
                          <Link activeClassName="active" href="#">
                            <a>Case Study</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href="/contact">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>
                    {/* <li className="nav-item"><a href="#" className="nav-link">Pages</a>
                                            <ul className="dropdown_menu">
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="#">
                                                        <a className="nav-link">About</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/about-one">
                                                                <a>About Us 1</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/about-two">
                                                                <a>About Us 2</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <Link activeClassName="active" href="/features">
                                                        <a>Features</a>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link activeClassName="active" href="/services">
                                                        <a>Services</a>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link activeClassName="active" href="/gallery">
                                                        <a>Gallery</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="#">
                                                        <a className="nav-link">Team</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/team-one">
                                                                <a>Team 1</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/team-two">
                                                                <a>Team 2</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="#">
                                                        <a className="nav-link">Pricing</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/pricing-one">
                                                                <a>Pricing 1</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/pricing-two">
                                                                <a>Pricing 2</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/pricing-three">
                                                                <a>Pricing 3</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="#">
                                                        <a className="nav-link">Portfolio</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/portfolio-one">
                                                                <a>Portfolio 2 Columns</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/portfolio-two">
                                                                <a>Portfolio 3 Columns</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/portfolio-three">
                                                                <a>Portfolio 4 Columns Wide</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/project-details">
                                                                <a>Portfolio Details</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="#">
                                                        <a className="nav-link">Shop</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/shop-one">
                                                                <a>Shop 1</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/shop-two">
                                                                <a>Shop 2</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/shop-details">
                                                                <a>Shop Details</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/cart">
                                                                <a>Cart</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/checkout">
                                                                <a>Checkout</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="#">
                                                        <a className="nav-link">Blog</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/blog-one">
                                                                <a>Blog 1</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/blog-two">
                                                                <a>Blog 2</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/blog-details">
                                                                <a>Blog Details</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <Link activeClassName="active" href="/login">
                                                        <a>Login</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/signup">
                                                        <a>Sign Up</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/coming-soon">
                                                        <a>Coming Soon</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/error">
                                                        <a>404 Error</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/faq">
                                                        <a>FAQ</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}

                    {/* <li className="nav-item">
                                            <Link activeClassName="active" href="#">
                                                <a className="nav-link">Portfolio</a>
                                            </Link>
                                            <ul className="dropdown_menu">
                                                <li>
                                                    <Link activeClassName="active" href="/portfolio-one">
                                                        <a>Portfolio 2 Columns</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/portfolio-two">
                                                        <a>Portfolio 3 Columns</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/portfolio-three">
                                                        <a>Portfolio 4 Columns Wide</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/project-details">
                                                        <a>Portfolio Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link activeClassName="active" href="#">
                                                <a className="nav-link">Blog</a>
                                            </Link>
                                            <ul className="dropdown_menu">
                                                <li>
                                                    <Link activeClassName="active" href="/blog-one">
                                                        <a>Blog 1</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/blog-two">
                                                        <a>Blog 2</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/blog-details">
                                                        <a>Blog Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link activeClassName="active" href="#">
                                                <a className="nav-link">Shop</a>
                                            </Link>
                                            <ul className="dropdown_menu">
                                                <li>
                                                    <Link activeClassName="active" href="/shop-one">
                                                        <a>Shop 1</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/shop-two">
                                                        <a>Shop 2</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/shop-details">
                                                        <a>Shop Details</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/cart">
                                                        <a>Cart</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/checkout">
                                                        <a>Checkout</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link activeClassName="active" href="/contact">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li> */}
                  </ul>
                </div>
                {/* <div className="mr-auto others-option">
                                    <ul className="navbar-nav">
                                        <li className="nav-item cart-wrapper">
                                            <Link activeClassName="active" href="#">
                                                <a>
                                                    <i className="icofont-shopping-cart cart-icon"></i>

                                                    <span>0</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="header-search-box">
                                            <Link activeClassName="active" href="#">
                                                <a
                                                    onClick={e => { e.preventDefault(); this.handleSearchForm(); }}
                                                    title="Search"
                                                >
                                                    <i className="icofont-search-2"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li onClick={this.handleDrawer}>
                                            <div className="side-menu">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
              </nav>
            </div>
          </div>
        </header>

        {this.state.drawer ? <SideDrawer onClick={this.handleDrawer} /> : ""}
        {this.state.searchForm ? (
          <SearchForm onClick={this.handleSearchForm} />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(Navbar);
