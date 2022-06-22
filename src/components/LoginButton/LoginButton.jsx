import React from 'react';
import { useDispatch } from 'react-redux';
import { logInAction } from '../../scripts/store';
import './LoginButton.css';

/**
 * React component to create a login button updating Redux state when clicked
 * @returns { React.ReactElement } LoginButton component
 */
function LoginButton() {
   const dispatch = useDispatch();

   return (
      <button
         className="login_button"
         onClick={() => {
            dispatch(logInAction());
         }}
      >
         Sign In
      </button>
   );
}

export default LoginButton;
