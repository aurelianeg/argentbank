import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
   return (
      <main className="login_wrapper">
         <section className="login_content">
            <i className="fa fa-user-circle login_icon"></i>
            <h1>Sign In</h1>
            <form>
               <div className="input_login_wrapper">
                  <label for="username">Username</label>
                  <input type="text" id="username" />
               </div>
               <div className="input_login_wrapper">
                  <label for="password">Password</label>
                  <input type="password" id="password" />
               </div>
               <div className="remember_wrapper">
                  <input type="checkbox" id="remember" />
                  <label for="remember">Remember me</label>
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
