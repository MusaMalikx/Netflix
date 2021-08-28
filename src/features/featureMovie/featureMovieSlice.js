import { createSlice } from '@reduxjs/toolkit';

export const featureMovieSlice = createSlice({
    name: 'featureMovie',
    initialState: {
        value: null,
    },
    reducers: {
        setMovie: (state,action)=>{
            state.value = action.payload;
        },
    },
});

export const { setMovie } = featureMovieSlice.actions;
export const selectMovie = (state) => state.featureMovie.value;

export default featureMovieSlice.reducer;
