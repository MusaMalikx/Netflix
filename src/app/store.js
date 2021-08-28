import { configureStore } from '@reduxjs/toolkit';
import profileSlice from '../features/profile/profileSlice';
import userReducer from '../features/user/userSlice';
import movieCategorySlice from '../features/movie-category/movieCategorySlice';
import tvCategorySlice from '../features/tv-category/tvCategorySlice';
import featureMovieSlice from '../features/featureMovie/featureMovieSlice';
import searchSlice from '../features/search/searchSlice';
import previewSlice from '../features/preview/previewSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileSlice,
    movieCategory: movieCategorySlice,
    tvCategory: tvCategorySlice,
    featureMovie: featureMovieSlice,
    search: searchSlice,
    preview: previewSlice
  },
});
