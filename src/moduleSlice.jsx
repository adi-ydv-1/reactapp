import { createSlice } from '@reduxjs/toolkit';

const moduleSlice = createSlice({
    name: 'module',
    initialState: {
        modules: []
    },
    reducers: {
        setModules(state, action) {
            state.modules = action.payload;
        }
    }
});
export const { setModules } = moduleSlice.actions;
export default moduleSlice.reducer;