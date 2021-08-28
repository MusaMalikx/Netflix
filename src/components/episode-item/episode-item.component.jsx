import './episode-item.style.scss';

const EpisodeItem = ({ episode }) => {

    //console.log(episode);

    return (
        <div className="episode">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${episode?.still_path}`} alt="" />
            </div>
            <div className="context">
                <h2>{episode.name}</h2>
                <p>{episode.overview}</p>
            </div>
        </div>
    )
}

export default EpisodeItem;