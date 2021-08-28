import { createSlice } from '@reduxjs/toolkit';

export const tvCategorySlice = createSlice({
    name: 'tvCategory',
    initialState: {
        tvValue: "",
        tvPage: "",
        rl: ""
    },
    reducers: {
        setTvGenre: (state, action) => {
            state.tvValue = action.payload;
        },
        setTvPage: (state, action) => {
            state.tvPage = action.payload;
        },
        setUrl: (state, action) => {
            state.rl = action.payload;
        }
    },
});

export const { setTvGenre, setTvPage, setUrl } = tvCategorySlice.actions;
export const selectTvGenre = (state) => state.tvCategory.tvValue;
export const selectTvPage = (state) => state.tvCategory.tvPage;
export const selectTvUrl = (state) => state.tvCategory.rl;

export default tvCategorySlice.reducer;
