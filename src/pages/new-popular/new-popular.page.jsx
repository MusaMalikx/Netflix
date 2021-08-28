import { Feature } from "../../components/feature/feature.component";
import List from "../../components/list/list.component";
import Navbar from "../../components/navbar/navbar.component";
import newPopularRequests from "../../newPopularRequest";
import "./new-popular.style.scss";

const NewPopular = () => {
  return (
    <div>
      <Navbar />
      <Feature page="popular" />
      <div>
        <br /><br />
        <List title="Upcoming Movies" type="movie" url={newPopularRequests.fetchUpcomingMovies} />
        <List title="Tv Shows Airing Today" type="tv" url={newPopularRequests.fetchTvShowsAiringToday} />
        <List title="Tv Shows On The Air" type="tv" url={newPopularRequests.fetchTvShowsOnTheAir} />
        <List title="Now Playing Movies" type="movie" url={newPopularRequests.fetchNowPlayingMovies} />
        <List title="Popular Movies and Tv Shows" type="movie" url={newPopularRequests.fetchPopularMovies} />
        <List title="" type="tv" url={newPopularRequests.fetchPopularTvShows} />
        <List title="Top Rated Movies and Tv Shows" type="movie" url={newPopularRequests.fetchTopRatedMovies} />
        <List title="" type="tv" url={newPopularRequests.fetchTopRatedTvShows} />
      </div>
    </div>
  );
};

export default NewPopular;
