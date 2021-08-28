import { useDispatch, useSelector } from 'react-redux';
import { selectMovieGenre, setMovieGenre, setMoviePage } from '../../features/movie-category/movieCategorySlice';
import { selectTvGenre, setTvGenre, setTvPage } from '../../features/tv-category/tvCategorySlice';
import './category.style.scss';


const Category = ({ page }) => {

    const dispatch = useDispatch();
    const Mgenre = useSelector(selectMovieGenre);
    const Tgenre = useSelector(selectTvGenre);

    const handleMovieChange = (e) => {
        dispatch(setMovieGenre(e.target.value))
        dispatch(setMoviePage(page))
    }

    const handleTvChange = (e) => {
        dispatch(setTvGenre(e.target.value))
        dispatch(setTvPage(page))
    }

    return (

        <div className="category" style={{
            marginLeft: "30px",
            paddingTop: "100px",
        }}>
            <h2>{page === 'movie' ? 'Movies' : page === 'tv' && 'TV Shows'}</h2>

            {
                page === 'movie' ? (
                    <select name="genre" id="genre" value={Mgenre} onChange={handleMovieChange}>
                        <option value="">Genre</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="animation">Animation</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="documentary">Documentary</option>
                        <option value="drama">Drama</option>
                        <option value="family">Family</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="history">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="music">Music</option>
                        <option value="mystery">Mystery</option>
                        <option value="romance">Romance</option>
                        <option value="scifi">Sci-fi</option>
                        <option value="tvmovie">Tv Movie</option>
                        <option value="thriller">Thriller</option>
                        <option value="war">War</option>
                        <option value="western">Western</option>
                    </select>
                ) :
                    page === 'tv' && (
                        <select name="genre" id="genre" value={Tgenre} onChange={handleTvChange}>
                            <option value="">Genre</option>
                            <option value="action">Action</option>
                            <option value="adventure">Adventure</option>
                            <option value="animation">Animation</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="documentary">Documentary</option>
                            <option value="drama">Drama</option>
                            <option value="family">Family</option>
                            <option value="kids">Kids</option>
                            <option value="news">News</option>
                            <option value="reality">Reality</option>
                            <option value="soap">Soap</option>
                            <option value="mystery">Mystery</option>
                            <option value="talk">Talk</option>
                            <option value="scifi">Sci-Fi</option>
                            <option value="war">War</option>
                            <option value="western">Western</option>
                        </select>
                    )
            }

        </div>

    )
}

export default Category;