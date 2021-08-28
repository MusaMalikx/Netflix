import SeasonItem from '../season-item/season-item.component';
import './season.style.scss';

const Season = ({ seasons, tv_id }) => {

    //console.log(seasons, tv_id);

    return (
        <>
            <h1>SEASONS</h1>
            <div className="season">
                {
                    seasons.map((season, i) => (
                        <SeasonItem key={i} tv_id={tv_id} season={season} />
                    ))
                }
                
            </div>
        </>
    )
}

export default Season;