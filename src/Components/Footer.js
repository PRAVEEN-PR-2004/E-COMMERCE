import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
        </div>
        <div className="footer__info">
          <p>&copy; 2024 Your E-commerce Website</p>
          <p>Contact: support@yourwebsite.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
