import { configureStore } from "@reduxjs/toolkit";

const initialState = {
   firstName: null,
   lastName: null,
   connected: false,
   isNameEdited: false,
};

export const connectAction = () => ({ type: "connect" });

export const changeNamesAction = () => ({ type: "changeNames" });

export const nameEditingAction = () => ({ type: "nameEditing" });

function reducer(state = initialState, action) {
   switch (action.type) {
      case "connect": {
         return {
            ...state,
            connected: !state.connected
         }
      }
      case "changeNames": {
         return state
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