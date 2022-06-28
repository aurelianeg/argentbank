import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


// --------------- STATE INITIALIZATION ---------------

const initialState = {
   auth: {
      idToken: '',
      email: '',
      firstName: '',
      lastName: ''
   },
   isLoggedIn: false,
   hasLoginFailed: false,
};


// --------------- ACTIONS ---------------

export function loginAction() {
   console.log("LOGIN_ACTION")
   return {
      type: "LOGIN_ACTION"
   }
}

export function loginSuccessAction() {
   console.log("LOGIN_SUCCESS_ACTION")
   return {
      type: "LOGIN_SUCCESS_ACTION"
   }
}

export function loginFailureAction() {
   console.log("LOGIN_FAILURE_ACTION")
   return {
      type: "LOGIN_FAILURE_ACTION"
   }
}

export function logoutAction() {
   console.log("LOGOUT_ACTION")
   return {
      type: "LOGOUT_ACTION"
   }
}

export function changeFirstNameAction (value) {
   console.log("CHANGE_FIRST_NAME_ACTION")
   return {
      type: "CHANGE_FIRST_NAME_ACTION",
      payload: value
   }
}

export function changeLastNameAction(value) {
   console.log("CHANGE_LAST_NAME_ACTION")
   return {
      type: "CHANGE_LAST_NAME_ACTION",
      payload: value
   }
}


// --------------- REDUCER ---------------

/**
 * Reducer function (Redux)
 * @param { Array } state - Global state
 * @param { Object } action - Action
 * @returns { Array } Updated global state
 */
function reducer(state = initialState, action) {
   switch (action.type) {
      case "LOGIN_SUCCESS_ACTION": {
         return {
            ...state,
            isLoggedIn: true,
            hasLoginFailed: false
            // !!!!!! Add idToken, email, firstName and lastName updates
         }
      }
      case "LOGIN_FAILURE_ACTION": {
         return {
            ...state,
            hasLoginFailed: true
         }
      }
      case "LOGOUT_ACTION": {
         return initialState
      }
      case "CHANGE_FIRST_NAME_ACTION": {
         return {
            ...state,
            auth: {
               ...state.auth,
               firstName: action.payload
            }
         }
      }
      case "CHANGE_LAST_NAME_ACTION": {
         return {
            ...state,
            auth: {
               ...state.auth,
               lastName: action.payload
            }
         }
      }
      default:
         return state
   }
}

// To stay logged in when page refresh
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
   reducer: persistedReducer, 
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
      serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   }),
})

export const persistor = persistStore(store)