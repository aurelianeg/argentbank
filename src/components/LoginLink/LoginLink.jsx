import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginFailureAction } from '../../scripts/store';
import './LoginLink.css';

/**
 * React component to create a login link updating Redux state when button clicked
 * @returns { React.ReactElement } LoginLink component
 */
function LoginLink(props) {
   const dispatch = useDispatch();

   return (
      <Link to={props.to}>
         <button
            className="login_button"
            onClick={() => {
               dispatch(loginFailureAction());
            }}
         >
            Sign In
         </button>
      </Link>
   );
}

LoginLink.propTypes = {
   to: propTypes.string.isRequired,
};

export default LoginLink;
