import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>IndiaTalks</h3>
              <p>
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p>United States</p>
                <p><strong>Phone:</strong> +1 5589 55488 55</p>
                <p><strong>Email:</strong> info@example.com</p>
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>On IndiaTalks</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Event Host FAQ</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Host getting started</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Attendee getting started</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Download Meeting Client</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>About</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">IndiaTalks Blog</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Our Team</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Why IndiaTalks</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Resources</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Press</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Support</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Support Center</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Feedback</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Contact Us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Accessibility</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright <strong><span>IndiaTalks</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Terms Of Use
        </div>
      </div>
    </footer>
  );
};

export default Footer;
