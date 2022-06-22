import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/argentBankLogo.png';
import LogoutLink from '../LogoutLink/LogoutLink';
import './Header.css';

/**
 * React component to create a header
 * @returns { React.ReactElement } Header component
 */
function Header() {
   const firstName = useSelector((state) => state.firstName);
   const isLoggedIn = useSelector((state) => state.isLoggedIn);

   return (
      <header className="header">
         <Link className="header_link" to="/">
            <img className="header_logo" src={logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
         </Link>
         {isLoggedIn ? (
            <nav className="nav">
               <Link className="nav_item" to="/profile">
                  <i className="fa fa-user-circle"></i>
                  <p className="nav_item_text">{firstName}</p>
               </Link>
               <LogoutLink to="/" />
            </nav>
         ) : (
            <nav className="nav">
               <Link className="nav_item" to="/login">
                  <i className="fa fa-user-circle"></i>
                  <p className="nav_item_text">Sign In</p>
               </Link>
            </nav>
         )}
      </header>
   );
}

export default Header;
