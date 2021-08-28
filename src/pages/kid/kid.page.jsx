import List from '../../components/list/list.component';
import Navbar from '../../components/navbar/navbar.component';
import './kid.style.scss';

const Kid = () => {

    return (
        <div className="kid">
            <Navbar />
            <div>
                <br /><br />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=1`} />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=2`} />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=3`} />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=4`} />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=5`} />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=6`} />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=7`} />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=8`} />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=9`} />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=10`} />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=11`} />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=12`} />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=13`} />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=14`} />
                <List type="tv" url={`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=15`} />
            </div>
        </div>
    )
}

export default Kid;