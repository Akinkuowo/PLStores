import React from 'react';
import { Link } from 'react-router-dom';
// import {ReactComponent as Logo } from '../../images/crown.svg'
import { auth } from '../../firebase/firebase';
import logo from '../../images/Logo.png'
import './header.css'

const Header = ({ currentUser }) => {
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
           {
               currentUser ?
                <div className="option" onClick={()=> auth.signOut() }>
                    SIGN OUT
                </div>
           :
                <Link className="option" to="/signin">
                    SIGN IN 
                </Link>
            }
       </div>
    </div>
    )
}


export default Header;