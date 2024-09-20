// Configure and export the Redux store here
// Import rootReducer and any middleware (like thunk) you need
// Example:
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../redux/rootReducer';
// export const store = createStore(rootReducer, applyMiddleware(thunk));
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/userSlice.js";
import CatalogReducer from '../slices/catalogSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: CatalogReducer,
  },
});

export default store;
