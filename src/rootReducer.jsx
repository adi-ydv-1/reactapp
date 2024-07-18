import { combineReducers } from '@reduxjs/toolkit';
import programSlice from './programSlice';
import moduleSlice from './moduleSlice';

const rootReducer = combineReducers({
    module: moduleSlice,
    program: programSlice
});

export default rootReducer;
