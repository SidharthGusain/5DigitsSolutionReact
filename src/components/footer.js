import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {

  // scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h3>About 5Digits Solution</h3>
            <p>
              We are a dynamic team of skilled software developers, united by
              our passion for innovation and excellence. With members from
              diverse backgrounds in the United Kingdom and India, each
              specializing in various technologies such as AI, machine learning,
              robotics, and data analysis.
            </p>
          </div>

          <div className="col-md-3 ml-auto">
            <h3 className="">Links</h3>
            <ul className="list-unstyled footer-links ">
              <li>
                <Link to="/" onClick={scrollToTop}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop}>About Us</Link>
              </li>
              <li>
                <Link to="#">Request a Quote</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
