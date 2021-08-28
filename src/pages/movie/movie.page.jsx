import List from "../../components/list/list.component";
import moviesRequests from "../../moviesRequest";
import Navbar from "../../components/navbar/navbar.component";
import { Feature } from "../../components/feature/feature.component";
import './movie.style.scss';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectMovieGenre, selectMovieUrl, setUrl } from "../../features/movie-category/movieCategorySlice";

const Movie = () => {

    const dispatch = useDispatch();

    const genre = useSelector(selectMovieGenre);
    //const page = useSelector(selectMoviePage);
    const rl = useSelector(selectMovieUrl);
    //const [rl, setUrl] = useState({});

    useEffect(() => {
        const movies = [
            {
                type: "action",
                url: moviesRequests.fetchAction
            },
            {
                type: "adventure",
                url: moviesRequests.fetchAdventure
            },
            {
                type: "animation",
                url: moviesRequests.fetchAnimation
            },
            {
                type: "comedy",
                url: moviesRequests.fetchComedy
            },
            {
                type: "crime",
                url: moviesRequests.fetchCrime
            },
            {
                type: "documentary",
                url: moviesRequests.fetchDocumentary
            },
            {
                type: "drama",
                url: moviesRequests.fetchDrama
            },
            {
                type: "family",
                url: moviesRequests.fetchFamily
            },
            {
                type: "fantasy",
                url: moviesRequests.fetchFantasy
            },
            {
                type: "history",
                url: moviesRequests.fetchHistory
            },
            {
                type: "horror",
                url: moviesRequests.fetchHorror
            },
            {
                type: "music",
                url: moviesRequests.fetchMusic
            },
            {
                type: "mystery",
                url: moviesRequests.fetchMystery
            },
            {
                type: "romance",
                url: moviesRequests.fetchRomance
            },
            {
                type: "scifi",
                url: moviesRequests.fetchScience
            },
            {
                type: "tvmovie",
                url: moviesRequests.fetchTvMovie
            },
            {
                type: "thriller",
                url: moviesRequests.fetchThriller
            },
            {
                type: "war",
                url: moviesRequests.fetchWar
            },
            {
                type: "western",
                url: moviesRequests.fetchWestern
            },
        ];
        dispatch(setUrl(movies.filter((movie) => movie.type === genre)))
        //console.log(url);
    }, [genre, dispatch])

    //console.log(page, genre);
    //console.log(rl);

    return (
        <div>
            <Navbar />
            <Feature page="movie" type='movie' />
            <br /><br />
            {
                (genre !== "") ? (
                    <>
                        <List title="" type="movie" url={rl.map(r => r.url) + "&page=1"} />
                        <List title="" type="movie" url={rl.map(r => r.url) + "&page=2"} />
                        <List title="" type="movie" url={rl.map(r => r.url) + "&page=3"} />
                        <List title="" type="movie" url={rl.map(r => r.url) + "&page=4"} />
                        <List title="" type="movie" url={rl.map(r => r.url) + "&page=5"} />
                        <List title="" type="movie" url={rl.map(r => r.url) + "&page=6"} />
                        <List title="" type="movie" url={rl.map(r => r.url) + "&page=7"} />
                        <List title="" type="movie" url={rl.map(r => r.url) + "&page=8"} />
                        <List title="" type="movie" url={rl.map(r => r.url) + "&page=9"} />
                        <List title="" type="movie" url={rl.map(r => r.url) + "&page=10"} />
                    </>
                ) : (
                    <>
                        <List title="Trending" type="movie" url={moviesRequests.fetchTrending} />
                        <List title="Action Movies" type="movie" url={moviesRequests.fetchAction} />
                        <List title="Adventure Movies" type="movie" url={moviesRequests.fetchAdventure} />
                        <List title="Animation Movie" type="movie" url={moviesRequests.fetchAnimation} />
                        <List title="Comedy Movies" type="movie" url={moviesRequests.fetchComedy} />
                        <List title="Crime Movies" type="movie" url={moviesRequests.fetchCrime} />
                        <List title="Documentary Movies" type="movie" url={moviesRequests.fetchDocumentary} />
                        <List title="Dramatic Movies" type="movie" url={moviesRequests.fetchDrama} />
                        <List title="Family Movies" type="movie" url={moviesRequests.fetchFamily} />
                        <List title="Fastasy Movies" type="movie" url={moviesRequests.fetchFantasy} />
                        <List title="History Movies" type="movie" url={moviesRequests.fetchHistory} />
                        <List title="Horror Movies" type="movie" url={moviesRequests.fetchHorror} />
                        <List title="Music Movies" type="movie" url={moviesRequests.fetchMusic} />
                        <List title="Mystery Movie" type="movie" url={moviesRequests.fetchMystery} />
                        <List title="Romance Movies" type="movie" url={moviesRequests.fetchRomance} />
                        <List title="Sci-Fi Movies" type="movie" url={moviesRequests.fetchScience} />
                        <List title="TV Movies" type="movie" url={moviesRequests.fetchTvMovie} />
                        <List title="Thriller Movies" type="movie" url={moviesRequests.fetchThriller} />
                        <List title="War" type="movie" url={moviesRequests.fetchWar} />
                        <List title="Western" type="movie" url={moviesRequests.fetchWestern} />
                    </>
                )
            }
        </div>
    )
}

export default Movie;