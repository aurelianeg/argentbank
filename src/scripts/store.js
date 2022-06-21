import { configureStore } from "@reduxjs/toolkit";

const initialState = {
   firstName: '',
   lastName: '',
   isConnected: false,
   isNameEdited: false,
};

export const connectAction = () => ({ type: "connect" });

export const changeFirstNameAction = (value) => ({
   type: "changeFirstName",
   payload: value
});

export const changeLastNameAction = (value) => ({
   type: "changeLastName",
   payload: value
});

export const nameEditingAction = () => ({ type: "nameEditing" });

/**
 * Reducer function (Redux)
 * @param { Array } state - Global state
 * @param { Object } action - Action
 * @returns { Array } Updated global state
 */
function reducer(state = initialState, action) {
   switch (action.type) {
      case "connect": {
         return {
            ...state,
            isConnected: !state.isConnected
         }
      }
      case "changeFirstName": {
         return {
            ...state,
            firstName: action.payload
         }
      }
      case "changeLastName": {
         return {
            ...state,
            lastName: action.payload
         }
      }
      case "nameEditing": {
         return {
            ...state,
            isNameEdited: !state.isNameEdited
         }
      }
      default:
         return state
   }
}

export const store = configureStore({ reducer });