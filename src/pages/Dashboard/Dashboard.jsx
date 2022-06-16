import React from 'react';
import Account from '../../components/Account/Account';
import './Dashboard.css';

function Dashboard() {
   return (
      <main className="dashboard_wrapper">
         <div className="welcome_wrapper">
            <h1 className="welcome_text">
               Welcome back
               <br />
               Tony Jarvis!
            </h1>
            <button className="edit_button">Edit Name</button>
         </div>
         <h2 className="sr-only">Accounts</h2>

         <Account
            title="Argent Bank Checking (x8349)"
            amount="2,082.79"
            description="Available Balance"
         />
         <Account
            title="Argent Bank Savings (x6712)"
            amount="10,928.42"
            description="Available Balance"
         />
         <Account
            title="Argent Bank Credit Card (x8349)"
            amount="184.30"
            description="Current Balance"
         />
      </main>
   );
}

export default Dashboard;
