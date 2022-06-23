import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Account from '../../components/Account/Account';
import ChangeNameInput from '../../components/ChangeNameInput/ChangeNameInput';
import { Link } from 'react-router-dom';
import './Profile.css';

/**
 * React component to create the profile page with user information and accounts
 * @returns { React.ReactElement } User profile page
 */
function Profile() {
   const firstName = useSelector((state) => state.firstName);
   const lastName = useSelector((state) => state.lastName);
   const isLoggedIn = useSelector((state) => state.isLoggedIn);

   const [isNameEdited, setNameEdited] = useState(false);

   const handleEditName = () => {
      setNameEdited(!isNameEdited);
   };

   return (
      <main className="profile_wrapper">
         {isLoggedIn ? (
            <div>
               <div className="welcome_wrapper">
                  <h1 className="welcome_text">Welcome back</h1>
                  {isNameEdited ? (
                     <div>
                        <div className="input_name_wrapper">
                           <ChangeNameInput id="firstname" value={firstName} />
                           <ChangeNameInput id="lastname" value={lastName} />
                        </div>
                        <div className="button_wrapper">
                           <button
                              className="edit_name_button"
                              onClick={handleEditName}
                           >
                              Save
                           </button>
                           <button
                              className="edit_name_button"
                              onClick={handleEditName}
                           >
                              Cancel
                           </button>
                        </div>
                     </div>
                  ) : (
                     <div>
                        <h1 className="name_text">
                           {firstName + ' ' + lastName + '!'}
                        </h1>
                        <button
                           className="edit_name_button"
                           onClick={handleEditName}
                        >
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
            </div>
         ) : (
            <div className="redirection_wrapper">
               <h1 className="redirection_text">
                  You are logged out. <br /> Please sign in to see your personal
                  page.
               </h1>
               <Link className="redirection_link" to="/login">
                  <h2>&#8594;</h2>
                  <h2 className="signin_text">Sign In</h2>
                  <h2>&#8592;</h2>
               </Link>
            </div>
         )}
      </main>
   );
}

export default Profile;
