import Navbar from '../../components/navbar/navbar.component';
import List from '../../components/list/list.component';
import { Feature } from '../../components/feature/feature.component';
import requests from '../../requests';
import { useSelector } from 'react-redux';
import { selectVerification } from '../../features/user/userSlice';
import { Redirect } from 'react-router';

export default function Home() {

    const bool = useSelector(selectVerification);

    return (
        <div>
            {
                !bool && <Redirect to="/verification" />
            }
            <Navbar />
            <Feature />
            <br /><br />

            <List title="Trending" url={requests.fetchTrending} />
            <List title="Netflix Originals" type="tv" url={requests.fetchNetflixOriginals} />
            <List title="Comedy Movies" type="movie" url={requests.fetchComedyMovies} />
            <List title="Romance Movies" type="movie" url={requests.fetchRomanceMovies} />
            <List title="Horror Movies" type="movie" url={requests.fetchHorrorMovies} />
            <List title="Documentaries" type="movie" url={requests.fetchDocumentaries} />

        </div>
    )
}
