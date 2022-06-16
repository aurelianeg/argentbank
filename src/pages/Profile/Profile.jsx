import React, { useState } from 'react';
import Account from '../../components/Account/Account';
import './Profile.css';

function Profile(props) {
   let [isNameEdited, setNameEdited] = useState(false);

   const toggleEditName = () => {
      setNameEdited(!isNameEdited);
   };

   return (
      <main className="profile_wrapper">
         <div className="welcome_wrapper">
            <h1 className="welcome_text">Welcome back</h1>
            {isNameEdited ? (
               <div>
                  <div className="input_name_wrapper">
                     <input
                        className="input_name"
                        type="text"
                        id="firstname"
                        value={props.firstName}
                     />
                     <input
                        className="input_name"
                        type="text"
                        id="lastname"
                        value={props.lastName}
                     />
                  </div>
                  <div className="button_wrapper">
                     <button onClick={toggleEditName} className="edit_button">
                        Save
                     </button>
                     <button onClick={toggleEditName} className="edit_button">
                        Cancel
                     </button>
                  </div>
               </div>
            ) : (
               <div>
                  <h1 className="name_text">
                     {props.firstName + ' ' + props.lastName + '!'}
                  </h1>
                  <button onClick={toggleEditName} className="edit_button">
                     Edit Name
                  </button>
               </div>
            )}
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

export default Profile;
