import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginButton from '../../components/LoginButton/LoginButton';
import './Login.css';

/**
 * Show error message if login is not valid
 * @param {string} message - The error message
 */
/* function showErrorMessage(message) {
   message.className = 'error_message';
} */

/**
 * Hide error message if login is valid
 * @param {Object} message
 */
/* function showSuccess(message) {
   message.className = 'no_error_message';
}

function checkValidation(event) {
   event.preventDefault();
   console.log('All good');
} */

/**
 * React component to create the login page when the user is logged out
 * @returns { React.ReactElement } Login page
 */
function Login() {
   const isLoggedIn = useSelector((state) => state.isLoggedIn);

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
               <div className="no_error_message">
                  Wrong e-mail or password, please check again.
               </div>
               {isLoggedIn ? (
                  <Link to="/profile">
                     <LoginButton />
                     {/* <button className="login_button" onClick={checkValidation}>
                        Sign In
                     </button> */}
                  </Link>
               ) : (
                  <LoginButton />
               )}
            </form>
         </section>
      </main>
   );
}

export default Login;
