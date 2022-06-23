import { configureStore } from "@reduxjs/toolkit";

// --------------- STATE INITIALIZATION ---------------

const initialState = {
   firstName: '',
   lastName: '',
   isLoggedIn: false,
};


// --------------- ACTIONS ---------------

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


// --------------- REDUCER ---------------

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
            // !!!!!! Add firstName and lastName updates
         }
      }
      case "logOut": {
         return initialState
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
      default:
         return state
   }
}


export const store = configureStore({ reducer });
