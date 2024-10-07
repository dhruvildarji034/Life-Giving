import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import oglogo2 from './images/oglogo3.png';

const Header = () => {
  return (
    <header className="header">
      
            <div className='abc'>
                <div className='photu'>
                    { <img src= {oglogo2} alt="imahe00" height="85px" width="115px"/> }
                </div>

            <div className="navbarr">
                  <Link className="xyz" to="/"> Home </Link>
                  <Link className="xyz" to="/product"> Shop  </Link>
                  <Link className="xyz" to="/About"> About </Link>
                  <Link className="xyz" to="/contact"> Contact </Link>


                  
            </div>
    </div>
      
    </header>
  );
};

export default Header;
