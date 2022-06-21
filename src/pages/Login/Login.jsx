import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

/**
 * React component to create the login page when the user is logged out
 * @returns { React.ReactElement } Login page
 */
function Login() {
   return (
      <main className="login_wrapper">
         <section className="login_content">
            <i className="fa fa-user-circle login_icon"></i>
            <h1>Sign In</h1>
            <form>
               <div className="input_login_wrapper">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" />
               </div>
               <div className="input_login_wrapper">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" autoComplete="off" />
               </div>
               <div className="remember_wrapper">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
               </div>
               <Link to="/profile">
                  <button className="login_button">Sign In</button>
               </Link>
            </form>
         </section>
      </main>
   );
}

export default Login;
