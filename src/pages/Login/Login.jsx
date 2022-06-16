import React from 'react';
import './Login.css';

function Login() {
   return (
      <main className="login_wrapper">
         <section className="login_content">
            <i className="fa fa-user-circle login_icon"></i>
            <h1>Sign In</h1>
            <form>
               <div className="input_wrapper">
                  <label for="username">Username</label>
                  <input type="text" id="username" />
               </div>
               <div className="input_wrapper">
                  <label for="password">Password</label>
                  <input type="password" id="password" />
               </div>
               <div className="remember_wrapper">
                  <input type="checkbox" id="remember" />
                  <label for="remember">Remember me</label>
               </div>
               {/* PLACEHOLDER DUE TO STATIC SITE */}
               <a href="/dashboard" className="login_button">
                  Sign In
               </a>
               {/* SHOULD BE THE BUTTON BELOW */}
               {/* <button className="login_button">Sign In</button> */}
            </form>
         </section>
      </main>
   );
}

export default Login;
