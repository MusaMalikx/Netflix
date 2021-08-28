import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        movie: null,
        tv: null,
        item: "",
        result: false
    },
    reducers: {
        setTvSearch: (state, action) => {
            state.tv = action.payload;
        },
        setMovieSearch: (state, action) => {
            state.movie = action.payload;
        },
        setSeItem: (state, action) => {
            state.item = action.payload;
        },
        setResult: (state, action) => {
            state.result = action.payload;
        }
    },
});

export const { setTvSearch, setMovieSearch, setSeItem, setResult } = searchSlice.actions;
export const selectTvSearch = (state) => state.search.tv;
export const selectMovieSearch = (state) => state.search.movie;
export const selectItem = (state) => state.search.item;
export const selectResult = (state) => state.search.result;

export default searchSlice.reducer;
