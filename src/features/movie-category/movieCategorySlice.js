import { createSlice } from '@reduxjs/toolkit';

export const movieCategorySlice = createSlice({
    name: 'movieCategory',
    initialState: {
        movieValue: "",
        moviePage: "",
        rl: ""
    },
    reducers: {
        setMovieGenre: (state, action) => {
            state.movieValue = action.payload;
        },
        setMoviePage: (state, action) => {
            state.moviePage = action.payload;
        },
        setUrl: (state, action) => {
            state.rl = action.payload;
        }
    },
});

export const { setMovieGenre, setMoviePage, setUrl } = movieCategorySlice.actions;
export const selectMovieGenre = (state) => state.movieCategory.movieValue;
export const selectMoviePage = (state) => state.movieCategory.moviePage;
export const selectMovieUrl = (state) => state.movieCategory.rl;

export default movieCategorySlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// export const MovieSlice = createSlice({
//     name: 'movie',
//     initialState: {
//         mvalue: "",
//         mpage: ""
//     },
//     reducers: {
//         setMGenre: (state,action)=>{
//             state.mvalue = action.payload;
//         },
//         setMPage: (state, action) => {
//             state.mpage = action.payload;
//         },
//     },
// });

// export const { setMGenre, setMPage } = MovieSlice.actions;
// export const selectMGenre = (state) => state.movie.mvalue;
// export const selectMPage = (state) => state.movie.mpage;

// export default MovieSlice.reducer;
