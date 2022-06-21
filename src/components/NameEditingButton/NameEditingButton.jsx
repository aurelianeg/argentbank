import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { nameEditingAction } from '../../scripts/store';
import './NameEditingButton.css';

/**
 * React component to create a button updating Redux state when clicked
 * @param { {title: String} } props - title: button text
 * @returns { React.ReactElement } NameEditingButton component
 */
function NameEditingButton(props) {
   const dispatch = useDispatch();

   return (
      <button
         className="edit_name_button"
         onClick={() => {
            dispatch(nameEditingAction());
         }}
      >
         {props.title}
      </button>
   );
}

NameEditingButton.propTypes = {
   title: propTypes.string.isRequired,
};

export default NameEditingButton;
