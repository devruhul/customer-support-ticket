import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3 className="footer-logo">CS — Ticket System</h3>
          <p className="footer-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact Salad</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul>
            <li><a href="#">Products & Services</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Download Apps</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Information</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Join Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Social Links</h4>
          <ul>
            <li><a href="#">🔵 @CS — Ticket System</a></li>
            <li><a href="#">🔵 @CS — Ticket System</a></li>
            <li><a href="#">🔵 @CS — Ticket System</a></li>
            <li><a href="#">✉️ support@cs.com</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
