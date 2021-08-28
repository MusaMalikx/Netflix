import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        bool: false
    },
    reducers: {
        check: (state, action) => {
            state.bool = action.payload;
        },
    },
});

export const { check } = profileSlice.actions;
export const selectBool = (state) => state.profile.bool;

export default profileSlice.reducer;