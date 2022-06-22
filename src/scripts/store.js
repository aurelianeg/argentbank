import { configureStore } from "@reduxjs/toolkit";

const initialState = {
   firstName: '',
   lastName: '',
   isLoggedIn: true,
   isNameEdited: false,
};

export const logInAction = () => ({ type: "logIn" });

export const logOutAction = () => ({ type: "logOut" });

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
      case "logIn": {
         return {
            ...state,
            isLoggedIn: true
         }
      }
      case "logOut": {
         return {
            ...state,
            isLoggedIn: false
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
