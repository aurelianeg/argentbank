import React from 'react';
import { useSelector } from 'react-redux';
import Account from '../../components/Account/Account';
import ChangeNameInput from '../../scripts/ChangeNameInput';
import NameEditingButton from '../../scripts/NameEditingButton';
import './Profile.css';

function Profile() {
   const firstName = useSelector((state) => state.firstName);
   const lastName = useSelector((state) => state.lastName);
   const isNameEdited = useSelector((state) => state.isNameEdited);

   return (
      <main className="profile_wrapper">
         <div className="welcome_wrapper">
            <h1 className="welcome_text">Welcome back</h1>
            {isNameEdited ? (
               <div>
                  <div className="input_name_wrapper">
                     <ChangeNameInput
                        className="input_name"
                        id="firstname"
                        value={firstName}
                     />
                     <ChangeNameInput
                        className="input_name"
                        id="lastname"
                        value={lastName}
                     />
                  </div>
                  <div className="button_wrapper">
                     <NameEditingButton className="edit_button" title="Save" />
                     <NameEditingButton
                        className="edit_button"
                        title="Cancel"
                     />
                  </div>
               </div>
            ) : (
               <div>
                  <h1 className="name_text">
                     {firstName + ' ' + lastName + '!'}
                  </h1>
                  <NameEditingButton
                     className="edit_button"
                     title="Edit Name"
                  />
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
