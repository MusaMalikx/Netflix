import List from "../../components/list/list.component";
import tvShowsRequests from "../../tvShowsRequest";
import Navbar from "../../components/navbar/navbar.component";
import { Feature } from "../../components/feature/feature.component";
import './tv.style.scss';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectTvGenre, selectTvPage, selectTvUrl } from "../../features/tv-category/tvCategorySlice";
import { setUrl } from "../../features/tv-category/tvCategorySlice";

const TvShows = () => {

    const dispatch = useDispatch();

    const genre = useSelector(selectTvGenre);
    const page = useSelector(selectTvPage);
    const rl = useSelector(selectTvUrl);

    useEffect(() => {
        const tv_shows = [
            {
                type: "action",
                url: tvShowsRequests.fetchActionAdventure
            },
            {
                type: "adventure",
                url: tvShowsRequests.fetchActionAdventure
            },
            {
                type: "animation",
                url: tvShowsRequests.fetchAnimation
            },
            {
                type: "comedy",
                url: tvShowsRequests.fetchComedy
            },
            {
                type: "crime",
                url: tvShowsRequests.fetchCrime
            },
            {
                type: "documentary",
                url: tvShowsRequests.fetchDocumentary
            },
            {
                type: "drama",
                url: tvShowsRequests.fetchDrama
            },
            {
                type: "family",
                url: tvShowsRequests.fetchFamily
            },
            {
                type: "kids",
                url: tvShowsRequests.fetchKids
            },
            {
                type: "news",
                url: tvShowsRequests.fetchNews
            },
            {
                type: "reality",
                url: tvShowsRequests.fetchReality
            },
            {
                type: "soap",
                url: tvShowsRequests.fetchSoap
            },
            {
                type: "mystery",
                url: tvShowsRequests.fetchMystery
            },
            {
                type: "talk",
                url: tvShowsRequests.fetchTalkfetchRomance
            },
            {
                type: "scifi",
                url: tvShowsRequests.fetchScifiFantasy
            },
            {
                type: "war",
                url: tvShowsRequests.fetchWarPolitics
            },
            {
                type: "western",
                url: tvShowsRequests.fetchWestern
            },
        ];
        dispatch(setUrl(tv_shows.filter((tv) => tv.type === genre)))
        //console.log(url);
    }, [genre, dispatch])

    console.log(page, genre);
    console.log(rl);

    return (
        <div>
            <Navbar />
            <Feature page="tv" type='tv' />
            <br /><br />

            {
                (genre !== "") ? (
                    <>
                        <List title="" type="tv" url={rl.map(r => r.url) + "&page=1"} />
                        <List title="" type="tv" url={rl.map(r => r.url) + "&page=2"} />
                        <List title="" type="tv" url={rl.map(r => r.url) + "&page=3"} />
                        <List title="" type="tv" url={rl.map(r => r.url) + "&page=4"} />
                        <List title="" type="tv" url={rl.map(r => r.url) + "&page=5"} />
                        <List title="" type="tv" url={rl.map(r => r.url) + "&page=6"} />
                        <List title="" type="tv" url={rl.map(r => r.url) + "&page=7"} />
                        <List title="" type="tv" url={rl.map(r => r.url) + "&page=8"} />
                        <List title="" type="tv" url={rl.map(r => r.url) + "&page=9"} />
                        <List title="" type="tv" url={rl.map(r => r.url) + "&page=10"} />
                    </>
                ) : (
                    <>
                        <List title="Trending" type="tv" url={tvShowsRequests.fetchTrending} />
                        <List title="Action Adventure TV Shows" type="tv" url={tvShowsRequests.fetchActionAdventure} />
                        <List title="Animation TV Shows" type="tv" url={tvShowsRequests.fetchAnimation} />
                        <List title="Comedy TV Shows" type="tv" url={tvShowsRequests.fetchComedy} />
                        <List title="Crime TV Shows" type="tv" url={tvShowsRequests.fetchCrime} />
                        <List title="Documentary TV Shows" type="tv" url={tvShowsRequests.fetchDocumentry} />
                        <List title="Drama TV Shows" type="tv" url={tvShowsRequests.fetchDrama} />
                        <List title="Family TV Shows" type="tv" url={tvShowsRequests.fetchFamily} />
                        <List title="Kids TV Shows" type="tv" url={tvShowsRequests.fetchKids} />
                        <List title="Mystery TV Shows" type="tv" url={tvShowsRequests.fetchMystery} />
                        <List title="News TV Shows" type="tv" url={tvShowsRequests.fetchNews} />
                        <List title="Reality TV Shows" type="tv" url={tvShowsRequests.fetchReality} />
                        <List title="Sci-Fi TV Shows" type="tv" url={tvShowsRequests.fetchScifiFantasy} />
                        <List title="Soap TV Shows" type="tv" url={tvShowsRequests.fetchSoap} />
                        <List title="Talk TV Shows" type="tv" url={tvShowsRequests.fetchTalk} />
                        <List title="War Polotics TV Shows" type="tv" url={tvShowsRequests.fetchWarPolitics} />
                        <List title="Western TV Shows" type="tv" url={tvShowsRequests.fetchWestern} />
                    </>
                )
            }
        </div>
    )
}

export default TvShows;