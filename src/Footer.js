import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from
"react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
        
        <div className='redirect'>
            <p><Link className="xyz" to="/"> Home </Link></p>
            <p><Link className="xyz" to="/About"> Shop </Link></p>
            <p><Link className="xyz" to="/contact"> About </Link></p> 
            <p><Link className="xyz" to="/product"> Contact </Link></p> 


        </div>
        <div className="footer-contact">
          <h3>Contact us</h3>
          <p>Email: info@lifegiving.com</p>
          <p>Phone: +91 9265441657</p>
          <p>Address: 123 Green Way, Plant City, PC 12345</p>
        </div>
        <div className="footer-about">
          <h4>"The earth laughs in flowers"</h4>
          
        </div>        
    </footer>
  );
};

export default Footer;