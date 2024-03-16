import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo.png';
import './navbar.css';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar({size}) { 
 return (
    <nav className="navbar navbar-expand-lg p-2 ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" className='logo-image' /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav m-auto gap-3 ">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/tools">tools</Link>
            <Link className="nav-link" to="/cast">Cast</Link>
            <Link className="nav-link" to="/Store">Store</Link>
            <Link className="nav-link" to="/Episode">Episode</Link>
          </div>
          {/* <Link className='navbar-button' to="/Store">Store</Link> */}
          <div className="cart-cont ">
          <Link className='cart-main-icon m-3  ' to="/Cart"> <FontAwesomeIcon icon={faCartArrowDown} /> <span className='cart-number'>{size}</span> </Link>
          </div>
        </div>
      </div>
    </nav>
 );
}

export default Navbar;