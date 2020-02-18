import React from 'react';
import { Link } from 'react-router-dom';
// import {ReactComponent as Logo } from '../../images/crown.svg'
import logo from '../../images/Logo.png'
import './header.css'

const Header = () => {
    return (
    <div className="header-container">
       <Link className="logo-container" to="/">
             <img className="logo" src={logo} alt=""/>
       </Link>

       <div className="option-container">
           <Link className="option" to="/shop">
                SHOP
           </Link>
           <Link className="option" to="/contact">
                CONTACT 
           </Link>
           <Link className="option" to="/signin">
               SIGN IN 
           </Link>
       </div>
    </div>
    )
}


export default Header;