import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
  // scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="fa fa-xmark js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body">
          <ul className="site-nav-wrap">
            <li>
              <Link to="/" className="nav-link" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={scrollToTop}>
                About Us
              </Link>
            </li>
          </ul>
          <ul className="site-nav-wrap">
            <li className="cta">
              <Link to="#" className="nav-link" onClick={scrollToTop}>
                <span>Request a quote</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <header
        className="site-navbar py-4 js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <div className="site-logo mr-auto w-25">
              <Link to="/" onClick={scrollToTop}>
                <img
                  src="assets/images/logo2.1.png"
                  alt=""
                  className="img-fluid"
                />
              </Link>
            </div>

            <div className="mx-auto text-center">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block m-0 p-0">
                  <li>
                    <Link to="/" className="nav-link" onClick={scrollToTop}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="nav-link"
                      onClick={scrollToTop}
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="ml-auto w-25">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block m-0 p-0">
                  <li className="cta">
                    <Link to="#" className="nav-link" onClick={scrollToTop}>
                      <span>Request a quote</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <Link
                to="#"
                className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right"
              >
                <span className="fa fa-bars "></span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
