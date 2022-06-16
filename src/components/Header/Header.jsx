import React from 'react';
import logo from '../../assets/logo/argentBankLogo.png';
import './Header.css';

function Header() {
   return (
      <header className="header">
         <a className="header_link" href="/">
            <img className="header_logo" src={logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
         </a>
         <nav className="nav">
            <a className="nav_item" href="/login">
               <i className="fa fa-user-circle"></i>
               <p className="nav_item_text">Sign In</p>
            </a>
            <a className="nav_item" href="/dashboard">
               <i className="fa fa-user-circle"></i>
               <p className="nav_item_text">Tony</p>
            </a>
            <a className="nav_item" href="/">
               <i className="fa fa-sign-out"></i>
               <p className="nav_item_text">Sign Out</p>
            </a>
         </nav>
      </header>
   );
}

export default Header;
