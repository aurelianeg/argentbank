import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/argentBankLogo.png';
import './Header.css';

function Header(props) {
   return (
      <header className="header">
         <Link className="header_link" to="/">
            <img className="header_logo" src={logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
         </Link>
         {props.isConnected ? (
            <nav className="nav">
               <Link className="nav_item" to="/profile">
                  <i className="fa fa-user-circle"></i>
                  <p className="nav_item_text">{props.firstName}</p>
               </Link>
               <Link className="nav_item" to="/">
                  <i className="fa fa-sign-out"></i>
                  <p className="nav_item_text">Sign Out</p>
               </Link>
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
