// Configure and export the Redux store here
// Import rootReducer and any middleware (like thunk) you need
// Example:
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../redux/rootReducer';
// export const store = createStore(rootReducer, applyMiddleware(thunk));
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/userSlice.js";
import doctorData from "../slices/doctorSlice.js";
 
const store = configureStore({
  reducer: {
    auth: authReducer,
    doctorData: doctorData,
    
  },
});

export default store;
