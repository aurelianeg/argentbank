import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
   changeFirstNameAction,
   changeLastNameAction,
} from '../../scripts/store';
import './ChangeNameInput.css';

/**
 * React component to create an input updating Redux state when changed
 * @param { {id: String, value: String} } props - id: id name (first or last name), value: shown text
 * @returns { React.ReactElement } ChangeNameInput component
 */
function ChangeNameInput(props) {
   const dispatch = useDispatch();

   return (
      <input
         className="input_name"
         type="text"
         id={props.id}
         defaultValue={props.value}
         onChange={(event) => {
            props.id === 'firstname'
               ? dispatch(changeFirstNameAction(event.target.value))
               : dispatch(changeLastNameAction(event.target.value));
         }}
      />
   );
}

ChangeNameInput.propTypes = {
   id: propTypes.string.isRequired,
   value: propTypes.string.isRequired,
};

export default ChangeNameInput;
