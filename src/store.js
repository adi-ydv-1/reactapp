// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
// Import other reducers as needed

const store = configureStore({
  reducer: {
    root: rootReducer,
    // Add other reducers here
  },
});

export default store;
